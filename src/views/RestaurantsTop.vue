<!-- ./src/views/RestaurantsTop.vue -->
<!-- 人氣餐廳內容 -->
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto">
      <div
        class="row no-gutters"
        v-for="restaurant in restaurantTop"
        :key="restaurant.id"
      >
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurantTop.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show
            </router-link>

            <button type="button" class="btn btn-danger mr-2">移除最愛</button>
            <button type="button" class="btn btn-primary">加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Caitlyn Abernathy",
      tel: "054-532-5628",
      address: "6027 Stehr Center",
      opening_hours: "08:00",
      description: "Sit necessitatibus error maxime quo quidem quo cup",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.59594401106071",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Orland Volkman",
      tel: "654-215-9875 x5968",
      address: "5661 Padberg Highway",
      opening_hours: "08:00",
      description: "minus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.81944989778633",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Hester Abshire",
      tel: "980.029.9347 x96536",
      address: "6290 Jayce Cliff",
      opening_hours: "08:00",
      description: "Hic fuga modi nihil itaque illum enim reiciendis. ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.915274474958174",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Clyde Jacobi",
      tel: "1-972-150-0539",
      address: "1028 Dicki Loaf",
      opening_hours: "08:00",
      description: "Sed illo et vel quas et sint architecto eos non. P",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.982996754873213",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Lavinia Kessler",
      tel: "1-829-518-9206",
      address: "4361 Kasandra Club",
      opening_hours: "08:00",
      description: "Nisi officia tenetur magnam et. Non iure consequat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.13411151213812",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Alexandrine Gleichner MD",
      tel: "320-563-5689",
      address: "755 Mueller Station",
      opening_hours: "08:00",
      description: "Aut omnis incidunt ut odit nesciunt. Nemo delectus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.70419945280162",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Alycia Stark",
      tel: "642-275-2676",
      address: "1720 Kassandra Walk",
      opening_hours: "08:00",
      description: "Enim non saepe.\nSed rerum vero voluptatibus et.\nCo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.71025234170645",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Miss Lenny Conroy",
      tel: "(792) 846-9216 x34647",
      address: "87576 Conn Corner",
      opening_hours: "08:00",
      description: "Ipsum dignissimos assumenda repellendus aspernatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.30887937854642",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Kiley Luettgen",
      tel: "(407) 723-0577",
      address: "45312 Viola Island",
      opening_hours: "08:00",
      description: "Autem eaque ducimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.34287926641187",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Stuart Kuhlman",
      tel: "622-928-4580 x7026",
      address: "417 Easton Rest",
      opening_hours: "08:00",
      description: "Deserunt dicta consequatur ea eius exercitationem ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.90352721590067",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurantTop: {},
    };
  },
  created() {
    this.topRestaurant();
  },
  methods: {
    topRestaurant() {
      const { restaurants } = dummyData;
      this.restaurantTop = restaurants;
    },
  },
};
</script>
