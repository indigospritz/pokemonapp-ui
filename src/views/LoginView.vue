<template>
  <div class="flex h-auto flex-col items-center rounded bg-slate-300 p-4">
    <div class="h-auto pb-8">
      <h2 class="text-xl">Login form</h2>
    </div>
    <div class="grid gap-y-3">
      <input type="text" placeholder="Username" class="rounded p-1" />
      <input type="password" placeholder="Password" class="rounded p-1" />
    </div>
    <div class="w-full pt-8">
      <button
        @click="login"
        class="flex w-full justify-center rounded bg-slate-600 py-2 text-slate-100"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    login() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
