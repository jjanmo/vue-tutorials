<template>
  <ImageGallery />
  <VideoGallery />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageGallery from '@/components/gallery/ImageGallery.vue';
import VideoGallery from '@/components/gallery/VideoGallery.vue';

export default defineComponent({
  name: 'Gallery',
  components: {
    ImageGallery,
    VideoGallery,
  },
});
</script>

<style lang="css" scoped></style>
