<template>
    <div class="relative w-full">
      <!-- Custom Select (Clickable div to show dropdown) -->
      <div class="border border-[#aaa] p-1 w-full flex flex-wrap items-center" @click="toggleDropdown">
        <!-- Placeholder -->
        <span v-if="selectedOptions.length === 0" class="text-[#999] text-[13px]">Select Some Options</span>
  
        <!-- Chips -->
        <div v-for="(chip, index) in selectedOptions" :key="chip.value"
          class="flex items-center px-1.5 py-0.5 bg-gray-300 text-black rounded text-xs space-x-2 mr-2 mt-0.5 mb-0.5">
          <span>{{ chip.text }}</span>
          <button @click.stop="removeChip(index)" class="ml-2 text-black cursor-pointer">×</button>
        </div>
      </div>
  
      <!-- Dropdown Options -->
      <div v-if="isDropdownOpen" class="absolute left-0 w-full mt-1 border border-black bg-white z-10">
        <ul>
          <li v-for="option in availableOptions" :key="option.value" @click.stop="selectOption(option)"
            class="p-1 hover:bg-gray-100 cursor-pointer text-[13px] opacity-85">
            {{ option.text }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
      value: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        isDropdownOpen: false,
        selectedOptions: [...this.value] // Initialize with passed value (if any)
      };
    },
    computed: {
      availableOptions() {
        return this.options.filter(option => !this.selectedOptions.find(chip => chip.value === option.value));
      }
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      selectOption(option) {
        this.selectedOptions.push(option);
        this.isDropdownOpen = false;
        this.$emit('input', this.selectedOptions); // Emit selected options back to parent
      },
      removeChip(index) {
        this.selectedOptions.splice(index, 1);
        this.$emit('input', this.selectedOptions); // Emit updated options back to parent
      }
    }
  };
  </script>
  