import * as core from '@actions/core';
import dotenv from 'dotenv';

dotenv.config();

import { publishArticles } from './publish';

// ref: https://github.com/sinedied/publish-devto
async function run() {
  try {
    const {
      FILES: filesGlob = '',
      DEVTO_TOKEN: devtoKey = '',
      GH_TOKEN: githubToken = '',
    } = process.env;

    core.setSecret(devtoKey);
    core.setSecret(githubToken);
    core.debug(
      JSON.stringify({
        filesGlob,
        devtoKey,
        githubToken,
      }),
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
