<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          @change="handleFileChange"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "./../apis/users";

export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
        email: "",
        isAdmin: false,
      },
      isProcessing: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id !== to.params) {
      console.log(from);
      this.$router.push({ name: "not-found" });
      next();
    }
    this.setUser();
  },
  methods: {
    setUser() {
      this.user = {
        ...this.user,
        ...this.currentUser,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      if (this.user.name.trim()) {
        Toast.fire({
          icon: "warning",
          title: "姓名欄請勿空白",
        });
        return;
      }

      const form = e.target;
      const formData = new FormData(form);
      // this.$emit("after-submit", formData);
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ":" + value);
      // }
      try {
        this.isProcessing = true;
        const { data } = await usersAPI.update({
          formData,
          userId: this.user.id,
        });

        // if (!this.user.name.trim()) {
        //   Toast.fire({
        //     icon: "warning",
        //     title: "姓名欄請勿空白",
        //   });
        //   return;
        // }

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({
          name: "user-profile",
          params: { id: this.user.id },
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法成功更新，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    watachCurrentUser() {
      this.setUser();
    },
  },
};
</script>
