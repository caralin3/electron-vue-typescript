<template>
  <button class="button" :class="[`button__${variant}`]" type="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() private onClick!: (e: HTMLButtonElement) => void;
  @Prop() private variant!: 'primary' | 'secondary' | 'danger' | 'success';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button {
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  &__primary {
    background: #CC4C26;
    color: #ffffff;
    &:hover, &:focus {
      background: darken(#CC4C26, 10%);
    }
  }
  &__secondary {
    background: #A2008C;
    color: #ffffff;
    &:hover, &:focus {
      background: darken(#A2008C, 10%);
    }
  }
  &__danger {
    background: red;
    color: #ffffff;
    &:hover, &:focus {
      background: darken(red, 10%);
    }
  }
  &__success {
    background: green;
    color: #ffffff;
    &:hover, &:focus {
      background: darken(green, 10%);
    }
  }
  &:hover, &:focus {
    cursor: pointer;
  }
}

</style>
