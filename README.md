# RICK AND MORTY APP

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