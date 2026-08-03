const fs = require('fs');
const path = require('path');
const css = require('css');

function getHtmlContent(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    return fs.readFileSync(fullPath, 'utf8');
  }
  return '';
}

function getCssAST(relPath) {
  const fullPath = path.resolve(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    const rawCss = fs.readFileSync(fullPath, 'utf8');
    return css.parse(rawCss);
  }
  return null;
}

module.exports = { getHtmlContent, getCssAST };
