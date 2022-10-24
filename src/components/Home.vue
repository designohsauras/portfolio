<template>
  <div id="home-page" class="animate__animated animate__fadeIn">
    <div id="home" class="hero-image">
      <div class="hero-text">
        <h1>Hello I'm</h1>
        <h1>Manasi Deorukhkar</h1>
        <h2>
          <span class="typed-text">{{ typeValue }}</span>
          <span
            v-html="'&nbsp'"
            class="cursor"
            :class="{ typing: typeStatus }"
          ></span>
        </h2>
      </div>
    </div>
    <b-container id="about" class="d-flex align-items-center justify-content-center" fluid>
      <b-row class="d-flex align-items-center justify-content-center w-100">
        <b-col class="d-flex justify-content-center align-items-center" sm>
          <div class="pattern pattern pattern-dots-md">
          <img src="../assets/manasi.jpg" width="400" class="img-fluid" alt="Manasi" />
          </div>
        </b-col>
        <b-col class="text-center">
          <h1>About Me</h1>
          <p>Hey, I'm Manasi Deorukhkar, fueled by design and art</p>
          <a href="resume_manasi.pdf" download>
            <button>Download Resume</button></a
          >
        </b-col>
      </b-row>
    </b-container>
    <b-container
      id="contact"
      class="d-flex justify-content-center align-items-center"
      fluid
    >
      <b-row class="align-items-center h-100">
        <b-col sm class="text-center">
          <h1>LET'S WORK TOGETHER!</h1>
          <p>
            If you have any projects in mind, big or small then let's get in
            touch. Email me at deorukhkarmanasi@gmail.com
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import pattern from "pattern.css";

export default {
  name: "Home",
  pattern,
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["Graphic Designer", "Web Designer", "Illustrator"],
      typingSpeed: 150,
      erasingSpeed: 100,
      newTextDelay: 1800,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style scoped>
.home-page {
  min-width: 100vh;
}

/*
* Hero Image
*/

.hero-image {
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/hero-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
}

.hero-text {
  width: 100%;
  text-align: left;
  color: white;
  padding-left: 4em;
}

.hero-text h1 {
  font-family: var(--spartan);
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
}

/** 
* TypeWriter Effect
**/

.hero-text h2 {
  font-size: 3rem;
}

.hero-text span.typed-text {
  color: var(--teal);
}
.hero-text .cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
.hero-text .cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

/*
  * About Page
  */

#about {
  padding: 8rem 2rem;
  min-height: 100vh;
}

.pattern img {
  transform: translate(20px, -20px);
}

#about .pattern-dots-md {
  color: white;
  width: fit-content;
}

#about h1 {
  font-size: 5rem;
  color: var(--teal);
}

#about p {
  font-size: 1.5rem;
  text-align: justify;
  color: white;
}

#about button {
  color: white;
  margin: 1rem 0;
  background-color: transparent;
  border: 2px solid var(--teal);
  padding: 14px 28px;
  cursor: pointer;
}

#about button:hover {
  background-color: var(--teal);
  transition: ease 250ms;
}

#about button:focus {
  outline: none;
}

#about button:active {
  transform: scale(0.98);
}

/*
* Contact Page
*/

#contact {
  min-height: 100vh;
  /* padding: 8rem 2rem; */
}

#contact h1 {
  font-size: 5rem;
  color: var(--teal);
}

#contact p {
  font-size: 1.5rem;
  color: white;
  text-align: justify;
}

/*
* Small Screen Optimizations
*/

@media only screen and (max-width: 600px) {
  /*
    * Hero Image
    */
  .hero-text {
    padding-left: 2rem;
  }
  .hero-text h1 {
    font-size: 1.8rem;
  }
  .hero-image h2 {
    font-size: 1.5rem;
  }
  /*
    * About Div | Contact Div
    */
  #about button {
    font-size: 1rem;
  }
  #about h1,
  #contact h1 {
    text-align: center;
    font-size: 2rem;
  }
  #about p,
  #contact p {
    font-size: 1rem;
  }

  .pattern {
    margin-top: 1rem;
  }

  .pattern img {
    width: 200px;
  }
}
</style>