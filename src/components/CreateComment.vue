<!-- 已完成 -->
<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import uuid from "uuid/v4";

export default {
  name: "CreateComments",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      // 透過 API 向伺服器請求新增一筆 comment
      this.$emit("after-create-comment", {
        commentId: uuid(), //因目前尚未串接 API 故無法取得 commentId
        restaurantId: this.restaurantId,
        text: this.text,
      });
      this.text = "";
    },
  },
};
</script>
