<template>
  <div class="fixed-bottom text-center">
  	<Links></Links>
  </div>
</template>

<script>
import Links from './Links'

export default {
  name: 'Footer',
  components: {
  	Links
  }
}
</script>

<style>
.fixed-bottom {
  z-index: 1;
  background: rgb(34, 42, 66);
  padding-bottom: 5px;
}
</style>