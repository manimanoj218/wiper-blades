# project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

First of all for this design approach i used vuex for state Management . 

In store i created one file for product in that file we have  state,actions,mutations and also we have getters in seperate file to get the state properties from product.

For UI i build one component which is Product Card . In this file i used MapGetters to get the all products from state.

I am assuming whenever the user click on either - or + button i am calculating the price based on quantity. whenever he click on add button only i am considering that particular product price will add to the  total amount.

In this Project i used router for navigation between product page and checkout page .
