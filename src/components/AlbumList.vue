<template>
    <ul class="albumList">
      <router-link tag="li" to="/home" class="albumList__item" v-for="album in albums" :key="album.id">
        <list-item :label="album.title" />
      </router-link>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Album } from '../models';
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
export default class AlbumList extends Vue {
  @Prop() private albums!: Album[];
  //  @Prop() private onClick!: (e: HTMLButtonElement) => void;
}
</script>

<style scoped lang="scss">
.albumList {
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
