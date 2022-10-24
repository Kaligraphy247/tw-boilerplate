# tw-boilerplate

## Easy
- git clone or download as zip and unpack
- cd and run `npm install -D`


## Best
- `cd` to the directory you want the template to be located and the run:
```bash
git init
git remote add origin https://github.com/Kaligraphy247/tw-boilerplate.git
git fetch origin
git reset --hard origin/master
```
 > you could also chain commands on `POSIX` systems by running:
 ```bash
 git init && git remote add origin https://github.com/Kaligraphy247/tw-boilerplate.git && git fetch origin && git reset --hard origin/master
 ```
- Delete `.git` Folder after `fetch` is complete, and you can see all boilerplate files.

- Run:
```bash
npm install -D
```
- After installation, run `npm run dev` to view the index page at `127.0.0.1:3000`.
- Replace the contents of `index.html` with yours to continue your development.

- change **name** in package.json from `my-cool-app` to something else.
- Enjoy


## Some included commands
- to compile to css, run:
``` bash
npm run compile-css
```

- to compile minfied css, run:
```bash
npm run compile-css-mini
```

- to build (Not tested), run:
``` bash
npm run build
```
