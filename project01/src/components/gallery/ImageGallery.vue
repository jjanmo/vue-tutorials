<template>
  <div class="image-gallery">
    <div v-for="(image, i) of images" :key="i" :data-src="image" class="image-frame">
      <img :src="image" :alt="`image-${i}`" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import hash from 'lightgallery/plugins/hash';

export default defineComponent({
  name: 'Gallery',

  data: () => ({
    images: [
      require('/public/assets/image1.webp'),
      require('/public/assets/image2.webp'),
      require('/public/assets/image3.webp'),
      require('/public/assets/image4.webp'),
    ],
  }),

  mounted() {
    lightGallery(document.querySelector('.image-gallery') as HTMLDivElement, {
      speed: 500,
      plugins: [lgThumbnail, lgZoom, hash],
      galleryId: 'image-gallery',
    });
  },
});
</script>

<style lang="css" scoped>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';

.image-gallery {
  width: 282px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  border-radius: 20px;
  overflow: hidden;
}
.image-frame {
  grid-column: span 3;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}
.image-frame img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
