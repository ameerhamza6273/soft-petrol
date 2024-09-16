<template>
  <div id="app" class="h-screen overflow-auto">
    <TopBar />
    <!-- <Calander /> -->
    <!-- <DateTable /> -->

  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Calander from './components/Calander.vue';
import DateTable from './components/DateTable.vue';
export default {
  components: {
    TopBar,
    Calander,
    DateTable,
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
 