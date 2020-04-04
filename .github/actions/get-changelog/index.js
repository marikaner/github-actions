const core = require('@actions/core');
const getChangelog = require('../../../test');

try {
  core.setOutput("changelog", getChangelog());
} catch (error) {
  core.setFailed(error.message);
}
