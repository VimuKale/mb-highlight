import React from "react";
import { REGEX } from "./regex";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import escapeStringRegexp from "escape-string-regexp";

const Highlighter = (searchQuery = "", content, regExp) => {
  return React.useMemo(() => {
    if (searchQuery?.trim()?.length) {
      const escapedSearchValue = escapeStringRegexp(searchQuery);
      const regex = new RegExp(
        `(${escapedSearchValue})(${regExp ? regExp : REGEX.HTMLTAG})`,
        "gi"
      );
      return parse(
        DOMPurify.sanitize(
          content?.replace(regex, '<span class="highlight">$1</span>')
        )
      );
    }
    return content;
  }, [searchQuery, content, regExp]);
};

export default Highlighter;
