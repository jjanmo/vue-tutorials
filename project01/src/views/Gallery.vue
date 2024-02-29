<template>
  <Lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide">
    <a href="img/img1.jpg">
      <img alt="img1" src="img/thumb1.jpg" />
    </a>
    <a href="img/img2.jpg">
      <img alt="img2" src="img/thumb2.jpg" />
    </a>
    ...
  </Lightgallery>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default defineComponent({
  name: 'Gallery',
  components: {
    Lightgallery,
  },
  data: () => ({
    plugins: [lgThumbnail, lgZoom],
  }),
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
  },
});
</script>

<style lang="css" scoped>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';
</style>
