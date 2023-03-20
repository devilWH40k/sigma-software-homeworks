# Homework4

Tiny frontend project (landing page) created to practice mostly vanilla js skills

## Used technologies

- [Vite] (bundler)
- [SASS]
- HTML5
- modern JS
- [npm] for dependencies

---

## Starting a dev server

1. First of all you should install [node] unless you've already had it
2. Then install all dependencies using npm or an alternative one

```sh
$ npm i
```

3. To start the dev server run:

```sh
$ npm run dev
```

4. It will be available here http://localhost:5173
5. If you are done building use the following command to prepare the project for production:

```sh
$ npm run build
```

---

## Some aditional info

Preloading of the page lasts minimum 5s, to check "user unactive" behaviour you should waste the whole minute, if you in a hurry just have a look at **src/js/config.js** file to make some changes.

To check the task with greeting from the sign up form u should write "Vovan" as a name input xD

P.S. I didn't manage to do page closing task after user being unactive for 1m, so when popup window shows you can just check the console for a warning message (after 5sec with no activity), ofc if user hits the "Yes" button within given time warning won't show up.

[vite]: https://vitejs.dev
[sass]: https://sass-lang.com
[npm]: https://www.npmjs.com
[node]: https://nodejs.org/uk
