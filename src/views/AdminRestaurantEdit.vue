<template>
  <div class="container py-5">
    <AdminRestaurantForm 
    :initial-restaurant="restaurant" 
    @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

const dummyData = {
  restaurant: {
    id: 2,
    name: "Graham Greenfelder",
    tel: "1-012-634-0768 x27035",
    address: "8766 Gene Bridge",
    opening_hours: "08:00",
    description: "Ratione similique illo unde dolore quasi et enim.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=42.723934750295214",
    CategoryId: 5,
  },
  isFavorited: false,
  isLiked: false,
};

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm,
  },

  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
    };
  },

  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },

  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },

    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)
      const { restaurant } = dummyData
      this.restaurant = {
        ...this.restaurant,
        id: restaurant.id,
        name: restaurant.name,
        categoryId: restaurant.CategoryId,
        tel: restaurant.tel,
        address: restaurant.address,
        description: restaurant.description,
        image: restaurant.image,
        openingHours: restaurant.opening_hours
      }
    }
  },
};
</script>