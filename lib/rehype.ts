import visit from "unist-util-visit";
import type { Pluggable } from "unified";
import { Element } from "hast";

const tokenClassNames = {
  tag: "text-code-red",
  "attr-name": "text-code-yellow",
  "attr-value": "text-code-green",
  deleted: "text-code-red",
  inserted: "text-code-green",
  punctuation: "text-code-white",
  keyword: "text-code-purple",
  string: "text-code-green",
  function: "text-code-blue",
  boolean: "text-code-red",
  comment: "text-gray-400 italic",
};

export const rehypeSyntaxClassNames: Pluggable = () => {
  return (tree) => {
    visit<Element>(tree, "element", (node) => {
      const [token, type] = (node.properties as any).className || [];
      if (token === "token") {
        (node.properties as any).className = [
          tokenClassNames[type as keyof typeof tokenClassNames],
        ];
      }
    });
  };
};
