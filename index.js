import core from '@actions/core';
import { publishArticles } from './publish.js';

// ref: https://github.com/sinedied/publish-devto
async function run() {
  try {
    const {
      FILES: filesGlob,
      DEVTO_TOKEN: devtoKey,
      GH_TOKEN: githubToken
    } = process.env;

    core.setSecret(devtoKey);
    core.setSecret(githubToken);
    core.debug(
      JSON.stringify({
        filesGlob,
        devtoKey,
        githubToken
      })
    );

    await publishArticles({
      filesGlob,
      devtoKey,
      githubToken,
      useConventionalCommits: true,
    });
  } catch (error) {
    core.setFailed(error.toString());
  }
}

run();
