<template>
  <div class="home">
    <Header />
    <Search :onClick="action" />
    <!-- <photo-list :path="path" /> -->
    <album-list :albums="mockAlbums" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AlbumList, Header, PhotoList, Search } from '../components';
import { mockAlbums } from '../models';
import router from '../router';

@Component({
  components: {
    AlbumList,
    Header,
    PhotoList,
    Search
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
}
</style>
