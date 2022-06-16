<template>
  <!-- NOTE this is ONE project -->
  <div class="col-md-6 p-0 selectable" @click="setActive">
    <div class="row border border-light p-0 project">
      <img class="img-fluid col-6 p-0" :src="project.coverImg" alt="" />
      <div
        class="
          col-6
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <p>{{ project.title }}</p>
        <p class="profile m-0 selectable p-1 rounded" @click.stop="goToProfile">
          <img
            class="profile-img me-2"
            :src="project.creator.picture"
            alt=""
          />{{ project.creator.name }}
        </p>
      </div>
    </div>
    <!-- <button data-bs-target="#modalId" data-bs-toggle="modal">open modal</button> -->
  </div>
</template>

<!-- this is no mans land -->
<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
import { projectsService } from "../services/ProjectsService";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
export default {
  props: { project: { type: Object, required: true } },
  setup(props) {
    const router = useRouter();
    return {
      setActive() {
        projectsService.setActive(props.project);
        Modal.getOrCreateInstance(
          document.getElementById("project-modal")
        ).show();
      },
      goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.project.creatorId },
        });
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.profile {
  position: absolute;
  bottom: 2px;
  right: 5px;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 45px;
  object-fit: cover;
}

.project {
  margin: 0.25em;
  transition: all 0.1s ease;
  div {
    position: relative;
  }
  &:hover {
    transform: scale(1.01) translateY(-5px);
    border: solid 3px var(--bs-light);
  }
  & > img {
    height: 10em;
    object-fit: cover;
  }
}
</style>
