const fs = require('fs');

const DIST_LIB_PATH = 'dist/libs/ng-morph/';
const README_PATH = 'README.md';
const LOGO_PATH = 'apps/demo/src/assets/images/ng-morph.png';
const PATH_TO_README = DIST_LIB_PATH + README_PATH;
const PATH_TO_LOGO = DIST_LIB_PATH + 'ng-morph.png';

copyExtraFiles();

function copyExtraFiles() {
  if (!fs.existsSync(README_PATH) || !fs.existsSync(LOGO_PATH)) {
    throw new Error('Requested files do not exit');
  } else {
    copyReadmeIntoDistFolder(README_PATH, PATH_TO_README);
    fs.copyFileSync(LOGO_PATH, PATH_TO_LOGO);
  }
}

function copyReadmeIntoDistFolder(srcPath, toPath) {
  const fileBody = fs.readFileSync(srcPath).toString();
  const withoutLogos = fileBody.replace(
    'apps/demo/src/assets/images/ng-morph.png',
    'ng-morph.png',
  );

  fs.writeFileSync(toPath, withoutLogos);
}
