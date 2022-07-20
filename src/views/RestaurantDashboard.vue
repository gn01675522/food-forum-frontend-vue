<!-- 初步完成 -->
<template>
  <div class="container py-5">
    <div>
      <h1>{{ dashboard.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ dashboard.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ dashboard.Comments.length }} </li>
      <li>瀏覽次數： {{ dashboard.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>

const dummyBoard = {
  restaurant: {
    id: 4,
    name: "Alberta Schumm",
    tel: "(834) 031-9244 x9529",
    address: "0942 Yost Fields",
    opening_hours: "08:00",
    description:
      "Inventore quia quia officiis error. Et fuga omnis ut eos sed eos dolores dolorem. Aut eius tempore in illum cum. Nobis velit aut.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=61.75616805401394",
    viewCounts: 0,
    createdAt: "2022-07-07T12:57:23.000Z",
    updatedAt: "2022-07-07T12:57:23.000Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
    Comments: [
      {
        id: 4,
        text: "Quasi qui et qui aut et quaerat.",
        UserId: 2,
        RestaurantId: 4,
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
        id: 104,
        text: "Dolorum commodi voluptas consectetur qui.",
        UserId: 2,
        RestaurantId: 4,
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
        id: 54,
        text: "Sunt sit nostrum similique.",
        UserId: 3,
        RestaurantId: 4,
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
};

export default {
  data() {
    return {
      dashboard: {},
      comments: []
    };
  },
  methods: {
    DashboardRestaurant() {
      const { restaurant } = dummyBoard;
      this.dashboard = restaurant;
    },
  },
  created() {
    this.DashboardRestaurant()
  }
};
</script>
