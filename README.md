# Lunchables

* [https://aaron-imbrock.github.io/lunchables/title-bar](https://aaron-imbrock.github.io/lunchables/title-bar)

What we're trying to do here is have each folder under the top-level repo folder be it's own seperate project. Seperate react-app projects all under one shared repo.
The `gh-pages` app does the heavy lifting, collecting all the necessary react project files under the `build` folder, thus making it possible to host any react-app project on GH Pages as if it was a static website. The devil though is in the details. This doc covers setting up a project called `title-bar` in the `title-bar` folder, using the `gh-pages` static-site project. It is a meant as a recipe for all projects that come after.

There's always the [gh-pages](https://github.com/gitname/react-gh-pages) for context, however any reason for referencing that doc needs to be back-added to this README. Bitch, ya hear me?!

## Why

Because it's 1 in the morning and I haven't touched this repo for 6 months. 6 months ago, the last time I did this, I also couldn't remember how to do any of this. Bitch, ya hear me!?

## Howto

You will deploy the `title-bar/build` contents under the `main` branch to `title-bar` under the `gh-pages` branch:

### Local

- Create the `gh-pages` branch: `git checkout -b gh-pages`
- That branch should be empty except for an empty folder and file of `title-bar/.githappy`.
- A-C-P that branch and folder/dotfile to github. That branch will never be merged to `main`.

---

- On the `main` branch: `cd title-bar` and run `npm i` to install the necessary packages.
- From the `title-bar` folder, edit `package.json` to thus: 
- 1/ `"homepage": "https://aaron-imbrock.github.io/lunchables/title-bar" `.
- 2/ `"deploy": "gh-pages -d build -e title-bar"` to include `-e title-bar`. I found that reading through the `gh-pages` source code.

`package.json` should look like this:

```json
  "homepage": "https://aaron-imbrock.github.io/lunchables/title-bar",
  "private": true,
  "dependencies": {
    ...
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build -e title-bar",
```

Finally, from the `main` branch, under `title-bar` folder, run:

 `npm run deploy  -- -m "Pushed X, Y, Z to Prod"`. That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.

Our previous edits will cause the contents of the `build` folder under `main` branch to push to the `title-bar` folder under `gh-pages` branch.

### GitHub

On GitHub > Repo > Settings > Pages:

- Source: `Deploy from a branch`
- Branch: `gh-pages`. `/ (root)`
- `Save`

---

The top-level repo README will still show as 'index' so makes sure you append `title-bar` in the URL.

The URL is [here](https://aaron-imbrock.github.io/lunchables/title-bar/)

---

If you fubar it all up and you can't figure out how to fix it:

- Starting from the `main` branch delete the `gh-pages` branch on GH: `git push origin --delete gh-pages`
- Delete the local `gh-pages` branch. Recreate it and confirm it shows nothing but `title-bar/.githappy`.
- Go up to the `Setup` instructions and you should be fine.


---

Friendly stranger reading this: I hope this helped. Your PRs and questions are gladly accepted.
