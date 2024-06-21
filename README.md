# stylelint-two-dash-bem-rule

![NPM Version](https://img.shields.io/npm/v/stylelint-two-dash-bem-rule)

[BEM Convention](https://en.bem.info/) zero dependency rule enforcing [Two Dashes style](https://en.bem.info/methodology/naming-convention/#two-dashes-style) for [Stylelint](https://stylelint.io/).

## Why

I was looking for a [Two Dashes style](https://en.bem.info/methodology/naming-convention/#two-dashes-style) BEM rule for Stylelint and couldn't find one. There are great options like [stylelint-selector-bem-pattern](https://github.com/simonsmith/stylelint-selector-bem-pattern) but that one is a more broad solution and I wanted to make it **as simple as possible** for my needs. I

If you use Two Dashes style BEM in your project and you want **just** the rule, nothing else, this is the what you need.

## Installation

```bash
npm install stylelint-bem-rule --save-dev
```

## Usage

Add the following to your `.stylelintrc` file:

```json
{
  "extends": ["stylelint-bem-rule"]
}
```

## Example

```css
/* Good */

.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
.block__elem-name--mod-name--mod-val {}

.block {
  &__element {
    &--modifier {
    }
  }
}

/* Error */

.block_element {}

.main {
  &_content {}

  &-content {}
}

```
