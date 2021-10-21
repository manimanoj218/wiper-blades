const product = {
  state: {
    products: [
      {
        title: "FRONT WIPER BLADES (PAIR)",
        description: "Wiper blades (pair) for the front windshield",
        quantity: 0,
        totalPrice: 0,
        price: 10,
      },
      {
        title: "REAR WIPER BLADES (PAIR)",
        description: "Wiper blades (pair) for the rear windshield",
        quantity: 0,
        totalPrice: 0,
        price: 30,
      },
      {
        title: "HEADLIGHT WIPER BLADE (PAIR)",
        description: "Wiper blades (pair) for the front headlights",
        quantity: 0,
        totalPrice: 0,
        price: 5,
      },
    ],
  },
  mutations: {
    HANDLE_INCREAMENT_PRODUCT: (state, index) => {
      state.products[index]["quantity"] += 1;
    },
    HANDLE_DECREAMENT_PRODUCT: (state, index) => {
      if (state.products[index]["quantity"] > 0) {
        state.products[index]["quantity"] -= 1;
      }
    },
    HANDLE_TOTAL_PRICE: (state, index) => {
      state.products[index]["totalPrice"] =
        state.products[index]["quantity"] * state.products[index]["price"];
    },
  },
  actions: {
    updateProduct({ commit }, obj) {
      let { type, index } = obj;
      if (type == "Increament") {
        commit("HANDLE_INCREAMENT_PRODUCT", index);
      } else {
        commit("HANDLE_DECREAMENT_PRODUCT", index);
      }
    },
    calTotalPrice({ commit }, index) {
      commit("HANDLE_TOTAL_PRICE", index);
    },
  },
};

export default product;
