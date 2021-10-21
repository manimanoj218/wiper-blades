<template>
  <div class="row justify-content-center" id="product-list">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title text-left">
            <strong>REPLACE WIPER BLADES</strong>
          </h6>
          <p class="card-text text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div class="row">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Home",
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss">
#product-list {
  .card {
    .card-body {
      p {
        font-size: 12px;
        color: #aebac5;
      }
    }
  }
}
</style>
