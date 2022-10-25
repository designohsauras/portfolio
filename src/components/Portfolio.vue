<template>
  <b-container class="mb-5 animate__animated animate__fadeIn" fluid>
    <h1>Selected Project</h1>
    <b-row class="imagetiles justify-content-center align-items-center">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile">
        <img
          src="../assets/clients/thumbnails/finx-thumbnail.jpg"
          alt="FinX"
          class="img-fluid"
        />
        <div class="overlay">
          <span>FinX</span>
          <router-link :to="{ name: 'Client', params: { client_name: 'FinX' } }"
            ><button>View</button></router-link
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile">
        <img
          src="../assets/clients/thumbnails/atg-thumbnail.jpg"
          alt="ATG"
          class="img-fluid"
        />
        <div class="overlay">
          <span>ATG</span>
          <router-link :to="{ name: 'Client', params: { client_name: 'ATG' } }"
            ><button>View</button></router-link
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile">
        <img
          src="../assets/clients/thumbnails/vanillarose-thumbnail.jpg"
          alt="Vanilla Rose"
          class="img-fluid"
        />
        <div class="overlay">
          <span>Vanilla Rose</span>
          <router-link
            :to="{ name: 'Client', params: { client_name: 'Vanilla Rose' } }"
            ><button>View</button></router-link
          >
        </div>
      </div>
    </b-row>
    <b-row class="imagetiles justify-content-center align-items-center">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile">
        <img
          src="../assets/clients/thumbnails/ledsource-thumbnail.jpg"
          alt="Led Source"
          class="img-fluid"
        />
        <div class="overlay">
          <span>Led Source</span>
          <router-link
            :to="{ name: 'Client', params: { client_name: 'Led Source' } }"
            ><button>View</button></router-link
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile">
        <img
          src="../assets/clients/thumbnails/zingbi-thumbnail.jpg"
          alt="Zingbi"
          class="img-fluid"
        />
        <div class="overlay">
          <span>Zingbi</span>
          <router-link
            :to="{ name: 'Client', params: { client_name: 'Zingbi' } }"
            ><button>View</button></router-link
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile">
        <img
          src="../assets/clients/thumbnails/marriott-thumbnail.jpg"
          alt="Marriott"
          class="img-fluid"
        />
        <div class="overlay">
          <span>Marriott</span>
          <router-link
            :to="{ name: 'Client', params: { client_name: 'Marriott' } }"
            ><button>View</button></router-link
          >
        </div>
      </div>
    </b-row>
    <b-row class="imagetiles justify-content-center align-items-center">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile">
        <img
          src="../assets/clients/thumbnails/chaipecharcha-thumbnail.jpg"
          width="500"
          height="300"
          alt="Chai Pe Charcha"
          class="img-fluid"
        />
        <div class="overlay">
          <span>Chai Pe Charcha</span>
          <router-link
            :to="{
              name: 'Client',
              params: { client_name: 'Chai Pe Charcha' },
            }"
            ><button>View</button></router-link
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile"></div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 tile"></div>
    </b-row>
  </b-container>
</template>

<script>
import "animate.css"

export default {
  name: "Portfolio",
};
</script>

<style scoped>
.container-fluid {
  min-height: 100vh;
}

.container-fluid h1 {
  color: var(--teal);
  font-size: 4vw;
  text-align: center;
  padding: 1em;
}
/* 
.container-fluid p {
  color: white;
  font-size: 1.2vw;
  text-align: justify;
  font-family: var(--montserrat);
  padding: 1em;
} */

.imagetiles {
  width: 100%;
  margin: 0;
}

.imagetiles .col-lg-3.col-md-3.col-sm-3.col-xs-6 {
  padding: 0;
  margin: 1rem;
}

.imagetiles .tile {
  position: relative;
  display: inline-block;
}

.tile a {
  text-decoration: none;
}

.tile .overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.692);
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  padding: 1em;
}

.tile:hover .overlay {
  opacity: 1;
}

.overlay span {
  font-family: var(--spartan);
  color: var(--teal);
  font-size: 3vw;
}

.overlay button {
  color: white;
  background-color: transparent;
  border: 0.1rem solid white;
  padding: 0.5em 1em;
  margin-top: 2em;
}

.overlay button:hover {
  background-color: #7ee8ca9a;
  transition: ease 250ms;
}

.overlay button:focus {
  outline: none;
}

.overlay button:active {
  transform: scale(0.95);
  outline: var(--teal);
}

/**
** Media Queries
**/

@media only screen and (min-width: 320px) {
  .overlay span,
  .container-fluid h1 {
    font-size: 8vw;
  }

  .container-fluid p {
    font-size: 6vw;
  }
}

@media only screen and (min-width: 768px) {
  .overlay span {
    font-size: 2vw;
  }
  .container-fluid h1 {
    font-size: 5vw;
  }
  .overlay button {
    font-size: 1.5vw;
  }
  .container-fluid p {
    font-size: 2vw;
  }
}
</style>