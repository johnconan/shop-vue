export default {
  state: {
    shopList: [
      {
        id: 1,
        title: "Nike red",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque!",
        img: require('../assets/shop-img/1.png'),
        gallery: [
          { name: 'Nike red-1', img: require('../assets/shop-img/1.png') },
          { name: 'Nike red-2', img: require('../assets/shop-img/2.png') },
          { name: 'Nike red-3', img: require('../assets/shop-img/3.png') }
        ]
      },
      {
        id: 2,
        title: "Nike street",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque!",
        img: require('../assets/shop-img/4.png'),
        gallery: [
          { name: 'Nike red-4', img: require('../assets/shop-img/4.png') },
          { name: 'Nike red-5', img: require('../assets/shop-img/5.png') },
          { name: 'Nike red-6', img: require('../assets/shop-img/6.png') }
        ]
      },
      {
        id: 3,
        title: "Nike green",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque!",
        img: require('../assets/shop-img/7.png'),
        gallery: [
          { name: 'Nike red-7', img: require('../assets/shop-img/7.png') },
          { name: 'Nike red-8', img: require('../assets/shop-img/8.png') },
          { name: 'Nike red-9', img: require('../assets/shop-img/9.png') }
        ]
      },
      {
        id: 4,
        title: "Nike white",
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque!",
        img: require('../assets/shop-img/10.png'),
        gallery: [
          { name: 'Nike red-10', img: require('../assets/shop-img/10.png') },
          { name: 'Nike red-11', img: require('../assets/shop-img/11.png') },
          { name: 'Nike red-12', img: require('../assets/shop-img/12.png') }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getProducts(state) {
      return state.shopList;
    },
    getProduct: (state) => (id) => {
      return state.shopList.find((product) => product.id == id);
    }
  }
}