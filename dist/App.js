"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _Highlighter = _interopRequireDefault(require("./components/Highlighter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const App = () => {
  const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \n  when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n  It has survived not only five centuries, but also the leap into electronic typesetting, \n  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset \n  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like \n  Aldus PageMaker including versions of Lorem Ipsum";
  const [search, setSearch] = (0, _react.useState)("");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Search here"
  }), /*#__PURE__*/React.createElement("div", null, (0, _Highlighter.default)(search, content)));
};
var _default = exports.default = App;