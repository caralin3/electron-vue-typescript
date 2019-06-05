<template>
    <ul class="photoList">
      <router-link tag="li" to="/home" class="photoList__item" v-for="image in photos" :key="image.id">
        <album-item :image="image.src" :label="image.title" />
      </router-link>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Album, Photo } from '../models';
import { ListItem } from '.';

@Component({
  components: {
    ListItem,
  },
  methods: {
    action() {
      console.log('Clicked');
    }
  }
})
export default class PhotoList extends Vue {
  @Prop() private path!: string;
  private photos: Photo[] = [];
  //  @Prop() private onClick!: (e: HTMLButtonElement) => void;

  setPhotos() {
    
  }
}
</script>

<style scoped lang="scss">
.photoList {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  &__item {

    &:hover, &:focus, &:active {
      background-color: lighten(lightcoral, 20%);
      cursor: pointer;
    } 
  }
}
</style>
