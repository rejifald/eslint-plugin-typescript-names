export const CASE_REGEX = {
  snake_case: /^[$_]*[a-z_]+$/,
  "kebab-case": /^[$_]*[a-z-]+$/,
  UPPER_SNAKE_CASE: /^[A-Z_]+$/,
  camelCase: /^[$_]*[a-z][a-zA-Z]+$/,
  PascalCase: /^[$_]*[A-Z][a-zA-Z]+$/
};

export default {
  matchCase(string = "", caseType) {
    if (!CASE_REGEX[caseType]) {
      throw new Error("Unknown case type");
    }

    return CASE_REGEX[caseType].test(string);
  }
};
