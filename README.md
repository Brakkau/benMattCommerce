# benMattCommerce

# Style Guide & Coding Principles

This repo will generally adhere to the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript/blob/master/README.md). Where possible,
these standards will be inforced via linters.

Below are the coding principles specific to this project that we expect
contributors to this repo to adhere to.

**As a general rule, consistency is key. If in doubt, follow conventions that can be seen
throughout the codebase**

## Language Choice
- This project is written in Typescript
- SCSS rather than CSS

## Comments
- Comments are encouraged.
- They should generally comment on _why_ some code is there, not necessarily what
  it is doing. If you need to comment on what some code is doing you might need
  to refactor it.
- JSDoc style comments are encouraged even in TypeScript files as this gives
  greater context via intellisense in IDEs.

## Naming Conventions

- Classes should be TitleCase
- Functions and variables should be camelCase.

## Pure Functions
- This project will be using Pure Functions so please utalise ramda and keep to these guide lines 

## React Components

- Functional components should be used over class based components.
- Make use of hooks.
- Components are expected to be as "dumb" as possible. They should generally just
  accept the props required to render the UI.
- Follow Pure Functions as much as possible


