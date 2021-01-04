import { getArticlesFromFiles, updateLocalArticle } from './lib/article.js';
import { updateRemoteArticle } from './lib/devto.js';
import { getRepositoryFromPackage, updateImagesUrls } from './lib/util.js';
import { commitAndPushUpdatedArticles } from './lib/git.js';

async function publishArticles(options) {
  try {
    const repository = await getRepositoryFromPackage();
    const articles = await getArticlesFromFiles(options.filesGlob);

    console.info(`Found ${articles.length} article(s)`);
    console.info('Publishing articles on dev.to, please wait…');

    let shouldCommit = false;

    async function updateArticles(articles) {
      for (const article of articles) {
        const newArticle = updateImagesUrls(article, repository);

        // TODO: check if need to update before POST/PUT
        // console.log(matter.stringify(newArticle.content, newArticle.data))

        const result = await updateRemoteArticle(newArticle, options.devtoKey);

        // TODO: set status, try/catch here

        const localArticle = await updateLocalArticle(article, result);
        shouldCommit |= localArticle.hasChanged;

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 5000);
        });
        // TODO: log results
      }
    }

    await updateArticles(articles);

    if (shouldCommit) {
      await commitAndPushUpdatedArticles(
        articles,
        repository,
        options.githubToken,
        options.useConventionalCommits
      );
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw new Error(`Publish failed`);
  }
}

export { publishArticles };
