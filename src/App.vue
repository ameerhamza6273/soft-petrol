<template>
  <div id="app" class="h-screen overflow-auto">
    <TopBar />

  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
export default {
  components: {
    TopBar,
  },
};
</script>


<style scoped>

@import 'tailwindcss/tailwind.css';

</style>

<!-- <div class="col-sm-12 overflow-scroll  h-screen">
  <table class="table table-bordered border-info bg-gray-200 m-0">
     
  </table>
</div>

 -->
 