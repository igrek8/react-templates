const loader = require('style-loader');

module.exports = function loader(...args) {
  return loader.call(this, ...args);
};

const content = `
  var styles = global["__stylesheets__"] ? global["__stylesheets__"] : [];
  global["__stylesheets__"] = styles;
  styles.push(content);
`;

module.exports.pitch = function pitch(...args) {
  return loader.pitch.call(this, ...args) + `; ${content}`;
};
