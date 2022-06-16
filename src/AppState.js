import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  profile: {},
  projects: [
    // NOTE most important part of dummy data to build off of, is it matches the real data you will eventually get back
    {
      title: 'Art Time',
      coverImg: 'https://cdnb.artstation.com/p/assets/images/images/047/784/787/4k/keita-okada-1.jpg?1648448900',
      projectImgs: ['https://cdnb.artstation.com/p/assets/images/images/047/784/805/4k/keita-okada-1.jpg?1648448941','https://cdna.artstation.com/p/assets/images/images/047/784/808/4k/keita-okada-2.jpg?1648448959'],
      creator: {
        name: 'Ya boi',
        picture: 'https://thiscatdoesnotexist.com'
      }
    },
    {
      title: 'Time To Art',
      coverImg: 'https://cdnb.artstation.com/p/assets/images/images/047/784/787/4k/keita-okada-1.jpg?1648448900',
      projectImgs: ['https://cdnb.artstation.com/p/assets/images/images/047/784/805/4k/keita-okada-1.jpg?1648448941','https://cdna.artstation.com/p/assets/images/images/047/784/808/4k/keita-okada-2.jpg?1648448959'],
      creator: {
        name: 'Ya Gurl',
        picture: 'https://thiscatdoesnotexist.com'
      }
    }
  ],
activeProject: {}
})
