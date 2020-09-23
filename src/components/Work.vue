<template>
  <div>
    <div class="work">
      <h1 class="title">Work</h1>
      <h5 class="text-on-back">01</h5>
    </div>
      <div class="navToggle">
        <span class="menu"></span>
      </div>
      <nav class="text-center">
        <h1>WORK</h1>
        <ul>
          <li>
            <a v-for="(site,index) in sites" v-bind:href="site.url" v-bind:key="index" target="_blank">
              <span>{{ site.name }} 
                <br/>
                <a v-bind:href="site.github" target="_blank" id="code">Source Code</a>
              </span>
            </a> 
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
var $ = require('jquery')

export default {
  name: 'Work',
  computed: {
    ...mapState([
      'sites', 'name', 'url', 'github',
    ]),
  },
  mounted: function() {
    /* Full Screen Menu */
    $('.navToggle').click(function(){
      $('.menu').toggleClass('menuOn')
      $('nav').toggleClass('navOn')
    })
  }
}
</script>

<style>
.work {
  position: fixed;
  top: -70px;
  right: 20px;
  z-index: 5;
}
.work .title {
  font-size: 2em;
  padding-top: 140px;
  margin-left: 40px;
}
.work .text-on-back {
  font-size: 7em;
  padding-top: 40px;
}

/* Full Screen Menu */
.navToggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  text-align: center;
}
.navToggle:hover {
  cursor: pointer;
}
.navToggle:hover .menu, 
.navToggle:hover .menu:before, 
.navToggle:hover .menu:after {
  background-color: white;
}
.navToggle:hover .menuOn {
  background: transparent;
}
.menu, 
.menu:before, 
.menu:after {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: 0.5s;
}
.menu:before, 
.menu:after {
  content: "";
  position: absolute;
  left: 0;
}
.menu:before {
  top: 10px;
}
.menu:after {
  bottom: 10px;
}
.menuOn {
  background: transparent;
}
.menuOn:before {
  top: 0;
  transform: rotate3d(0, 0, 1, 45deg);
}
.menuOn:after {
  bottom: 0;
  transform: rotate3d(0, 0, 1, -45deg);
}
nav {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 50px 50px 50px 50px;
  transition: all .2s ease-in-out;
  color: #fff;
  overflow-y: auto;
}
nav a {
  color: #fff;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-weight: bold !important;
}
nav a:hover {
  color: #337ab7;
}
nav.navOn {
  display: block;
  z-index: 5;
  left: 0;
  background: #e14eca;
  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
nav ul li {
  width: 100%;
  text-align: center;
}
nav ul li a {
  display: block;
  padding: 10px;
  font-weight: 100;
  font-size: 1.8em;
}
nav ul li a:hover {
  color: white;
  text-decoration-color: rgba(34, 42, 80, 0.2);
}
nav a {
  font-weight: bold;
}
nav h1 {
  font-family: 'Raleway', sans-serif;
  font-size: 4em !important;
}
nav #code {
  font-size: 0.8em;
  padding: 0;
  margin: 0;
  color: rgba(255,255,255, 0.6);
}
nav #code:hover {
  text-decoration: none;
  color: rgba(255,255,255, 0.8);
}
</style>