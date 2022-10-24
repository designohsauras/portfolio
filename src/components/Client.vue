<template>
  <div class="animate__animated animate__fadeIn">
    <div
      class="spinner-overlay d-flex justify-content-center align-items-center"
      v-if="isLoading"
    >
      <b-spinner class="spinner" label="Loading..." variant="light"></b-spinner>
    </div>
    <b-container fluid>
      <h1>{{ client_name }}</h1>
      <p><strong>Overview: </strong>{{ client_overview }}</p>
      <p>
        <strong>Project: </strong><span v-html="client_project_desc"></span>
      </p>
    </b-container>
    <b-container class="mb-5" fluid>
      <div class="grid">
        <div class="grid-sizer"></div>
        <div class="grid-item" v-for="img in blocks" :key="img.id">
          <img
            :src="require(`../assets/clients/${client_name}/${img}`)"
            class="img-fluid"
            alt="Work"
          />
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.spinner-overlay {
  background: black;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
}

.spinner {
  width: 4rem;
  height: 4rem;
}

.container-fluid h1 {
  padding-top: 1em;
  text-align: center;
  color: var(--teal);
  font-family: var(--spartan);
  font-size: 5rem;
  margin: 0;
}

.container-fluid p {
  text-align: justify;
  color: white;
  font-size: 1.5rem;
  padding: 1.5em 0;
  margin: 0;
}

.grid:after {
  content: "";
  display: block;
  clear: both;
}

.grid-sizer,
.grid-item {
  width: 33.333%;
  height: auto;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-item--width2 {
  width: 60%;
}

@media (max-width: 575px) {
  .grid-sizer,
  .grid-item {
    width: 100%;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .grid-sizer,
  .grid-item {
    width: 50%;
  }
}

.grid-item {
  float: left;
  padding: 0.5em;
}

@media only screen and (max-width: 600px) {
  .container-fluid h1 {
    font-size: 2.5rem;
  }

  .container-fluid p {
    font-size: 1rem;
  }
}
</style>

<script>
import Masonry from "masonry-layout";
import clients from "../assets/clients/clients.json";
import imagesLoaded from "imagesloaded";

export default {
  name: "Client",
  data() {
    return {
      client_name: "",
      client_overview: "",
      client_project_desc: "",
      blocks: [],
      isLoading: false,
    };
  },
  methods: {
    loadData() {
      this.client_name = this.$route.params.client_name;
      this.client_overview = clients.Overview[this.client_name];
      this.client_project_desc = clients.Project[this.client_name];
      this.blocks = clients[this.client_name];
      this.isLoading = true
    },
    loadImages(self) {
      var elem = document.querySelector(".grid");
      var msnry = new Masonry(elem, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        horizontalOrder: true,
      });
      var imgLoaded = imagesLoaded(elem);
      imgLoaded.on("progress", function () {
        console.log("loaded");
        msnry.layout();
      });
      imgLoaded.on("always", function () {
        console.log("All Images Loaded");
        self.isLoading =false
        console.log(self.isLoading)
      });
    },
  },
  created() {
    this.loadData();
  },
  mounted() {
    var self = this
    this.loadImages(self);
  },
};
</script>