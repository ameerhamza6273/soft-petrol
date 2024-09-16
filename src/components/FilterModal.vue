<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave ">
    <div v-if="isOpen" class="fixed inset-0 bg-gray-500 bg-opacity-10 z-10 flex justify-start" @click.self="closeModal">
      <div class="bg-white shadow-lg w-80 divide-y">
        <div class="flex justify-between items-center">
          <h4 class="text-[15px] font-semibold p-6 mb-0.4">Filter :</h4>
        </div>
        <div class="p-6 overflow-auto " style="height: 88vh;" >
          <!-- First Field -->
          <label for="first" class="text-[13px] opacity-85">Select sites:</label>
          <FilterDropdown v-model="selectedOptions1" :options="options1" id="first" />
          <label for="first" class="text-[13px] opacity-85">Select sites:</label>
          <FilterDropdown v-model="selectedOptions1" :options="options1" id="first" />
          <label for="first" class="text-[13px] opacity-85">Select sites:</label>
          <FilterDropdown v-model="selectedOptions1" :options="options1" id="first" />

          <!-- Second Field -->
          <div class="mt-2">
            <label for="" class="text-[13px] opacity-85">Select guards:</label>
            <FilterDropdown v-model="selectedOptions2" :options="options2" />
          </div>

          <!-- Third Field -->
          <div class="mt-2">
            <label for="" class="text-[13px] opacity-85">Tag:</label>
            <FilterDropdown v-model="selectedOptions3" :options="options3" />
          </div>

          <!-- Fourth Field -->
          <div class="mt-2">
            <label for="" class="text-[13px] opacity-85">Departments:</label>
            <FilterDropdown v-model="selectedOptions4" :options="options4" />
          </div>

          <!-- Fifth Field -->
          <div class="mt-2">
            <label for="" class="text-[13px] opacity-85">Shift Status:</label>
            <FilterDropdown v-model="selectedOptions5" :options="options5" />
          </div>

          <div class="mt-2">
            <label for="" class="text-[13px] opacity-85">Subcontractor:</label>
            <select name="holiday_type" id="holiday_type" class="w-full border border-[#aaa] p-0.5 text-xs rounded"
              style="background: linear-gradient(#fff 20%, #f6f6f6 50%, #eee 52%, #f4f4f4 100%);">
              <option value=""> Rhodes and Richard Inc</option>
              <option value="Sick">Sick</option>
              <option value="Holiday">Holiday</option>
            </select>
          </div>
          <div class="mt-2">
            <label for="" class="text-[13px] opacity-85">Service Type</label>
            <select name="holiday_type" id="holiday_type" class="w-full border border-[#aaa] p-0.5 text-xs rounded"
              style="background: linear-gradient(#fff 20%, #f6f6f6 50%, #eee 52%, #f4f4f4 100%);">
              <option value=""> CCTV</option>
              <option value="Sick">Sick</option>
              <option value="Holiday">Holiday</option>
            </select>
          </div>
          <div class="mt-2">
            <label for="" class="text-[13px] opacity-85">client</label>
            <select name="holiday_type" id="holiday_type" class="w-full border border-[#aaa] p-0.5 text-xs rounded"
              style="background: linear-gradient(#fff 20%, #f6f6f6 50%, #eee 52%, #f4f4f4 100%);">
              <option value=""> -- Choose -- </option>
              <option value="Sick">Sick</option>
              <option value="Holiday">Holiday</option>
            </select>
          </div>
          <div class="mt-4 flex justify-end space-x-4">
            <button @click="deactivate" class="bg-blue text-white px-4 py-2 rounded-lg ">Filter</button>
            <button @click="closeModal" class="bg-grayDark text-gray-900 px-4 py-2 rounded-lg">Close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import FilterDropdown from './FilterDropdown.vue'
export default {
  name: "FilterModal",
  components: {
    FilterDropdown
  },
  data() {
    return {
      isOpen: false,
      selectedOptions1: [],
      selectedOptions2: [],
      selectedOptions3: [],
      selectedOptions4: [],
      selectedOptions5: [],
      options1: [
        { value: "40", text: "AXO Islington" },
        { value: "38", text: "AXO New Cross" },
        { value: "41", text: "Axo Paradise Coventry" }
      ],
      options2: [
        { value: "40", text: "AXO Islington" },
        { value: "38", text: "AXO New Cross" },
        { value: "41", text: "Axo Paradise Coventry" }
      ],
      options3: [
        { value: "40", text: "AXO Islington" },
      ],
      options4: [
        { value: "40", text: "AXO Islington" },
      ],
      options5: [
        { value: "40", text: "AXO Islington" },
      ],
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    deactivate() {
      // Handle account deactivation
      this.closeModal();
    },

    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = 0;
      done();
    }
  },



}
</script>

<style>

</style>
