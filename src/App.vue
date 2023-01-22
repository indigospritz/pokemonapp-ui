<template>
  <div id="app" class="flex justify-center bg-slate-700 py-8">
    <router-view />
  </div>
</template>

<script>
import LoginView from "./views/LoginView.vue";
export default {
  components: {
    LoginView,
  },
};
</script>

<style></style>
