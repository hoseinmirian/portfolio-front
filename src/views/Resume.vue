<template>
  <main>
    <section id="resume" class="resume">
      <div class="container">
        <div class="resume-content">
          <!--  title  -->
          <div class="section-title">
            <span class="pt-5">My Resume</span>
            <h2 class="pt-5">My Resume</h2>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Alice Barkley</h4>
                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                <ul>
                  <li>Portland par 127,Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Master of Fine Arts &amp; Graphic Design</h4>
                <h5>2015 - 2016</h5>
                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
              </div>
              <div class="resume-item">
                <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                <h5>2010 - 2014</h5>
                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Senior graphic design specialist</h4>
                <h5>2019 - Present</h5>
                <p><em>Experion, New York, NY </em></p>
                <ul>
                  <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                  <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                </ul>
              </div>
              <div class="resume-item">
                <h4>Graphic design specialist</h4>
                <h5>2017 - 2018</h5>
                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                <ul>
                  <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                  <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                  <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                  <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "Resume"
};
</script>
<style scoped>
#resume {
  height: auto;
  width: 100%;
}

#resume .resume-content {
  height: 100%;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

/*--------------------------------------------------------------
# My Resume
--------------------------------------------------------------*/
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #3b434a;
}

.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #82909c;
  position: relative;
}

.resume .resume-item h4 {
  line-height: 18px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffb727;
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  background: #eef0f2;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item ul {
  padding-left: 20px;
}

.resume .resume-item ul li {
  padding-bottom: 10px;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #82909c;
}
</style>
