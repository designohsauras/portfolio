<template>
  <b-navbar class="px-5 py-3" toggleable="lg" type="dark" variant="black">
    <b-navbar-brand>
      <router-link class="nav-link" to="/">
        <img src="../assets/logo.svg" width="100" alt="Logo" />
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto text-center">

        <router-link class="nav-link" to="/" v-scroll-to="'#home'">
          Home
        </router-link>
        
        <router-link class="nav-link" to="/" v-scroll-to="'#about'">
          About
        </router-link>

        <router-link class="nav-link" to="/portfolio">
          Portfolio
        </router-link>

        <router-link class="nav-link" to="/" v-scroll-to="'#contact'"
          >Contact
        </router-link>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>