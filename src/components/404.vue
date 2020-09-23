<template>
  <!-- Error Page for Server-Side Rendering -->
  <div id="pageNotFound">
  	<!-- Import Work Menu -->
  	<Work></Work>
  	<div class="container-404">
      <!-- Back to Home link -->
      <h1 class="back-to-home">
        <router-link to="/">Home</router-link>
      </h1>      
  		<h1>{{ number }}</h1>
  		<h2>{{ title }}</h2>
  		<h4>{{ message }}</h4>
  	</div>
  	<!-- Import Footer -->
  	<Footer></Footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Work from './Work'
import Footer from './Footer'

export default {
  name: 'PageNotFound',
  components: {
  	Work,
  	Footer
  },
  computed: {
    ...mapState([
      'number', 'title', 'message',
    ]),
  },
}
</script>

<style>
/* 404 Container Style */
.container-404 {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Back to Home link Style */
.container-404 .back-to-home {
  font-size: 4em;
  text-transform: uppercase;
  letter-spacing: 23px;
  margin-left: 23px;
}
.container-404 .back-to-home a {
  color: white;
}
.container-404 .back-to-home a:hover {
  color: #e14eca;
  text-decoration: none;
}

/* 404 Heading Style */
.container-404 h1 {
  font-size: 17em;
  font-family: 'Raleway', sans-serif;
  color: rgba(0, 0, 0, 0.3);
}
.container-404 h2 {
  text-transform: uppercase;
  font-family: 'Permanent Marker', cursive;
  font-size: 3em;
  color: #e14eca;
  opacity: 1;
}	
.container-404 h4 {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1em;
  color: #e14eca;
  opacity: 0.3;
}

/* Media Query */
@media only screen and (max-width: 1100px) {
  .container-404 h2 { font-size: 3em; }
  .container-404 .back-to-home { font-size: 3.5em; }
}
@media only screen and (max-width: 950px) {
  .container-404 h2 { font-size: 2.5em; }
  .container-404 .back-to-home { font-size: 3em; }
}
@media only screen and (max-width: 650px) {
  .container-404 h1 { font-size: 12em; }
  .container-404 h2 { font-size: 2em; }
  .container-404 h4 { font-size: 1.3em; }    
  .container-404 .back-to-home { font-size: 3em; padding-top: 100px; }  
}
@media only screen and (max-width: 400px) {
  .container-404 h1 { font-size: 10em; }
  .container-404 h2 { font-size: 1.5em; }
  .container-404 h4 { font-size: 1em; }  
  .container-404 .back-to-home { font-size: 2.5em; }  
}
</style>