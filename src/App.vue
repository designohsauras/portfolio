<template>
  <div id="app" class="bg-black">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  }
};
</script>

<style>
  .bg-black {
    background-color: #000 !important;
  }
</style>