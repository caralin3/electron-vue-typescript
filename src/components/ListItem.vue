<template>
  <div class="listItem">
    <img class="album__img" :alt="label" :src="getImage()">
    <p>{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Album } from '../models';

@Component
export default class ListItem extends Vue {
  @Prop() private image!: string;
  @Prop() private label!: string;

  getImage() {
    return this.image || require('@/assets/images/blue_folder_full_128.png');
  }
  // @Prop() private onClick!: (e: HTMLButtonElement) => void;
}
</script>

<style scoped lang="scss">
.listItem {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1.5rem;
}
</style>
