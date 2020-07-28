<template>
  <main>
    <!-- ======= Hero Section ======= -->
    <section id="hero">
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
          <p>{{ headerDescription }}</p>
          <social/>
          <a href="#about" class="btn-scroll scrollto" title="Scroll Down">
            <ChevronDown size="50px"/>
          </a>
        </div>
      </div>
    </section>
    <!-- End Hero -->
    <!-- About -->
    <section id="about">
      <div class="container">
        <div class="holder">
          <div class="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>
              I am current University of Oxford Front-end developer/Researcher.
              I have been working as software developer the past 12 years.I
              graduated from Birmingham City University by achieving MSc
              Advanced Computer Science degree.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6  ">
              <ul class="list-unstyled list-holder">
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Name:</strong> Hossein Mirian
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Nationality:</strong> Iran
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Email:</strong>
                  hosein.mirian@gmail.com
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">City:</strong> Oxford, UK
                </li>
              </ul>
            </div>
            <div class="col-lg-6  ">
              <ul class="list-unstyled list-holder">
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Age:</strong> 32
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Degree:</strong> Msc Advanced
                  Computer Science
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Freelance:</strong>
                  Available
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">City:</strong> Oxford, UK
                </li>
              </ul>
            </div>
          </div>
          <!-- Skills -->
          <div class="section-title">
            <span>My Skills</span>
            <h2>My Skills</h2>
            <p>
              I am current University of Oxford Front-end developer/Researcher.
              I have been working as software developer the past 12 years.I
              graduated from Birmingham City University by achieving MSc
              Advanced Computer Science degree. I am current University of
              Oxford Front-end developer/Researcher. I have been working as
              software developer the past 12 years.I graduated from Birmingham
              City University by achieving MSc Advanced Computer Science degree.
              I am current University of Oxford Front-end developer/Researcher.
              I have been working as software developer the past 12 years.I
              graduated from Birmingham City University by achieving MSc
              Advanced Computer Science degree. I am current University of
              Oxford Front-end developer/Researcher. I have been working as
              software developer the past 12 years.I graduated from Birmingham
              City University by achieving MSc Advanced Computer Science degree.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6  ">
              <ul class="list-unstyled list-holder">
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Name:</strong> Hossein Mirian
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Nationality:</strong> Iran
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Email:</strong>
                  hosein.mirian@gmail.com
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">City:</strong> Oxford, UK
                </li>
              </ul>
            </div>
            <div class="col-lg-6  ">
              <ul class="list-unstyled list-holder">
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Age:</strong> 32
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Degree:</strong> Msc Advanced
                  Computer Science
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Freelance:</strong>
                  Available
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">City:</strong> Oxford, UK
                </li>
              </ul>
            </div>
          </div>
          <!--End Skills -->
        </div>
      </div>
    </section>
    <!--End About -->

    <div id="paralex" class="container-fluid mt-5" style="background: #F5F5F5;height: 300px"></div>
    <!-- anotherSec -->
    <section id="anotherSec">
      <div class="container">
        <div class="holder">
          <div class="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            <p>
              I am current University of Oxford Front-end developer/Researcher.
              I have been working as software developer the past 12 years.I
              graduated from Birmingham City University by achieving MSc
              Advanced Computer Science degree.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6  ">
              <ul class="list-unstyled list-holder">
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Name:</strong> Hossein Mirian
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Nationality:</strong> Iran
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Email:</strong>
                  hosein.mirian@gmail.com
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">City:</strong> Oxford, UK
                </li>
              </ul>
            </div>
            <div class="col-lg-6  ">
              <ul class="list-unstyled list-holder">
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Age:</strong> 32
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Degree:</strong> Msc Advanced
                  Computer Science
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Freelance:</strong>
                  Available
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">City:</strong> Oxford, UK
                </li>
              </ul>
            </div>
          </div>
          <!-- Skills -->
          <div class="section-title">
            <span>My Skills</span>
            <h2>My Skills</h2>
            <p>
              I am current University of Oxford Front-end developer/Researcher.
              I have been working as software developer the past 12 years.I
              graduated from Birmingham City University by achieving MSc
              Advanced Computer Science degree. I am current University of
              Oxford Front-end developer/Researcher. I have been working as
              software developer the past 12 years.I graduated from Birmingham
              City University by achieving MSc Advanced Computer Science degree.
              I am current University of Oxford Front-end developer/Researcher.
              I have been working as software developer the past 12 years.I
              graduated from Birmingham City University by achieving MSc
              Advanced Computer Science degree. I am current University of
              Oxford Front-end developer/Researcher. I have been working as
              software developer the past 12 years.I graduated from Birmingham
              City University by achieving MSc Advanced Computer Science degree.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6  ">
              <ul class="list-unstyled list-holder">
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Name:</strong> Hossein Mirian
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Nationality:</strong> Iran
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Email:</strong>
                  hosein.mirian@gmail.com
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">City:</strong> Oxford, UK
                </li>
              </ul>
            </div>
            <div class="col-lg-6  ">
              <ul class="list-unstyled list-holder">
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Age:</strong> 32
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Degree:</strong> Msc Advanced
                  Computer Science
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">Freelance:</strong>
                  Available
                </li>
                <li class="arrow-holder mb-1">
                  <ChevronRight class="chevron"/>
                  <strong style="color:black;">City:</strong> Oxford, UK
                </li>
              </ul>
            </div>
          </div>
          <!--End Skills -->
        </div>
      </div>
    </section>
    <!--End anotherSec -->

  </main>
</template>

<script>
import {VueTyper} from "vue-typer";
import Social from "../components/Social";
import ChevronDown from "mdi-vue/ChevronDown";
import ChevronRight from "mdi-vue/ChevronRight";

export default {
  name: "Home",
  components: {
    Social,
    VueTyper,
    ChevronDown,
    ChevronRight
  },
  data: () => {
    return {
      headerDescription:
          "Web Developer,Graphic Designer, UI/UX designer, Software Tester",
      textArray: [
        "I'm Hossein Mirian",
        "I'm an expert Front-End developer",
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

#hero .btn-scroll {
  position: fixed;
  bottom: 10px;
  left: 50vw;
  transition: 0.4s;
  color: rgba(255, 255, 255, 0.6);
  animation: up-down 1s ease-in-out infinite alternate-reverse both;
}

#hero .btn-scroll i {
  font-size: 48px;
}

#hero .btn-scroll:hover {
  color: #ffb727;
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

.vue-typer {
  font-family: monospace;
  background-color: white;
  opacity: 70%;
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
}

.holder {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

/*------------About---------------*/
#about {
  position: relative;
}

.section-title {
  margin-top: 100px;
  text-align: center;
  padding: 30px 0;
  position: relative;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 0;
  color: #3b434a;
  position: relative;
  z-index: 2;
}

.section-title span {
  position: absolute;
  top: 30px;
  color: #eef0f2;
  left: 0;
  right: 0;
  z-index: 1;
  font-weight: 700;
  font-size: 52px;
  text-transform: uppercase;
  line-height: 0;
}

.section-title p {
  text-align: left;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}

.list-holder {
  margin-bottom: 10px;
}

.list-holder .arrow-holder {
  text-align: left;
  color: black;
}

.list-holder .arrow-holder .chevron {
  color: #ffb727;
}
</style>
