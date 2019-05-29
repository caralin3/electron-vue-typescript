<template>
  <div class="home">
    <Header />
    <Search :onClick="action" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Header, Search } from '../components';

@Component({
  components: {
    Header,
    Search
  },
  methods: {
    action() {
      
    }
  }
})
export default class Home extends Vue {}
</script>
