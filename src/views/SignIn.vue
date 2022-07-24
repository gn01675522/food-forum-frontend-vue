<!-- ./src/views/SignIn.vue -->
<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        :disabled="isProcessing"
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 及 password",
          });
          return;
        }
        //點擊後先判斷是否有輸入信箱及密碼，若有則繼續往下走；若無，則 return 停在這邊

        this.isProcessing = true;
        //讓 isProcessing 為 true，這是個用來判斷目前審核流程的狀態

        // TODO: 向後端驗證使用者資訊是否合法
        const response = await authorizationAPI.signin({
          email: this.email,
          password: this.password,
        });
        // 丟入我們輸入的 email 及 password
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 丟入 email 及 password 後回應；設立 data 常數，讓他等於 response，如果 回應的 status 不是 success，則丟出錯誤訊息

        localStorage.setItem("token", data.token);
        // 將 回應內的 token 存入 localStorage 裡面

        // 透過 setCurrentUser 把使用者資料存入 Vuex 的 state 中
        this.$store.commit('setCurrentUser', data.user)

        this.$router.push("/restaurants");
        // 若程式碼至此則判斷登入成功，直接導向 /restaurants 頁面
      } 
      
      catch (error) {
        this.isProcessing = false;
        this.password = "";
        //如果抓到的是 error，則顯示錯誤提示，並把密碼清空

        Toast.fire({
          icon: "warning",
          title: "輸入的帳號密碼有誤",
        });
        // 密碼清空後跳出錯誤視窗
        
        console.log("error", error);
      }
    },
  },
};
</script>
