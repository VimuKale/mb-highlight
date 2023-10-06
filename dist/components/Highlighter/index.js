"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
var _react = _interopRequireWildcard(require("react"));
var _regex = require("./regex");
var _dompurify = _interopRequireDefault(require("dompurify"));
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Highlighter = function Highlighter() {
  let searchQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let content = arguments.length > 1 ? arguments[1] : undefined;
  let regExp = arguments.length > 2 ? arguments[2] : undefined;
  const highlightedContent = () => {
    var _searchQuery$trim;
    if (searchQuery !== null && searchQuery !== void 0 && (_searchQuery$trim = searchQuery.trim()) !== null && _searchQuery$trim !== void 0 && _searchQuery$trim.length) {
      const escapedSearchValue = (0, _escapeStringRegexp.default)(searchQuery);
      const regex = new RegExp("(".concat(escapedSearchValue, ")(").concat(regExp ? regExp : _regex.REGEX.HTMLTAG, ")"), "gi");
      return (0, _htmlReactParser.default)(_dompurify.default.sanitize(content === null || content === void 0 ? void 0 : content.replace(regex, '<span class="highlight">$1</span>')));
    }
    return content;
  };
  return highlightedContent;
};
var _default = exports.default = Highlighter;