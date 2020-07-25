<template>
  <!-- ======= Hero Section ======= -->
  <div id="hero">
    <div class="container">
      <div class="hero-content">
        <h1>
          <vue-typer
            caret-animation="expand"
            erase-delay="70"
            :text="textArray"
            erase-style="backspace"
          ></vue-typer>
        </h1>
        <p class="typed-items">
          Web Developer,Graphic Designer, UI/UX designer, Software Tester
        </p>
        <!--
                                                        <ul class="list-unstyled list-social">
                                                          <li>
                                                            <a href="#"><i class="ion-social-facebook"></i></a>
                                                          </li>
                                                          <li>
                                                            <a href="#"><i class="ion-social-twitter"></i></a>
                                                          </li>
                                                          <li>
                                                            <a href="#"><i class="ion-social-instagram"></i></a>
                                                          </li>
                                                          <li>
                                                            <a href="#"><i class="ion-social-googleplus"></i></a>
                                                          </li>
                                                          <li>
                                                            <a href="#"><i class="ion-social-tumblr"></i></a>
                                                          </li>
                                                          <li>
                                                            <a href="#"><i class="ion-social-dribbble"></i></a>
                                                          </li>
                                                        </ul>
                                                -->
      </div>
    </div>
  </div>
  <!-- End Hero -->
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",
  components: {
    VueTyper
  },
  data: () => {
    return {
      textArray: [
        "I'm Hossein Mirian",
        "I'm a professional Front-End developer",
        "I'm a UI/UX designer",
        "I'm a software tester"
      ]
    };
  }
};
</script>
<style scoped>
#hero {
  background: url("../assets/home-bg.jpg") repeat scroll center center/cover;
  height: 100vh;
  width: 100%;
}

#hero .hero-content {
  height: 100vh;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hero-content h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #fff;
}

.hero-content p {
  font-size: 13px;
  letter-spacing: 3px;
  margin-top: 0;
  margin-bottom: 30px;
  text-transform: capitalize;
  color: #fff;
  font-weight: 500;
}

.hero-content .list-social li {
  float: left;
  margin-right: 20px;
}

.hero-content .list-social li i {
  color: #fff;
  font-size: 15px;
}

.vue-typer {
  font-family: monospace;
  background-color: white;
  opacity: 70%;
}
</style>
