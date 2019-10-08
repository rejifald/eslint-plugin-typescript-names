// @TODO - add "not matches check for other cases". Each example should match only one case.

import Util from "../src/util";

const CASE_EXAMPLES = {
  "camelCase": [
    "myVar",
    "myVarID",
    "_myVar",
    "__myVar",
    "$myVar",
    "$$myVar",
    "$_myVar",
    "_$myVar"
  ],
  "PascalCase": [
    "MyVar",
    "Var"
  ],
  "kebab-case": [
    "my-var"
  ],
  "snake_case": [
    "my_var"
  ],
  "UPPER_SNAKE_CASE": [
    "UPPER_SNAKE_CASE"
  ]
};

describe("Util:matchCase", () => {
  Object.entries(CASE_EXAMPLES).forEach(([name, examples]) => {
    describe(name, () => {
      examples.forEach((example) => {
        it(`${example} should be valid ${name} name`, function() {
          expect(Util.matchCase(example, name)).toBe(true);
        });
      });

      const otherCases = Object.keys(CASE_EXAMPLES).filter(c => c !== name);
      otherCases.forEach((example) => {
        it(`${example} should be invalid ${name} name`, function() {
          expect(Util.matchCase(example, name)).toBe(false);
        });
      });
    });
  });
});
