<template>
  <div>
    <section class="container about">
      <h1 class="title">Hello,</h1>
      <h5 class="text-on-back">02</h5>
      <h2>I'm Merima, a 
        <strong>Web Developer</strong> 
      from Bosnia.</h2>   
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
.about {
  background: #e14eca;
  background-image: linear-gradient(to bottom left, #e14eca, #ba54f5, #e14eca);
  border-radius: 10px;
  color: white;
}
.about strong {
  font-family: 'Raleway', sans-serif;
  text-transform: none;
  font-size: 1em;
}
.about h2 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 3.7em;
  color: white;
  text-align: left;
}
</style>