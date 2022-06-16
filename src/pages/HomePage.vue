<template>
  <div class="container-fluid">
    <div class="row justify-content-between px-2">
      <Loader v-if="projects.length < 1" />
      <!--  -->
      <!-- NOTE 'p' is the single projectData out of the 'projects' array 'key' is for vue to keep track of the element it creates with the v-for, ':project' is the prop name '="p"' is where the data gets passed down to the 'Project.vue' component -->
      <Project v-for="p in projects" :key="p.id" :project="p" />
      <!-- <div
        v-for="p in projects"
        :key="p.id"
        class="col-md-6 border border-light"
      >
        <div class="row">
          <img class="img-fluid col-6" :src="p.coverImg" alt="" />
          <div class="col-6">
            <p>{{ p.title }}</p>
            <p>
              <img class="profile-img" :src="p.creator.picture" alt="" />{{
                p.creator.name
              }}
            </p>
          </div>
        </div>
      </div> -->
      <!--  -->
    </div>
  </div>
  <!-- NOTE good use case to assign the modal an id when you use it -->
</template>

<script>
import { AppState } from "../AppState";
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { projectsService } from "../services/ProjectsService";
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        AppState.projects = [];
        await projectsService.getProjects();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });
    return {
      projects: computed(() => AppState.projects),
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
