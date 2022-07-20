<!-- ./src/views/Restaurants.vue -->
<!-- 此為餐廳頁面架構 -->
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Annabell DuBuque",
      tel: "716-247-8911 x323",
      address: "3652 Lindgren Groves",
      opening_hours: "08:00",
      description: "Laborum architecto accusamus vel corrupti cumque a",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.46925004604737",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Graham Greenfelder",
      tel: "1-012-634-0768 x27035",
      address: "8766 Gene Bridge",
      opening_hours: "08:00",
      description: "Ratione similique illo unde dolore quasi et enim.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.723934750295214",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Rhett Bergstrom",
      tel: "040.600.8250 x7437",
      address: "5396 Ruecker Mews",
      opening_hours: "08:00",
      description: "odit ut ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=61.83717374070521",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Alberta Schumm",
      tel: "(834) 031-9244 x9529",
      address: "0942 Yost Fields",
      opening_hours: "08:00",
      description: "Inventore quia quia officiis error. Et fuga omnis ",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Cydney Hintz",
      tel: "1-953-346-3027 x3668",
      address: "621 Champlin Squares",
      opening_hours: "08:00",
      description: "laboriosam repellendus amet",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.90968323842992",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Julio Armstrong V",
      tel: "966.744.0605 x8382",
      address: "315 Corkery Passage",
      opening_hours: "08:00",
      description: "Ex earum pariatur recusandae. Et cum iste nihil et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.28876165102815",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Jerrod Ledner",
      tel: "544.627.0757 x34866",
      address: "3305 Rollin Village",
      opening_hours: "08:00",
      description: "Eaque cumque dolores rerum sint eos molestias dele",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.40877789757805",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Kaden Ebert",
      tel: "(061) 533-1650",
      address: "7829 Herman Mountains",
      opening_hours: "08:00",
      description: "Eos quam molestiae animi nobis illum. Blanditiis d",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.1555424067068",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Jerod Schumm",
      tel: "911-733-1013",
      address: "3007 Heaney Rest",
      opening_hours: "08:00",
      description: "omnis ullam porro",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.67258247415513",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Jazmin Barton",
      tel: "(119) 113-0236 x2069",
      address: "7229 DuBuque Ramp",
      opening_hours: "08:00",
      description: "Et molestiae velit a error iusto tempora corporis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.680140970473161",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      page: 1,
      totalPage: -1,
    };
  },

  created() {
    this.fetchRestaurants();
  },

  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
