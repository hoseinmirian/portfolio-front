<template>
  <main>
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="portfolio-content">
          <!--  title  -->
          <div class="section-title">
            <span class="pt-5">My Portfolio</span>
            <h2 class="pt-5">My Portfolio</h2>
          </div>
          <div class="row mt-5">
            <!--Tabs-->
            <div class="col-md-3 d-flex flex-column">
              <button
                type="button"
                class="btn btn-outline-warning mb-2  d-flex justify-content-between"
                :class="{ active: tab.active }"
                v-for="(tab, index) in tabList"
                :key="tab.title + '_' + index"
                @click="selectTab(index)"
              >
                <component :is="tab.icon" class="social-color"></component>
                <span>{{ tab.title }}</span>
              </button>
            </div>
            <!--end of Tabs-->

            <!--Content-->
            <div class="col-md-9"></div>
            <!--end of Content-->
          </div>
          <!--Gallery-->
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import All from "mdi-vue/AllInclusive";
import Web from "mdi-vue/Web";
import Cellphone from "mdi-vue/Cellphone";
import Design from "mdi-vue/Brush";

export default {
  name: "Portfolio",
  components: {
    All,
    Web,
    Cellphone,
    Design
  },

  data: () => {
    return {
      tabList: [
        { icon: "All", title: "All", active: true },
        { icon: "Web", title: "Web", active: false },
        { icon: "Cellphone", title: "Mobile", active: false },
        { icon: "Design", title: "Design", active: false }
      ]
    };
  },
  methods: {
    selectTab(tabIndex) {
      this.tabList.map(tab => {
        tab.active = false;
      });
      this.tabList[tabIndex].active = true;
    }
  },
  beforeDestroy() {
    this.scrollToTop();
  }
};
</script>
<style scoped>
#portfolio .portfolio-content {
  height: 100%;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.section-title {
  margin-top: 50px;
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

.btn-outline-warning {
  transition: background-color ease-in 0.4s;
  border-radius: 10px 0 10px 0;
  -webkit-border-radius: 10px 0 10px 0;
  -moz-border-radius: 10px 0 10px 0;
}

.btn-outline-warning:hover {
  color: white;
}

.btn-outline-warning.focus,
.btn-outline-warning:focus {
  box-shadow: 0 0 0 0 !important;
}

.btn-outline-warning:not(:disabled):not(.disabled).active,
.btn-outline-warning:not(:disabled):not(.disabled):active,
.show > .btn-outline-warning.dropdown-toggle {
  color: white;
  background-color: #ffb727;
}
</style>
