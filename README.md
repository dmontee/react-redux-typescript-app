# React/Typescript with Redux and Webpack Starter

Slightly opinionated react/typescript app that has hot module replacement. The app comes already has postcss, stylelint, tslint, and prettier configured. I'll be adding Jest and Storybooks in the near future.

---

## Getting Started

1.) Clone or download the repo ex: `git clone https://github.com/dmontee/react-redux-typescript-app.git .`

2.) Run `npm i` (or `yarn install` if using yarn)

---

## Usage

**Development**

`npm start`

-   Build app continuously (HMR enabled)
-   Open [http://localhost:8080](http://localhost:8080) in browser

**Commands**

| Command             | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| `npm run build:dev` | Build development version of the app and outputs it to ./dist directory   |
| `npm run lint`      | Run Typescript linter                                                     |
| `npm start`         | Runs the `npm run start:dev`                                              |
| `npm run start:dev` | Runs app continuously with HMR on [localhost:8080](http://localhost:8080) |
