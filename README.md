# Lunchables

* [https://aaron-imbrock.github.io/lunchables/](https://aaron-imbrock.github.io/lunchables/)

What we're trying to do here is have each folder under the top-level repo folder be it's own project. Seperate react-app projects under one repo.
This doc covers setting up a project called `title-bar` and should act as a recipe for all projects that come after.

## Deployment

See [gh-pages](https://github.com/gitname/react-gh-pages) for full instructions.

This command will create a production deploy under the `gh-pages` branch.

If you want to deploy the `title-bar/build` contents to `title-bar` under the `gh-pages` branch:

---

- Create the `gh-pages` branch: `git checkout -b gh-pages`
- That branch should be empty except for an empty folder of `title-bar/.githappy`.
- A-C-P that branch and folder/dotfile to github. This branch will never be merged to `main`.

---
## Setup
- On the `main` branch: `cd title-bar` and run `npm i` to install the necessary packages.
- From the `title-bar` folder, edit `package.json` to thus: `  "homepage": "https://aaron-imbrock.github.io/lunchables/title-bar".
- Also edit `    "deploy": "gh-pages -d build -e title-bar"` to include `-e title-bar`. I found that reading through the `gh-pages` source code.
- Finally, from the `main` branch run `npm run deploy`. That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run. Our previous edits will cause the contents of the `build` folder under `main` branch to push to the `title-bar` folder under `gh-pages` branch. 

---

On GitHub > Repo > Settings > Pages:

- Source: `Deploy from a branch`
- Branch: `gh-pages`. `/ (root)`
- `Save`

---

The top-level repo README will still show as 'index' so makes sure you append `title-bar` in the URL.

The URL is [here](https://aaron-imbrock.github.io/lunchables/title-bar/)

---

If you fubar it all up and you can't figure out how to fix it:

- Starting from the `main` branch delete the `gh-pages` branch: `git push origin --delete gh-pages`
- Local `gh-pages` should show nothing but `title-bar/.githappy`.
- Go up to the `Setup` instructions and you should be fine.