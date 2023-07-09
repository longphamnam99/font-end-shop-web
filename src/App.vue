<template>
  <div id="container">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/header";
import { RouterView } from "vue-router";

export default {
  components: {
    Header,
    RouterView,
  },
}
</script>