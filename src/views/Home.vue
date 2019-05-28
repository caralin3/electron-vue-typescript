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
import { openFileDialog, getFolderPath } from '../electron/file-dialogs';

@Component({
  components: {
    Button
  },
  methods: {
    action() {
      // openFileDialog();
      const path = getFolderPath();
      console.log(path);
    }
  }
})
export default class Home extends Vue {}
</script>
