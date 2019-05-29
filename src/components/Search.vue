<template>
  <span class="searchBar">
    <input class="input search" type="search" v-model.trim="query" />
    <i class="fas fa-search iconButton search__icon" @click="onClick" role="button" tabindex="0" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
  @Prop() private onClick!: (e: HTMLButtonElement) => void;
  private query: string = '';

  // handleKey(e: KeyboardEvent) {
  //   if (e.keyCode === 9) {
  //     this.$props.onClick();
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/index.scss';

.searchBar {
  padding: 1rem 0 1rem 1rem;
}

.search {
  margin: 0.5rem;
  width: calc(100% - 5rem);

  &__icon {
    color: lightcoral;
    &:hover, &:focus, &:active {
      color: darken($color: (lightcoral), $amount: 10%);
    }
  }
}


</style>
