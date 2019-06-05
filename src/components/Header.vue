<template>
  <header class="header">
    <span class="brand">
      <h1 class="brand__title">Photo Album</h1>
      <img class="brand__logo" alt="logo" src="../assets/images/folder_logo_32.png">
    </span>
    <ul class="header__buttons">
      <li class="header__button"><Button :size="'large'" :variant="'primary'" :onClick="action">Photos</Button></li>
      <li class="header__button"><Button :size="'large'" :variant="'primary'" :onClick="action">Albums</Button></li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Button } from '../components';

@Component({
  components: {
    Button,
  },
  methods: {
    action() {
      console.log('Pressed');
    }
  }
})
export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
.header {
  align-items: center;
  // background: lightblue;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  &__buttons {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__button {
    padding: 0 0.5rem;
  }
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
