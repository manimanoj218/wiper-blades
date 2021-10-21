<template>
  <div class="col-md-12" id="product-card">
    <div class="card" v-for="(product, index) in products" :key="index">
      <div class="card-body">
        <div class="header">
          <div class="title text-left">
            <strong>{{ product.title }}</strong>
          </div>
          <div class="price text-right">
            <strong> £ {{ product.quantity * product.price }} . 00 </strong>
          </div>
        </div>
        <p>{{ product.description }}</p>
        <div class="footer">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-success btn-sm"
              @click="handleDecreament(index)"
            >
              -
            </button>
            <input
              type="text"
              :value="product.quantity"
              min="0"
              :disabled="true"
            />
            <button
              type="button"
              class="btn btn-outline-success btn-sm"
              @click="handleIncreament(index)"
            >
              +
            </button>
          </div>
          <button
            type="button"
            class="btn btn-success btn-sm"
            @click="calculateTotalPice(index)"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-success btn-sm w-100"
      @click="checkOutPage"
    >
      CHECKOUT
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductCard",
  computed: {
    ...mapGetters(["products"]),
  },
  created() {
    console.log("products", this.products);
  },
  methods: {
    ...mapActions(["updateProduct", "calTotalPrice"]),
    handleIncreament(index) {
      let obj = {
        type: "Increament",
        index: index,
      };
      this.updateProduct(obj);
    },
    handleDecreament(index) {
      let obj = {
        type: "Decreament",
        index: index,
      };
      this.updateProduct(obj);
    },
    calculateTotalPice(index) {
      this.calTotalPrice(index);
    },
    checkOutPage() {
      this.$router.push({
        name: "Checkout Page",
      });
    },
  },
};
</script>

<style lang="scss">
#product-card {
  .card {
    margin: 15px 0px;
    .card-body {
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 14px;
        }
        .price {
          width: 60%;
          font-size: 14px;
          color: blue;
        }
      }
      p {
        margin-top: 1rem;
        font-size: 12px;
        color: #aebac5;
      }
      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn-group {
          width: 38%;
          input {
            width: 38%;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>