<template>
  <div class="row justify-content-center">
    <form
      class="col-10 p-3 d-flex flex-column bg-dark"
      action=""
      @submit.prevent="createProject"
    >
      <p>Create a project</p>
      <input type="text" placeholder="title" v-model="projectData.title" />
      <input
        type="text"
        placeholder="cover image url"
        v-model="projectData.coverImg"
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="project images"
        v-model="projectData.projectImgs"
      ></textarea>
      <button class="btn btn-primary">create</button>
    </form>
  </div>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted, ref } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { projectsService } from "../services/ProjectsService";
export default {
  setup() {
    const projectData = ref({});
    return {
      projectData,
      async createProject() {
        try {
          await projectsService.createProject(projectData.value);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
