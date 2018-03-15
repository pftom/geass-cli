const fs = require('fs-extra');
const path = require('path');
const os = require('os');

const cwdPath = path.resolve('index.js');
const root = path.dirname(cwdPath);

const packageJson = {
  name: 'geassjs',
  version: '0.1.0',
  private: true,
};

fs.writeFileSync(
  path.join(root, 'test.json'),
  JSON.stringify(packageJson, null, 2) + os.EOL
);