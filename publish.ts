import { getArticlesFromFiles, updateLocalArticle } from './lib/article';
import { updateRemoteArticle } from './lib/devto';
import { getRepositoryFromPackage, updateImagesUrls } from './lib/util';
import { commitAndPushUpdatedArticles } from './lib/git';

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
        console.log({ article });

        const result = await updateRemoteArticle(newArticle, options.devtoKey);

        // TODO: set status, try/catch here

        const localArticle = await updateLocalArticle(article, result);
        shouldCommit = shouldCommit || localArticle.hasChanged;

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve('ok');
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
        options.useConventionalCommits,
      );
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw new Error(`Publish failed`);
  }
}

export { publishArticles };
