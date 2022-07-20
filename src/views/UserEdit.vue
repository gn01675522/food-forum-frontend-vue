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
        >
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
export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        name: "",
        image: "",
      },
    };
  },
  methods: {
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
    handleSubmit(e) {
      console.log("e", e);
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
      for (let [name, value] of formData.entries()) {
        console.log(name + ":" + value);
      }
    },
  },
};
</script>
