"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
var _react = _interopRequireDefault(require("react"));
var _regex = require("./regex");
var _dompurify = _interopRequireDefault(require("dompurify"));
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Highlighter = function Highlighter() {
  let searchQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let content = arguments.length > 1 ? arguments[1] : undefined;
  let regExp = arguments.length > 2 ? arguments[2] : undefined;
  return _react.default.useMemo(() => {
    var _searchQuery$trim;
    if (searchQuery !== null && searchQuery !== void 0 && (_searchQuery$trim = searchQuery.trim()) !== null && _searchQuery$trim !== void 0 && _searchQuery$trim.length) {
      const escapedSearchValue = (0, _escapeStringRegexp.default)(searchQuery);
      const regex = new RegExp("(".concat(escapedSearchValue, ")(").concat(regExp ? regExp : _regex.REGEX.HTMLTAG, ")"), "gi");
      return (0, _htmlReactParser.default)(_dompurify.default.sanitize(content === null || content === void 0 ? void 0 : content.replace(regex, '<span class="highlight">$1</span>')));
    }
    return content;
  }, [searchQuery, content, regExp]);
};
var _default = exports.default = Highlighter;