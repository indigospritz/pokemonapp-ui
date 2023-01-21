<template>
  <div
    id="app"
    class="flex h-screen flex-col items-center justify-center bg-slate-700"
  >
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
