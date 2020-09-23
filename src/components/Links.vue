<template>
  <div id="links">
  	<a v-for="(link, index) in links" v-bind:href="link.url" v-bind:key="index" target="_blank">
  	  <i v-bind:class="link.icon"></i>
  	</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Links',
  computed: {
    ...mapState([
      'links', 'url', 'icon',
    ]),
  }
}
</script>

<style>
#links a {
    padding: 20px;
    color: #ba54f5;
}
#links a:hover {
    color: #e14eca;
}
</style>