<template>
  <ImageGallery />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageGallery from '@/components/gallery/ImageGallery.vue';

export default defineComponent({
  name: 'Gallery',
  components: {
    ImageGallery,
  },
});
</script>

<style lang="css" scoped></style>
