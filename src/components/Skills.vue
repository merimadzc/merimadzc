<template>
  <div>
    <section class="container skills">
      <h1 class="title">SKILLS</h1>
      <h5 class="text-on-back">03</h5>
      <div class="container">
        <div class="row">
          <div class="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ul class="front-end-skills" title="Front-end Skills">
              <li v-for="(skill, index) in frontendSkills" v-bind:key="index">{{ skill.skill }}</li>
            </ul>
          </div>
          <div class="col-6 col-xs-6 col-sm-6 col-lg-6">
            <ul class="back-end-skills" title="Back-end Skills">
              <li v-for="(skill, index) in backendSkills" v-bind:key="index">{{ skill.skill }}</li>
            </ul>
            <ul class="mobile-skills" title="Mobile Development">
              <li v-for="(skill, index) in mobileSkills" v-bind:key="index">{{ skill.skill }}</li>
            </ul> 
            <ul class="other-skills" title="Testing and Version Control">
              <li v-for="(skill, index) in otherSkills" v-bind:key="index">{{ skill.skill }}</li>
            </ul>   
          </div>
        </div>   
      </div> 
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Skills',
  computed: {
    ...mapState([
      'frontendSkills', 'backendSkills', 'mobileSkills', 'otherSkills',
    ]),
  },
}
</script>

<style>
.skills {
  margin-top: -80px;
}
.skills li {
  color: white;
  font-size: 0.9em;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  list-style-type: none;
}
</style>