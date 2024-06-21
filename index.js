"use strict";
const config = {
  rules: {
    'selector-class-pattern': [
      '^[a-z][-a-z0-9]+(__[-a-z0-9]+)?(--[a-z0-9]+)?$',
      {
        message: (selector) =>
          `Selector class ${selector} violates BEM Convention`,
        resolveNestedSelectors: true,
      },
    ],
  }
}

module.exports = config;