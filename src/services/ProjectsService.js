import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ProjectsService{

  async getProjects(){
    const res = await api.get('api/projects')
    logger.log(res.data)
    AppState.projects = res.data
  }

  async getProfileProjects(profileId){
    const res = await api.get(`api/projects?creatorId=${profileId}`)
    logger.log('-getProfileProjects-', res.data)
    AppState.projects = res.data
  }

 async  createProject(projectData){
    const res = await api.post('api/projects', projectData)
    logger.log('-createProject-', res.data)
    AppState.projects.push(res.data)
  }

  setActive(project){
    AppState.activeProject = project
  }

}

export const projectsService = new ProjectsService()
