<template>
  <main>
    <!-- Hero  -->
    <Hero />
    <!-- End Hero -->

    <!-- About -->
    <About />
    <!--End About -->

    <!-- Skills -->
    <div class="container-fluid pb-4" id="skill-holder">
      <Skills />
    </div>
    <!--End Skills -->

    <!--Paralex -->
    <div id="parallax-holder">
      <parallax :parallax="true" :fixed="true">
        <img src="@/assets/paralex.jpg" />
      </parallax>
    </div>
    <!--ٍEnd of Paralex -->

    <!-- Service  -->
    <Service />
    <!-- End Service  -->

    <!--Footer -->
    <MyFooter />
    <!--End of Footer -->
  </main>
</template>

<script>
import Skills from "@/components/Skills";
import MyFooter from "@/components/MyFooter";
import Parallax from "vue-parallaxy";
import Service from "@/components/Service";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default {
  name: "Home",
  components: {
    About,
    Hero,
    Service,
    MyFooter,
    Skills,
    Parallax
  },
  beforeDestroy() {
    this.scrollToTop();
  }
};
</script>
<style scoped>
#skill-holder {
  background-color: white;
}

#parallax-holder {
  position: relative;
  height: 350px;
}
</style>
