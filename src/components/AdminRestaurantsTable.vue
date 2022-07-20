<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link 
          :to="{ name: 'admin-restaurant', params: {id: restaurant.id} }" 
          class="btn btn-link">
          Show
          </router-link>

          <router-link 
          :to="{name: 'admin-restaurant-edit', params: {id: restaurant.id}}" 
          class="btn btn-link">
          Edit
          </router-link>

          <button 
          type="button" 
          class="btn btn-link"
          @click.stop.prevent = "deleteRestaurant(restaurant.id)"
          >Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
      viewCounts: 1,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-10T19:20:08.000Z",
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
    {
      id: 11,
      name: "Mrs. Jovany Rippin",
      tel: "779.386.5809 x7365",
      address: "8122 Ellie Vista",
      opening_hours: "08:00",
      description: "assumenda",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.48598579065843",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 13,
      name: "Robert Sanford",
      tel: "148.253.4605",
      address: "514 Stracke Shoal",
      opening_hours: "08:00",
      description: "Aliquid magnam commodi libero quos hic est dolore vitae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.724632969597394",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 14,
      name: "Derick Grant",
      tel: "153-180-9664",
      address: "1543 Mann River",
      opening_hours: "08:00",
      description:
        "Reiciendis eius aut molestiae. Est accusantium quae magnam. Iusto delectus dolor qui. Quod culpa dolorum.\n \rSapiente in eos ut non dolore. Dicta error nulla qui aliquam sed illo perspiciatis. Harum saepe sed modi enim tempore iure deleniti ut magni. Illum nihil accusantium occaecati. Facilis numquam aperiam sapiente.\n \rAut quia dolores doloribus. Odio sint error et dignissimos ea ducimus dolore. Rerum velit voluptatibus et ipsa aperiam. Sit molestias exercitationem facilis eveniet iste quos. Ad expedita magni molestiae sed quo nihil eligendi quidem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.44994377509477",
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
      id: 15,
      name: "Keara Schoen",
      tel: "562-817-2122 x7402",
      address: "0063 Humberto Shoals",
      opening_hours: "08:00",
      description: "Pariatur officia rerum omnis aut dolorum aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.84355824167917",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 17,
      name: "Dorris Funk III",
      tel: "1-219-759-8767 x116",
      address: "0650 Bria Lakes",
      opening_hours: "08:00",
      description:
        "Cumque labore nisi tempore eos est corporis deleniti pariatur enim. Porro soluta quibusdam inventore ipsam qui. Illum incidunt velit exercitationem voluptatem aspernatur qui pariatur esse in. Natus ut id suscipit est nulla sit eveniet. Voluptatem aut nulla cum ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.207694047189584",
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
      id: 18,
      name: "Oceane Ondricka",
      tel: "(713) 929-0384",
      address: "31968 Esta Oval",
      opening_hours: "08:00",
      description: "sunt velit vel",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.08322244739947",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 20,
      name: "Kacie Heller",
      tel: "1-402-638-4810 x67505",
      address: "772 Jake Common",
      opening_hours: "08:00",
      description: "omnis eveniet sit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.6068335993182",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 21,
      name: "Cynthia Trantow",
      tel: "(879) 388-5518 x9152",
      address: "5460 Lauretta Ridges",
      opening_hours: "08:00",
      description:
        "Nulla omnis natus voluptatem. Sit sit illum accusantium et sit. Nobis sequi labore.\n \rVel soluta nam perspiciatis quaerat omnis quibusdam ut excepturi magni. Voluptas nihil ratione aspernatur. Necessitatibus aut aut eos cupiditate. Reprehenderit ut repudiandae rerum. Rerum consequuntur architecto eveniet illum et molestiae.\n \rDolorem assumenda dicta totam enim. Fugiat et quam ex enim doloribus molestiae fugit vel nesciunt. In repellat temporibus voluptatem corporis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.00006588236099",
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
      id: 22,
      name: "Shea Schaefer",
      tel: "056-381-7540 x452",
      address: "07682 Ritchie Ville",
      opening_hours: "08:00",
      description:
        "Maiores perspiciatis nemo doloremque magnam natus minus minus.\nVoluptatum laboriosam nulla ipsum ut.\nQui occaecati in repellat sed et molestiae dolor et.\nIpsa sunt aut nesciunt aut.\nNon omnis qui velit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.77204873090122",
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
      id: 23,
      name: "Aurore Mann",
      tel: "(212) 498-1921 x7138",
      address: "8688 Upton Lakes",
      opening_hours: "08:00",
      description: "ut quas voluptate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.421266710701161",
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
      id: 24,
      name: "Diana Nicolas",
      tel: "(742) 615-7799",
      address: "2749 Nicolas Parkway",
      opening_hours: "08:00",
      description:
        "Suscipit eius qui inventore ut repudiandae facere dicta qui fugit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.10891307577774",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 26,
      name: "Rachael Runte",
      tel: "(948) 527-3065 x14101",
      address: "733 Dylan Rapids",
      opening_hours: "08:00",
      description: "autem maxime facilis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.53942791066642",
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
      id: 27,
      name: "Jasper Sanford",
      tel: "943.913.2513",
      address: "54500 Paula Springs",
      opening_hours: "08:00",
      description: "officiis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.27120958506639",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 29,
      name: "Madilyn Robel",
      tel: "422.294.8714 x9755",
      address: "505 Regan Land",
      opening_hours: "08:00",
      description:
        "Reprehenderit aut ipsa recusandae ullam quia cumque cumque eveniet. Qui consequatur necessitatibus non vel autem exercitationem debitis veniam quaerat. Distinctio ipsa eligendi quo.\n \rUt iusto sed molestiae alias quisquam vitae eligendi in impedit. Voluptatibus totam esse est odit. Illum nulla sed.\n \rDolores delectus beatae provident dignissimos consequatur nesciunt. Nemo earum voluptas. Tenetur hic ut tempora occaecati qui ut omnis inventore et. Ullam illum placeat tenetur quod. Quia exercitationem doloribus quam dolorum ex quisquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.24961756348556",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 31,
      name: "Josefina Stiedemann",
      tel: "(892) 382-8040",
      address: "82975 Torphy Mountains",
      opening_hours: "08:00",
      description:
        "Non autem laborum exercitationem nulla consequuntur praesentium ut necessitatibus. Eius et laudantium et qui. Expedita nihil sint animi quod recusandae. In ab dolorem.\n \rDolore magnam recusandae assumenda ea qui ab aut sunt. Sed quo minus explicabo magnam quasi quae est. Consequatur reiciendis unde recusandae sapiente non nobis cupiditate consequatur amet.\n \rDeleniti modi non possimus explicabo ex ipsam harum. Voluptatem architecto quas velit est at et non. Fugit ad ratione. Suscipit ipsa omnis non repellat saepe est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.24167953436002",
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
      id: 32,
      name: "Kane Abernathy",
      tel: "650-046-8034 x918",
      address: "96855 Zboncak Brook",
      opening_hours: "08:00",
      description:
        "Facilis non rerum perspiciatis voluptas incidunt praesentium eum. Quasi id beatae voluptas facilis in autem provident minus repellat. Autem voluptatem sunt quia expedita ullam ea modi. Ipsum consequatur qui temporibus. Ratione enim recusandae autem doloribus deserunt aliquid iste similique et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.66410510676324",
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
      id: 33,
      name: "Creola Herzog",
      tel: "117.457.5274 x39861",
      address: "10920 Will Junction",
      opening_hours: "08:00",
      description: "ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.10329892924617",
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
      id: 34,
      name: "Ron Hansen",
      tel: "1-052-043-5688",
      address: "2070 Zemlak Forks",
      opening_hours: "08:00",
      description: "veniam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.713449655632807",
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
      id: 35,
      name: "Carmen Hills",
      tel: "691-834-5064 x23403",
      address: "1740 Mallie Turnpike",
      opening_hours: "08:00",
      description: "distinctio ex similique",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.59422941194593",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 36,
      name: "Tiana Johnson",
      tel: "775.082.8468",
      address: "960 Lauriane Fort",
      opening_hours: "08:00",
      description:
        "Assumenda perferendis quasi atque aliquam ut consequatur quam laboriosam sit. Dicta vel est magnam corporis consequuntur est. Voluptatibus vel accusamus voluptas ea dolore totam. Vitae veritatis laudantium et velit rerum natus. Ea et aliquid dolorum aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.219923320297106",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 37,
      name: "Rosetta Metz",
      tel: "957-009-3436",
      address: "7576 Kali Mall",
      opening_hours: "08:00",
      description:
        "Laboriosam dolores autem et repellat. Suscipit eum voluptatibus aut illo autem asperiores. Voluptate rerum ipsa consequatur molestiae incidunt qui sed laboriosam cumque. Ut omnis repudiandae veritatis aliquid laudantium ea cum quia illo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.50352926919832",
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
      id: 38,
      name: "Rylan Fahey",
      tel: "1-741-522-1906 x808",
      address: "07307 Macejkovic Rest",
      opening_hours: "08:00",
      description: "et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.07094296967267",
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
      id: 39,
      name: "Ms. Emie Deckow",
      tel: "121.914.9177 x9678",
      address: "10637 Witting Forks",
      opening_hours: "08:00",
      description:
        "Cumque dignissimos ducimus quia totam iste dolorem voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.307561166270727",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 40,
      name: "Gianni Streich DDS",
      tel: "1-582-943-2907",
      address: "14241 Palma Coves",
      opening_hours: "08:00",
      description:
        "Qui totam rerum voluptates dolores nobis magnam quis. Exercitationem enim dolores tempore id omnis. Molestiae quo quisquam non ab quia quam facilis nostrum. Fuga est totam est. Aut doloribus modi recusandae harum odit qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.777779148699445",
      viewCounts: 0,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 41,
      name: "Stuart Kuhlman",
      tel: "622-928-4580 x7026",
      address: "417 Easton Rest",
      opening_hours: "08:00",
      description:
        "Deserunt dicta consequatur ea eius exercitationem laborum ullam. Eius labore aspernatur tempora est aut iste ut harum. Delectus sunt eius dolorem exercitationem. Labore repellendus non vel.\n \rNostrum blanditiis consequatur fugit. Ea ut perferendis fugiat cupiditate non et. Et iusto harum labore reprehenderit rerum quo molestias. Inventore amet aut ab non neque. Perspiciatis autem cum est nobis rerum a eos doloribus.\n \rLaudantium repellendus quia veniam voluptas ea autem eos enim unde. Dolor saepe omnis qui aspernatur consequuntur deleniti sapiente sed. Ut recusandae ut ipsam voluptatem commodi ipsum ut. Excepturi cumque cum culpa aperiam ab deserunt tempore quidem ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.90352721590067",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 43,
      name: "Miss Lenny Conroy",
      tel: "(792) 846-9216 x34647",
      address: "87576 Conn Corner",
      opening_hours: "08:00",
      description:
        "Ipsum dignissimos assumenda repellendus aspernatur asperiores voluptatem ut nihil culpa.\nQuidem porro temporibus tempore natus optio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.30887937854642",
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
      id: 44,
      name: "Alycia Stark",
      tel: "642-275-2676",
      address: "1720 Kassandra Walk",
      opening_hours: "08:00",
      description:
        "Enim non saepe.\nSed rerum vero voluptatibus et.\nConsectetur debitis corporis consequatur odit dignissimos eum dignissimos repudiandae laboriosam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.71025234170645",
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
      id: 45,
      name: "Alexandrine Gleichner MD",
      tel: "320-563-5689",
      address: "755 Mueller Station",
      opening_hours: "08:00",
      description:
        "Aut omnis incidunt ut odit nesciunt. Nemo delectus rerum laborum temporibus aut facilis cumque modi esse. Commodi illo voluptatibus accusantium veritatis facilis. Magni et repellendus neque dolorem quis nostrum dolores. Laboriosam a sunt omnis consequatur fuga omnis. Velit nesciunt dolor harum corporis veritatis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.70419945280162",
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
      id: 46,
      name: "Lavinia Kessler",
      tel: "1-829-518-9206",
      address: "4361 Kasandra Club",
      opening_hours: "08:00",
      description:
        "Nisi officia tenetur magnam et. Non iure consequatur sed aut molestiae quod nisi. Ea esse voluptatibus minima ut. Amet itaque vitae dolor sunt corrupti. Eum dolor facere facilis eum velit nostrum possimus. Molestiae commodi tempora ipsam vel soluta.\n \rEst impedit beatae sunt sit optio et laborum. Ea illo ratione. Fugit atque perspiciatis. Officiis non sint ducimus voluptas earum a aut velit corrupti. Molestiae aliquid accusantium numquam in.\n \rAut ad quaerat dolorum soluta ratione beatae. Omnis ipsa laborum. Aut consequatur doloribus itaque harum aut voluptatem ut est. Corrupti nesciunt repellendus repellendus doloribus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.13411151213812",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
      id: 48,
      name: "Hester Abshire",
      tel: "980.029.9347 x96536",
      address: "6290 Jayce Cliff",
      opening_hours: "08:00",
      description:
        "Hic fuga modi nihil itaque illum enim reiciendis. Suscipit harum cum ex quia iste reiciendis nihil aliquid. Voluptates qui dolorem omnis tenetur aspernatur architecto ut vel. Qui necessitatibus officia omnis aut ipsa et. Placeat omnis perspiciatis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.915274474958174",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
    {
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-07-07T12:57:23.000Z",
        updatedAt: "2022-07-07T12:57:23.000Z",
      },
    },
  ],
};

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter((restaurant) => restaurant.id != restaurantId)
    }
  }
}
</script>
