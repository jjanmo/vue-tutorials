<template>
  <div class="video-gallery">
    <!-- <video v-for="(video, i) of videos" :key="i" :src="video"></video> -->
    <!-- 
    <a
      v-for="(video, i) of videos"
      :key="i"
      :data-video="JSON.stringify(video)"
      data-lg-size="1280-720"
      data-poster="https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg"
      data-sub-html="<h4>'Peck Pocketed' by Kevin Herron | Disney Favorite</h4>"
      class="video-frame"
    >
      <img :src="require('/public/assets/image1.webp')" :alt="`video-${i}`" class="video-thumbnail" />
    </a> -->

    <a
      class="video-frame"
      data-video='{"source": [{"src":"https://www.lightgalleryjs.com/videos/video1.mp4", "type": "video/mp4"}], "attributes": {"preload": false, "controls": true, "playsinline": true}}'
      data-poster="https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg"
    >
      <img class="video-thumbnail" src="https://www.lightgalleryjs.com/images/demo/html5-video-poster.jpg" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';
import hash from 'lightgallery/plugins/hash';

export default defineComponent({
  name: 'VideoGallery',

  data() {
    return {
      videos: [
        {
          source: [{ src: 'https://www.lightgalleryjs.com/videos/video1.mp4', type: 'video/mp4' }],
          tracks: [
            {
              src: 'https://www.lightgalleryjs.com/videos/title.txt',
              kind: 'captions',
              srclang: 'en',
              label: 'English',
              default: 'true',
            },
          ],
          attributes: { preload: false, controls: true, playsinline: true },
        },
        {
          source: [
            {
              src: require('/public/assets/video2.mp4'),
              type: 'video/mp4',
            },
          ],
          attributes: { controls: true },
        },
      ],
    };
  },

  computed: {
    videoThumbnails() {
      const videos = document.querySelectorAll('video');
      console.log('@@', videos);
      return Array.from(videos).map((video) => {
        const canvas = document.createElement('canvas') as HTMLCanvasElement;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        context.drawImage(video, 0, 0, 400, 400);
        return canvas.toDataURL('image/jpeg');
      });
    },
  },

  mounted() {
    lightGallery(document.querySelector('.video-gallery') as HTMLDivElement, {
      speed: 500,
      plugins: [lgVideo, hash],
      iframeMaxWidth: '80%',
      iframeWidth: '80%',
    });
  },
});
</script>

<style lang="css" scoped>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';

.video-gallery {
  max-width: 400px;
  margin: 20px 0;
  border-radius: 20px;
  overflow: hidden;
  /* display: flex;
  flex-direction: column;
 
  ; */
}
.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: pointer;
}
.video-thumbnail {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
</style>
