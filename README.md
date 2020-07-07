# CHARACTER LIBRARY WITH REACT
This app is a library for Rick and Morty characters, using the [Rick and Morty API](https://rickandmortyapi.com/). You can search any character by name, filter by race and save your favourite characters.

It has been implemented with React. The code has been divided into components. Each of the components has its own structure and its own style, using CSSModules. The state of the application has been managed using Context. Also, tests have been implemented, including snapshots and test for the used methods to check its functionality.

## Getting started

You just need these packages as global environment:

```
node@10.16.2

brew install yarn
```

It is time to get all the dependencies using our package.json:
```
yarn install
```
### Environment
If you wanna use the environment just type:
```
yarn start
```

### Test and Lint your code
A linter has been used, you should execute the task:
```
yarn lint
```

JEST has been used to test the api and app, using also its sanpshots feature:
```
yarn test
```

If the snapshot has change, you should update your snapshot typing:
```
yarn test -u
```
