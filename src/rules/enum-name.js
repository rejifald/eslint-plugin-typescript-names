import Util from "../util";

export default {
  meta: {
    type: "layout",
    docs: {
      description: "enforce consistent enum naming",
      category: "Stylistic Issues",
      url: "empty"
    },
    schema: [
      {
        type: "object",
        properties: {
          declarations: {
            type: "string"
          },
          members: {
            type: "string"
          }
        }
      }
    ]
  },
  create: function({ report, options: [{ declarations, members }] }) {
    return {
      Identifier(node) {
        if (!node.parent) {
          return;
        }

        if (node.parent.type === "TSEnumDeclaration") {
          if (!Util.matchCase(node.name, declarations)) {
            report({
              message: `Enum declaration: ${node.name} should be written in ${declarations}`,
              node
            });
          }
        }

        if (node.parent.type === "TSEnumMember") {
          if (!Util.matchCase(node.name, members)) {
            report({
              message: `Enum member: ${node.name} should be written in ${members}`,
              node
            });
          }
        }
      }
    };
  }
};
