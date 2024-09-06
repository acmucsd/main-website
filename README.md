# ACM's Main Website
![deployment status badge](https://img.shields.io/github/deployments/acmucsd/main-website/Production?label=deployment&style=for-the-badge)

Check it out @ [acmucsd.com](https://acmucsd.com/)

This is the source code behind our main website, and it's used to help prospective members learn more about ACM, enable current members to see what events are happening, and inform potential sponsors to work with us.

This site is built with [Next.js](https://nextjs.org/) and [Typescript](https://www.typescriptlang.org/). If you've had prior experience with [React](http://reactjs.org/), the codebase will feel very familiar.

### Contributing Guidelines
This site is actively maintained in the public by members of ACM's Development Team. We're a team of engineers, designers, and product managers creating tools to help members of ACM. If you'd like to contribute a feature to the portal, we're happy to look at any pull request, but please note that we might not merge it. If you're interested in trying out some freelance work, reach out to us via email ([dev@acmucsd.org](mailto:dev@acmucsd.org)), or join dev team when applications open up.

This site is powered by Vercel

[<img src="./public/assets/vercel.svg">](https://vercel.com/?utm_source=acmucsd&utm_campaign=oss)


# Setting Up Your Project

### Optional Recommended Setup

We suggest using [`nvm`](https://github.com/nvm-sh/nvm) to manage multiple node versions if you work
on separate projects. Installation [here](https://github.com/nvm-sh/nvm#installing-and-updating). To
check if you have `nvm` installed, run `nvm -v` and ensure you can view your current version. 


Likewise, you can use [`corepack`](https://github.com/nodejs/corepack) to ensure the right package
manager and version is being used. If your node version is configured properly, `corepack` should
already be installed and available. Manual installation [here](https://nodejs.org/en/download/)

<!-- USING COREPACK IN CI:
run `corepack prepare -o` whenever changing the package manager version to update `.corepack.tgz`.
then, in CI, we can run `corepack hydrate .corepack.tgz` to load the appropriate package manager version.
-->

## VSCode Marketplace Extensions

Our development team utilizes various VSCode extensions to ease the development process with code
shortcuts and error highlighting.

When opening the project in VSCode, you should get a prompt to install the recommended extensions.

Alternatively, you may manually install them, listed below:

- Prettier - Code formatter (`esbenp.prettier-vscode`)
- ESLint (`dbaeumer.vscode-eslint`)
- Stylelint (`stylelint.vscode-stylelint`)
- Prettier ESLint (`rvest.vs-code-prettier-eslint`)
- stylelint-plus (`hex-ci.stylelint-plus`)
- NPM Intellisense (`christian-kohler.npm-intellisense`)
- Path Intellisense (`christian-kohler.path-intellisense`)
- Simple React Snippets (`burkeholland.simple-react-snippets`)
- Auto Rename Tag (`formulahendry.auto-rename-tag`)
- Auto Close Tag (`formulahendry.auto-close-tag`)

None of these are required to run the repository so feel free to look through the full descriptions
for each extension to decide if you'd like to use it. We have listed them from most to least
valuable below if you decide to use them.

## Create an environment file

Copy the `.env.example` file from the root directory and duplicate it twice, naming the new files as
`.env.development` and `.env.production`. Set appropriate values for each secret variable listed
here and ensure that your `.env.*` files are included in your `.gitignore` to prevent pushing to
Github.

## Running the Repo

If it's your first time running the repository, run `yarn` or `yarn install` to install all
`node_modules` packages. If your global yarn version isn't compatible, try prefixing instances of
`yarn` with `corepack`, e.g. `corepack yarn` (this applies to later commands as well).

Run `yarn dev` to start a dev environment with the data from our testing API.

Once running, if there are no errors displaying in your command line terminal, the local deployment
should be visible at `localhost:3000`. If you cannot view your project here, ensure that you have no
other running processes on the port and have entered the start script correctly.