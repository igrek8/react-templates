const { isValidElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { format } = require('prettier');

module.exports = {
  test(value) {
    return isValidElement(value);
  },
  serialize(value) {
    return format(renderToStaticMarkup(value), { parser: 'html' }).trim();
  },
};
