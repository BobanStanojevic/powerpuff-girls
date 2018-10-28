
## How to run a project
Download the project either via git or download button, run `npm install` and `npm start`;

## Tech stack
- React Create App
- Typescript
- MobX (state management)
- SCSS

## Architecture and folder structure
I've splitted the scripts acording to their use:
- services are used for async actions
- styles for general styles, mixins, variables, grid and entry point of all styles
- utils for usefull scripts (async helper)
- models are used for the DTO
- stores are used for all logic regarding the view/model communication, I choosed Root Store Pattern for bundling up stores
- contacts are used for constacts across the project
- constainers are used as a entry point of the apps, according to Single Point of Responsibility paradigm
- components are organized according to Atomic Design Pattern
