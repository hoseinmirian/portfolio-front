<template>
  <b-card :title="title" class="d-flex flex-column">
    <b-img-lazy v-bind="mainProps" :src="img" alt="Image 1"></b-img-lazy>
    <mark class="m-0 p-0"><b>Role: </b>{{ role }}</mark>
    <b-card-text class="m-0"><b>Client: </b> {{ organisation }}</b-card-text>
    <b-card-text class="m-0"><b>Location: </b> {{ location }} </b-card-text>
    <b-card-text class="m-0"
      ><b>Website: </b><a :href="website" target="_blank">{{ website }}</a>
    </b-card-text>
    <b-card-text class="m-0"
      ><b>SourceCode: </b
      ><a :href="sourceCode" target="_blank">{{ sourceCode }}</a>
    </b-card-text>
    <b-card-text class="m-0">
      <b>Description: </b>{{ description }}
    </b-card-text>
    <b-card-text>
      <b>Tools / Techs: </b>
      <span v-for="(tech, index) in techs" :key="tech + '_' + index"
        >{{ tech }}{{ index !== techs.length - 1 ? "," : "" }}
      </span>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    title: { default: null, type: String },
    img: { default: null, type: String },
    mainProps: { default: null, type: Object },
    organisation: { default: null, type: String },
    location: { default: null, type: String },
    sourceCode: { default: null, type: String },
    role: { default: null, type: String },
    website: { default: null, type: String },
    description: { default: null, type: String },
    techs: { default: null, type: Array }
  },
  data: () => {
    return {};
  }
};
</script>

<style scoped></style>
