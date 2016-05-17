# Welcome
- What is it?
- Why use it?
- Technology Used: React, ES6, Babel, Webpack, PostCSS and NPM


getting-started - Build First Component
  - npm init -y
  - install dependancies
    - npm i react react-dom --save
  - Install Webpack
    - touch webpack.config.babel.js
    - npm i webpack webpack-dev-server webpack-hot-middleware express --save-dev
  - Install Webpack Style depdedancies
    - npm i css-loader style-loader postcss-loader postcss-mixins postcss-import postcss-nested postcss-simple-vars autoprefixer extract-text-webpack-plugin --save-dev
    - touch postcss.config.js
  - Install Webpack JS dependancies Babel
    - touch .babelrc
    - npm i babel-cli babel-core babel-loader babel-plugin-react-display-name babel-plugin-webpack-loaders babel-preset-es2015 babel-preset-react babel-preset-react-hmre babel-preset-stage-0 babel-polyfill babel-register --save-dev
  - Create Index file
    - touch index.html
    - include `bundle.js` and `style.css`
  - Create Application Directory
    - mkdir app && cd app
    - touch index.js
  - Configure Webpack paths
  - Setup server.js with express for hot module reloading
    - touch server.js
    - import express
    - import webpack
    - import
  - Add first component to index.js and render it.
  - add start to npm scripts in package.json

composing-components
  - make <App>
  - make <Button>
  - Add onClick handler
  - import Button to <App>
  - Make button alert "clicked"

managing state
- add local counter state
- add incrementCount method to app
- Output click count state in button

Props
- add className prop to button
- Passing functions
- Spread props into button

Styling components
- PostCSS into
- CSS module intro
- Add style loader to webpack
- Add button.css
- Import button.css into component and apply class

Routing
- npm i react-router history --save
- Explain routing
  - Change <App> render to use `{this.props.children}`
- Hash routing vs push state

Advanced state management
- npm I redux react-redux
- Define state tree. Aside: this is the hardest part
- define actions by looking at existing application
- create reducer for first action and define initial state
- Wrap <app> in <provider>
- Wrap component that needs state in <connect>
- Map stateToProps
- Map actionsToProps
- Trigger first state change
- Show redux dev tools

Production
- webpack -p
- Define node env to production in webpack provide
- Hook up Babel perf transforms
- Webpack extract text for CSS
- Webpack chunking

Testing
- npm i ava enzyme sinon
- Add Ava to package.json
- Create button.spec.js
- Test onClick triggered with sinon
- Assert prop type

Deploy
- Build for production and test with http-server
- surge.sh / AWS bucket
- map domain
- Profit

Resources
- Tyler's projects
- Redux from Dan and wesbos
- React.rocks
- List of components blog from blog