<!-- ./src/views/RestaurantsFeeds.vue -->
<!-- 餐廳頁面內容 -->
<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Annabell DuBuque",
      tel: "716-247-8911 x323",
      address: "3652 Lindgren Groves",
      opening_hours: "08:00",
      description:
        "Laborum architecto accusamus vel corrupti cumque assumenda vero quia. Odit doloremque reprehenderit beatae sapiente incidunt quasi. Quia consectetur praesentium. Accusantium omnis tenetur qui ea. Impedit quam tempora totam sed.",
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
    },
    {
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
    },
    {
      id: 6,
      name: "Julio Armstrong V",
      tel: "966.744.0605 x8382",
      address: "315 Corkery Passage",
      opening_hours: "08:00",
      description:
        "Ex earum pariatur recusandae. Et cum iste nihil et. Quia et accusantium rerum alias inventore et dolorum. Iusto expedita eos.",
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
    },
    {
      id: 7,
      name: "Jerrod Ledner",
      tel: "544.627.0757 x34866",
      address: "3305 Rollin Village",
      opening_hours: "08:00",
      description:
        "Eaque cumque dolores rerum sint eos molestias delectus aliquid qui.\nDolor ut consequuntur in ea ut sequi quibusdam.\nEt quas et fugiat impedit ad consequatur temporibus.\nAlias sed rerum autem.",
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
    },
    {
      id: 8,
      name: "Kaden Ebert",
      tel: "(061) 533-1650",
      address: "7829 Herman Mountains",
      opening_hours: "08:00",
      description:
        "Eos quam molestiae animi nobis illum. Blanditiis deleniti non voluptatem voluptatem quia provident sit omnis optio. Nihil rerum esse voluptates aut. Ut vel et hic vero rerum eum repudiandae.",
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
    },
  ],
  comments: [
    {
      id: 12,
      text: "Dolor qui magnam dolore aperiam minima ipsam ut ea.",
      UserId: 1,
      RestaurantId: 12,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AmK/JTPO/Ufeoj3nCR/K4.D8xtWYBZyTOxjzpNohkcpdOi0QlKznS",
        isAdmin: true,
        image: null,
        createdAt: "2022-07-07T12:57:22.000Z",
        updatedAt: "2022-07-07T12:57:22.000Z",
      },
      Restaurant: {
        id: 12,
        name: "Carolyn Goyette",
        tel: "561.865.1147 x800",
        address: "428 Borer Corner",
        opening_hours: "08:00",
        description: "nulla quae animi",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=40.931807017036114",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 47,
      text: "Adipisci accusamus enim officia error a earum voluptatem et perferendis.",
      UserId: 1,
      RestaurantId: 47,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AmK/JTPO/Ufeoj3nCR/K4.D8xtWYBZyTOxjzpNohkcpdOi0QlKznS",
        isAdmin: true,
        image: null,
        createdAt: "2022-07-07T12:57:22.000Z",
        updatedAt: "2022-07-07T12:57:22.000Z",
      },
      Restaurant: {
        id: 47,
        name: "Clyde Jacobi",
        tel: "1-972-150-0539",
        address: "1028 Dicki Loaf",
        opening_hours: "08:00",
        description:
          "Sed illo et vel quas et sint architecto eos non. Perferendis architecto molestias at aut quos. Explicabo et ea sequi quisquam et quibusdam non dolorem quos. Voluptatem nisi soluta quia ut accusantium quos dolorem. Qui explicabo natus. Laboriosam nemo dolore quo molestiae est qui qui quos.\n \rUt quis eum similique temporibus molestiae voluptatem doloremque minus. Explicabo facere quas et beatae culpa perspiciatis. Error deserunt ut quo sunt explicabo nihil.\n \rAliquam reprehenderit illum in quasi qui et accusantium doloremque eos. Dolores et laboriosam. Quam labore dolor ex quis voluptatem id. Earum blanditiis ab. Itaque pariatur consectetur et est eaque ratione impedit. Maiores magni et est inventore id.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=26.982996754873213",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 69,
      text: "Eum provident adipisci voluptatibus exercitationem sapiente quia eum explicabo.",
      UserId: 1,
      RestaurantId: 19,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AmK/JTPO/Ufeoj3nCR/K4.D8xtWYBZyTOxjzpNohkcpdOi0QlKznS",
        isAdmin: true,
        image: null,
        createdAt: "2022-07-07T12:57:22.000Z",
        updatedAt: "2022-07-07T12:57:22.000Z",
      },
      Restaurant: {
        id: 19,
        name: "Ms. Clay Hyatt",
        tel: "1-664-155-2438",
        address: "214 Trinity Route",
        opening_hours: "08:00",
        description:
          "Est dolore sit harum veniam reprehenderit. Velit placeat nihil eos enim ipsa quas.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=75.52851685429174",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 99,
      text: "Neque reprehenderit ducimus et sunt aut non veritatis quas qui.",
      UserId: 1,
      RestaurantId: 49,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AmK/JTPO/Ufeoj3nCR/K4.D8xtWYBZyTOxjzpNohkcpdOi0QlKznS",
        isAdmin: true,
        image: null,
        createdAt: "2022-07-07T12:57:22.000Z",
        updatedAt: "2022-07-07T12:57:22.000Z",
      },
      Restaurant: {
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
      },
    },
    {
      id: 125,
      text: "Aut voluptatum tempora voluptatibus deserunt et saepe et.",
      UserId: 1,
      RestaurantId: 25,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AmK/JTPO/Ufeoj3nCR/K4.D8xtWYBZyTOxjzpNohkcpdOi0QlKznS",
        isAdmin: true,
        image: null,
        createdAt: "2022-07-07T12:57:22.000Z",
        updatedAt: "2022-07-07T12:57:22.000Z",
      },
      Restaurant: {
        id: 25,
        name: "Cole Schroeder",
        tel: "744-060-6035 x30107",
        address: "277 Borer Point",
        opening_hours: "08:00",
        description: "voluptatem quasi quis",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=63.425626118219824",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 150,
      text: "Cupiditate aliquid dolor accusantium eos nihil id.",
      UserId: 1,
      RestaurantId: 50,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$AmK/JTPO/Ufeoj3nCR/K4.D8xtWYBZyTOxjzpNohkcpdOi0QlKznS",
        isAdmin: true,
        image: null,
        createdAt: "2022-07-07T12:57:22.000Z",
        updatedAt: "2022-07-07T12:57:22.000Z",
      },
      Restaurant: {
        id: 50,
        name: "Caitlyn Abernathy",
        tel: "054-532-5628",
        address: "6027 Stehr Center",
        opening_hours: "08:00",
        description:
          "Sit necessitatibus error maxime quo quidem quo cupiditate ullam.\nBlanditiis possimus totam sequi vero in sed.\nRepellat fugit praesentium praesentium dolor qui magni et ex.\nMolestias sed excepturi qui.\nConsequatur non soluta sunt error dolor eos perspiciatis et quo.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=65.59594401106071",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 8,
      text: "In ducimus aut nemo sint deleniti quisquam.",
      UserId: 2,
      RestaurantId: 8,
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
      Restaurant: {
        id: 8,
        name: "Kaden Ebert",
        tel: "(061) 533-1650",
        address: "7829 Herman Mountains",
        opening_hours: "08:00",
        description:
          "Eos quam molestiae animi nobis illum. Blanditiis deleniti non voluptatem voluptatem quia provident sit omnis optio. Nihil rerum esse voluptates aut. Ut vel et hic vero rerum eum repudiandae.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=40.1555424067068",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 28,
      text: "Deserunt illo et inventore magnam deleniti cumque.",
      UserId: 2,
      RestaurantId: 28,
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
      Restaurant: {
        id: 28,
        name: "Mauricio O'Connell",
        tel: "570.719.1743",
        address: "16347 Smith Throughway",
        opening_hours: "08:00",
        description: "amet voluptas eum",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=93.81678446082992",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 66,
      text: "Quod itaque neque hic ab voluptatibus fuga unde ut.",
      UserId: 2,
      RestaurantId: 16,
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
      Restaurant: {
        id: 16,
        name: "Halle Gleichner",
        tel: "(113) 269-6497",
        address: "19616 McGlynn Hollow",
        opening_hours: "08:00",
        description:
          "Ad eius expedita sit beatae. Maiores delectus nulla quidem sed. Recusandae eveniet explicabo dicta omnis excepturi.\n \rDebitis molestias est neque. Officia incidunt sunt. Veritatis aperiam eum. Neque ut laborum. Officiis impedit consequatur quisquam amet non officiis sit. Soluta et voluptatum quod.\n \rQuibusdam corporis et enim quisquam. Qui quae aut et aperiam id dolorem. Ut distinctio porro sunt. Numquam eveniet nostrum.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=43.425856852712364",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 80,
      text: "Quidem nihil sequi occaecati.",
      UserId: 2,
      RestaurantId: 30,
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
      Restaurant: {
        id: 30,
        name: "Amos Beatty",
        tel: "1-622-523-8981 x091",
        address: "139 Cassin Haven",
        opening_hours: "08:00",
        description: "est",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=12.024946683219873",
        viewCounts: 0,
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
        CategoryId: 3,
      },
    },
  ],
};

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      const { restaurants, comments } = dummyData;
      this.restaurants = restaurants;
      this.comments = comments.filter(
        (comment) => comment.Restaurant && comment.text
      );
    },
  },
};
</script>
