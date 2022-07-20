<!-- 子元件有 RestaurantDetail.vue、RestaurantComments.vue-->

<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial_restaurant="restaurant" />
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

const dummyData = {
  restaurant: {
    id: 1,
    name: "Annabell DuBuque",
    tel: "716-247-8911 x323",
    address: "3652 Lindgren Groves",
    opening_hours: "08:00",
    description:
      "Laborum architecto accusamus vel corrupti cumque assumenda vero quia. Odit doloremque reprehenderit beatae sapiente incidunt quasi. Quia consectetur praesentium. Accusantium omnis tenetur qui ea. Impedit quam tempora totam sed.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=60.46925004604737",
    viewCounts: 1,
    createdAt: "2022-07-07T12:57:23.000Z",
    updatedAt: "2022-07-10T19:20:08.822Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text: "Nulla iste et officiis dolor autem.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$HFg9hVY8F07tw.WplbE14uVEoBIU4pSKry3tDk7yzLvmib/nY1oxq",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-07T12:57:22.000Z",
          updatedAt: "2022-07-07T12:57:22.000Z",
        },
      },
      {
        id: 101,
        text: "At ipsum dolores dolores dolorem et facere.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$HFg9hVY8F07tw.WplbE14uVEoBIU4pSKry3tDk7yzLvmib/nY1oxq",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-07T12:57:22.000Z",
          updatedAt: "2022-07-07T12:57:22.000Z",
        },
      },
      {
        id: 51,
        text: "Atque ut amet facilis ex molestiae dolor aut debitis.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$prmhBEKhs8ilsCXnWTXnkOxIiHSReV9EUFDzQJuuF1KqKLOeMSF7a",
          isAdmin: false,
          image: null,
          createdAt: "2022-07-07T12:57:23.000Z",
          updatedAt: "2022-07-07T12:57:23.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

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
      currentUser: dummyUser.currentUser,
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
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
