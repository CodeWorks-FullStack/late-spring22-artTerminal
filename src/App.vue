<template>
  <header>
    <Navbar />
  </header>
  <main class="text-light">
    <router-view />
  </main>
  <Modal id="project-modal">
    <template #header> Project details </template>
    <template #body>
      <ActiveProject />
    </template>
  </Modal>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.modal-backdrop.fade {
  // backdrop-filter: blur(20px);
}
.bg-transparent {
  backdrop-filter: blur(20px);
}
</style>
