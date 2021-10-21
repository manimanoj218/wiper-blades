<template>
  <div class="row justify-content-center" id="checkout-page">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <div class="back-div">
            <span @click="previousPage" class="material-icons">arrow_back</span>
            <span>Back</span>
          </div>
          <h6 class="card-title text-left">
            <strong>SUMMARY</strong>
          </h6>
          <ul>
            <li v-for="(product, index) in products" :key="index">
              <div class="price-title">
                {{ product.quantity + "x" }} {{ product.title }}
              </div>
              <div class="price-value">£ {{ product.totalPrice }} .00</div>
            </li>
          </ul>
          <div class="footer">
            <hr />
            <div class="total">
              <div class="price-title">TOTAL AMOUNT</div>
              <div class="price-value">£ {{ totalProductPrice }} .00</div>
            </div>
            <button class="btn btn-success btn-sm w-100">PAY NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CheckoutPage",
  data() {
    return {
      totalProductPrice: 0,
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  created() {
    this.totalProductPrice = this.products.reduce((acc, item) => {
      if (item.totalPrice > 0) {
        acc += item.totalPrice;
      }
      return acc;
    }, 0);
  },
  methods: {
    previousPage() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style lang="scss">
#checkout-page {
  .card {
    .card-body {
      min-height: 90vh;
      position: relative;
      .back-div {
        display: flex;
        align-items: center;
        color: #aebac5;
        span {
          margin: 0px 5px;
          cursor: pointer;
        }
        padding-bottom: 15px;
      }
      ul {
        margin: 0px;
        padding: 0px;
        padding-top: 20px;
        list-style-type: none;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0px;
          .price-title {
            font-size: 12px;
            font-weight: bold;
          }
          .price-value {
            font-size: 12px;
            font-weight: bold;
            color: blue;
          }
        }
      }
      .footer {
        position: absolute;
        bottom: 18px;
        width: 100%;
        right: 0;
        padding: 0px 20px;
        hr {
          margin: 8px 0px;
        }
        .total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0px;
          .price-title {
            font-size: 12px;
            font-weight: bold;
          }
          .price-value {
            font-size: 14px;
            font-weight: bold;
            color: blue;
          }
        }
      }
    }
  }
}
</style>