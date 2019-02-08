// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* eslint-disable no-multi-assign */
Node.prototype.on = window.on = function (name, fn) {
/* eslint-enable no-multi-assign */
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

/* eslint-disable no-multi-assign */
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
/* eslint-enable no-multi-assign */
  this.forEach((elem) => {
    elem.on(name, fn);
  });
};

export { $, $$ };
