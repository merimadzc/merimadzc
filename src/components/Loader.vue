<template>
  <div>
    <div id="loader-wrapper">
      <div id="loader"></div>    
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>  
    </div>
  </div>
</template>

<script>
var $ = require('jquery')
export default {
  name: 'Loader',
  mounted: function() {
    /* The Loader */
    $(document).ready(function() {
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 500); 
    });
  },
}
</script>

<style>
/* The Loader */
#loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    overflow: hidden;
}
.no-js #loader-wrapper {
    display: none;
}
#loader-wrapper .loader-section {
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    z-index: 10;
}
#loader-wrapper .loader-section.section-left {
    left: 0;
    background: #222A42;
}
#loader-wrapper .loader-section.section-right {
    right: 0;
    background: #222A42;
    background-image: linear-gradient(to bottom right, #e14eca, #ba54f5, #e14eca);    
}

/* Loaded styles */
.loaded #loader-wrapper .loader-section.section-left {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    transition: all 0.9s 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
.loaded #loader-wrapper .loader-section.section-right {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    transition: all 0.9s 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.loaded #loader-wrapper {
    visibility: hidden;
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
    transition: all 0.3s 1s ease-out;
}
</style>