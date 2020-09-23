<template>
  <div>
    <!-- The Loader -->
    <Loader></Loader>
    <!-- Import Header -->
    <Header></Header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-xs-12 col-sm-6 col-md-7 col-lg-7">
          <About></About>
        </div>
        <div class="col-12 col-xs-12 col-sm-6 col-md-5 col-lg-5">
          <Skills></Skills>
        </div>               
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Footer from './Footer' 
import Loader from './Loader'

var $ = require('jquery');

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Skills,
    Footer,
    Loader,
  }
}	
</script>