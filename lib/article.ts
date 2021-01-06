import fs from 'fs-extra';
import globby from 'globby';
import matter from 'gray-matter';

async function getArticlesFromFiles(filesGlob) {
  const files = await globby(filesGlob);
  return Promise.all(files.map(getArticleFromFile));
}

async function getArticleFromFile(file) {
  const content = await fs.readFile(file, 'utf-8');
  const article = matter(content, { language: 'yaml' });
  return { file, ...article };
}

async function saveArticleToFile(article) {
  try {
    const markdown = matter.stringify(article.content, article.data);
    fs.writeFileSync(article.file, markdown);
  } catch (error) {
    throw new Error(`Cannot write to file "${article.file}": ${error}`);
  }
}

async function updateLocalArticle(article, remoteData) {
  const data = { ...article.data };
  const newArticle = { ...article, data };
  let hasChanged = false;

  if (remoteData.id && !data.id) {
    data.id = remoteData.id;
    hasChanged = true;
  }

  if (data.published && !data.date && remoteData.published_at) {
    data.date = remoteData.published_at;
    hasChanged = true;
  }

  if (hasChanged) {
    await saveArticleToFile(newArticle);
  }

  return { ...newArticle, hasChanged };
}

export { getArticlesFromFiles, getArticleFromFile, updateLocalArticle };
