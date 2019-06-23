<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="item__wrapper">
          <productItem 
            v-for="product in shopList" 
            :key="product.id"
            :product="product"
          />
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import productItem from '@/components/ProductItem.vue';

export default {
  components: {
    productItem
  },
  data() {
    return {
      shopList: null
    }
  },
  created() {
    this.shopList = this.$store.getters.getProducts;
  }
}
</script>

