<template>
  <div>
    <!-- Header -->
    <div class="header text-center">
      <h1 class="author">
        <span>{{ name }}</span> 
        {{ surname }}
      </h1>
    </div>  
    <!-- Import Work -->      
    <Work></Work>
    <!-- End of Header -->
    <!-- Import Contact Component -->
    <Contact></Contact>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Work from './Work' /* Work Menu */ 
import Contact from './Contact'

export default {
  name: 'Header',
  components: {
    Work,
    Contact,
  },
  computed: {
    ...mapState([
      'name', 'surname',
    ]),
  }
}
</script>

<style>
/* Header Style */
.author {
  font-size: 4em;
  color: white;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  letter-spacing: 20px;
  margin-left: 20px;
}
h1 span {
  font-weight: 900;
} 
</style>