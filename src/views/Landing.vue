<template>
  <div class="landing">
    <img alt="logo" src="../assets/images/folder_logo_128.png">
    <h1 class="title">Photo Album</h1>
    <Button :size="'large'" :variant="'primary'" :onClick="action">Choose Folder</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from '../components';
import { getFolderPath } from '../electron/file-dialogs';
import router from '../router';

@Component({
  components: {
    Button,
  },
  methods: {
    action() {
      const path = getFolderPath();
      console.log(path);
      router.push('home');
    }
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import '@/assets/styles/index.scss';

.landing {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}

.title {
  padding: 1rem 0 2rem;
}

</style>
