<template>
  <div id="restaurant-forum">
    <NavBar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import NavBar from "./components/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>
