<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Photo Album</h1>
    <Button :variant="'primary'" :onClick="action">Choose Folder</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from '../components';

@Component({
  components: {
    Button
  },
  methods: {
    action() {
      this.$emit('click');
      console.log('Clicked');
    }
  }
})
export default class Home extends Vue {}
</script>
