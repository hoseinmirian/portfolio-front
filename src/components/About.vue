<template>
  <section id="about">
    <div class="container">
      <div class="holder">
        <div class="section-title">
          <span>About Me</span>
          <h2>About Me</h2>
          <p>{{ about.fullSummary }}</p>
        </div>
        <div class="row">
          <div class="col-lg-6  ">
            <ul class="list-unstyled list-holder">
              <li class="arrow-holder mb-1">
                <ChevronRight class="chevron" />
                <strong style="color:black;">Name:</strong> {{ about.name }}
              </li>
              <li class="arrow-holder mb-1">
                <ChevronRight class="chevron" />
                <strong style="color:black;">Nationality:</strong
                >{{ about.nationality }}
              </li>
              <li class="arrow-holder mb-1">
                <ChevronRight class="chevron" />
                <strong style="color:black;">Email:</strong>{{ about.email }}
              </li>
              <li class="arrow-holder mb-1">
                <ChevronRight class="chevron" />
                <strong style="color:black;">City:</strong>{{ about.address }}
              </li>
            </ul>
          </div>
          <div class="col-lg-6  ">
            <ul class="list-unstyled list-holder">
              <li class="arrow-holder mb-1">
                <ChevronRight class="chevron" />
                <strong style="color:black;">Age:</strong>{{ about.age }}
              </li>
              <li class="arrow-holder mb-1">
                <ChevronRight class="chevron" />
                <strong style="color:black;">Degree:</strong>{{ about.degree }}
              </li>
              <li class="arrow-holder mb-1">
                <ChevronRight class="chevron" />
                <strong style="color:black;">Freelance:</strong
                >{{ about.remoteAvailability }}
              </li>
              <li class="arrow-holder mb-1">
                <ChevronRight class="chevron" />
                <strong style="color:black;">Years of experience:</strong
                >{{ about.yearsOfExperience }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ChevronRight from "mdi-vue/ChevronRight";

export default {
  name: "About",
  components: {
    ChevronRight
  },
  data: () => {
    return {
      about: {
        name: "Hossein Mirian",
        age: "32",
        fullSummary:
          "            I am current University of Oxford Front-end developer/Researcher. I\n" +
          "            have been working as software developer the past 12 years.I\n" +
          "            graduated from Birmingham City University by achieving MSc Advanced\n" +
          "            Computer Science degree.\n",
        address: "Oxford,United Kingdom",
        email: "hosein.mirian@gmail.com",
        phone: "+44 7376799008",
        nationality: "Iran",
        degree: "Msc Advanced Computer Science",
        remoteAvailability: "Available",
        yearsOfExperience: "12"
      }
    };
  }
};
</script>

<style scoped>
.holder {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

/*------------About---------------*/
#about {
  background-color: white;
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
