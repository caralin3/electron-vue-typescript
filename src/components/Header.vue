<template>
  <header class="header">
    <span class="brand">
      <h1 class="brand__title">Photo Album</h1>
      <img class="brand__logo" alt="logo" src="../assets/images/folder_logo_32.png">
    </span>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
.header {
  align-items: center;
  background: lightblue;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.brand {
  align-items: center;
  display: flex;
  justify-content: flex-start;

  &__title {
    padding-right: 1rem;
  }
}
</style>
