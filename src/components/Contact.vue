<template>
  <div class="contact">
    <a v-bind:href="url" target="_blank">
      <i v-bind:class="icon"></i> | {{ mail }}
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'  

export default {
  name: 'Contact',
  computed: {
    ...mapState([
      'icon', 'url', 'mail',
    ]),
  },
}
</script>

<style>
.contact {
  text-align: center;
  font-family: 'Lato', sans-serif;
}
.contact a {
  font-size: 2em;
  color: rgba(255, 255, 255, 0.8);
} 
.contact a:hover {
  color: #e14eca;
  text-decoration: none;
}
</style>