import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	/* index.vue */
	name: 'Merima',
	surname: 'Dzinovic',
	/* Contact */
    icon: 'fa fa-envelope',
    url: 'mailto:merimadzc@gmail.com',
    mail: 'merimadzc@gmail.com',
    /* Links */
    links: [
      { 
        url: 'https://github.com/merimadzc',
        icon: 'fa fa-github fa-3x'
      },
      { 
        url: 'https://www.linkedin.com/in/merima-dzinovic-145577169/', 
        icon: 'fa fa-linkedin fa-3x' 
      },
    ],  
    /* Skills */
    /* Front-end Skills */
    frontendSkills: [                
      { skill: 'Vuex' },  
      { skill: 'CSS3' },     
      { skill: 'Vue.js' },
      { skill: 'jQuery' },
      { skill: 'HTML5' },       
      { skill: 'CreateJS'},
      { skill: 'Bootstrap'},
      { skill: 'JavaScript' },
      { skill: 'SCSS/Sass' },  
    ],
    /* Back-end Skills */
    backendSkills: [ 
      { skill: 'PHP'},
      { skill: 'Node.js' },
      { skill: 'Ruby on Rails' }       
    ],
    /* Other Skills */
    otherSkills: [
      { skill: 'Git' },
      { skill: 'WordPress'},
      { skill: 'Jasmine/Jest' },
      { skill: 'Adobe Illustrator' },
      { skill: 'Adobe Photoshop' }
    ],  
    /* Work - Sites */
    sites: [
      { name: 'Wild West | Game', url: 'https://merimadzc.github.io/wild-west/', github: 'https://github.com/merimadzc/wild-west' },
      { name: 'Restaurant Review Site | Google APIs and JavaScript', url: 'https://merimadzc.github.io/restaurant-review-site/', github: 'https://github.com/merimadzc/restaurant-review-site' },
      { name: 'The Brooklyn Outdoor Film Festival | Website', url: 'https://merimadzc.github.io/brooklyn-outdoor-film-festival/', github: 'https://github.com/merimadzc/brooklyn-outdoor-film-festival' },
      { name: 'Testing todo-list-app for OpenClassrooms | Tests and Documentation', url: 'https://merimadzc.github.io/todo-list-app/', github: 'https://github.com/merimadzc/todo-list-app' },
      { name: 'Simple todo app with Vue, Vuex, vue-router, vee-validate | App', url: 'https://merimadzc.github.io/todos/', github: 'https://github.com/merimadzc/todos' },
      { name: 'Links with Vuex | App', url: 'https://merimadzc.github.io/vuex-links/', github: 'https://github.com/merimadzc/vuex-links' },  	       
    ],
    /* Error Page */
    number: '404',
    title: 'Page Not Found',
    message: 'Sorry but the page you are looking for doesn\'t exist.'
  }
})