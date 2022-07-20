<template>
  <div class="container py-5">
    <AdminRestaurantForm :initial-restaurant = "restaurant"/>
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
  name: "AdminRestaurentEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: "",
      }
    }
  },
  create() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('restaurantId', restaurantId)
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
    },    
  },
};
</script>
