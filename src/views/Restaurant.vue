<!-- 子元件有 RestaurantDetail.vue、RestaurantComments.vue-->

<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial_restaurant="restaurant" :initialrestaurantComment="restaurantComment"/>
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params;
    this.fetchRestaurant(restaurantId);
    console.log(from)
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });

        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };

        this.restaurantComments = Comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    // fetchRestaurant(restaurantId) {
    //   try{
    //     const { data } = await restaurantsAPI.getRestaurant({ restaurantId });
    //     const { restaurant, isFavorited, isLiked } = data;

    //   }
    //   catch(error) {
    //     console.log('error', error)
    //     Toast.fire({
    //       icon: 'error',
    //       title: '無法取得餐廳資料，請稍後再試'
    //     })
    //   }
    //   console.log("fetchRestaurant id: ", restaurantId);

    //   this.restaurant = {
    //     id: dummyData.restaurant.id,
    //     name: dummyData.restaurant.name,
    //     categoryName: dummyData.restaurant.Category.name,
    //     image: dummyData.restaurant.image,
    //     openingHours: dummyData.restaurant.opening_hours,
    //     tel: dummyData.restaurant.tel,
    //     address: dummyData.restaurant.address,
    //     description: dummyData.restaurant.description,
    //     isFavorited: dummyData.isFavorited,
    //     isLiked: dummyData.isLiked,
    //   };

    //   this.restaurantComments = dummyData.restaurant.Comments;
    // },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log("payload", payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>
