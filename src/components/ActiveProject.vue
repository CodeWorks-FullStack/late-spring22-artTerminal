<template>
  <div class="container-fluid">
    <div class="row">
      <!--  -->
      <div
        v-for="img in activeProject.projectImgs"
        :key="img"
        class="col-12 d-flex justify-content-center"
      >
        <img class="img-fluid" :src="img" alt="" />
      </div>
      <!--  -->
    </div>
    <div class="col-12 d-flex justify-content-end">
      <router-link
        :to="{ name: 'Profile', params: { id: activeProject.creatorId } }"
      >
        <div class="selectable p-2 d-flex" data-bs-dismiss="modal">
          <!-- NOTE use a v-if OR a ? to keep vue from accessing data before it's there -->
          <img
            v-if="activeProject.creator"
            class="profile-img me-3"
            :src="activeProject.creator.picture"
            alt=""
          />
          <!-- NOTE it's ugly but it's an example -->
          <p>{{ `creator: ${activeProject.creator?.name}` }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
export default {
  setup() {
    return {
      activeProject: computed(() => AppState.activeProject),
    };
  },
};
</script>


<style lang="scss" scoped>
.profile-img {
  height: 50px;
  width: 50px;
  object-fit: cover;
}
</style>
