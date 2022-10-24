<template>
  <footer class="footer">
    <a
      href="https://www.instagram.com/designohsauras/"
      target="_blank"
      rel="noopener noreferrer"
      ><i class="fab fa-instagram"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/manasi-deorukhkar-9ba24bab/"
      target="_blank"
      rel="noopener noreferrer"
      ><i class="fab fa-linkedin-in"></i
    ></a>
  </footer>
</template>

<style scoped>
/*
* Footer
*/

.footer {
  text-align: center;
  padding: 1rem;
}

.footer a {
  text-decoration: none;
}

.footer .fab {
  padding: 20px;
  font-size: 3rem;
}

.fa-instagram {
  color: var(--teal);
}

.fa-linkedin-in {
  color: var(--teal);
}

.fab:hover {
  opacity: 0.7;
}

.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 600px) {
  /*
    * Footer
    */
  .footer .fab {
    font-size: 2rem;
  }
}
</style>