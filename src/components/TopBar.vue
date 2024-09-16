<template>
    <div class="w-full bg-[#fefdfe]">
      <div class="flex items-center p-2 gap-3 bg-[#fefdfe] fixed top-0 w-full z-50">
        <div>
          <h1 class="text-xl italic font-bold font-Poppins">
            <span>{{ formattedFromDate }}</span> - <span>{{ formattedToDate }}</span>
          </h1>
        </div>
        <div>
          <a href="#" title="Previous week" @click="adjustDate(-1)">
            <span class="TimelineButton__inner text-lg text-blue p-2 hover:text-black bg-grayDark rounded inline-block leading-none">‹‹</span>
          </a>
        </div>
        <div>
          <input class="form-control border border-grayDark rounded py-1 text-sm" id="from_date" name="from_date" type="date" v-model="fromDate" />
        </div>
        <div>
          <a href="#" title="Next week" @click="adjustDate(1)">
            <span class="TimelineButton__inner text-lg text-blue p-2 hover:text-black bg-grayDark rounded inline-block leading-none">››</span>
          </a>
        </div>
        <div>
          <select v-model="selectedDuration" @change="updateDate" class="form-control form-control-sm bg-grayLight rounded p-2 text-xs">
            <option>1 Day</option>
            <option>2 Days</option>
            <option selected>1 Week</option>
            <option>2 Weeks</option>
            <option>4 Weeks</option>
            <option>1 Month</option>
            <option>3 Months</option>
          </select>
        </div>
        <div>
          <button @click="showModal" class="btn btn-primary bg-blue text-white btn-sm p-1.5 rounded mx-1 text-sm">Filter</button>
          <ModalDialog ref="modalDialog" />
          <a class="btn btn-danger bg-green px-1.5 py-1.5 rounded text-white text-sm cursor-pointer mr-1">
            <i class="fa-solid fa-file-excel"></i>
          </a>
          <button type="button" class="btn btn-info bg-blue text-white btn-sm p-1.5 rounded mr-1 text-sm" >Bid</button>
          <button type="button" class="btn btn-info bg-blue text-white btn-sm p-1.5 rounded mr-1 text-sm" >B SMS</button>
          <select name="others" id="others" class="border border-black text-xs mx-1">
            <option value="">-- Choose --</option>
            <option value="spread_shifts">Spread shifts</option>
            <option value="deleted_shifts">Deleted shifts</option>
            <option value="floater">Filter in floater</option>
          </select>
          <select name="holiday_type" id="holiday_type" class="border border-black text-xs mx-1">
            <option value="">-- Holiday type --</option>
            <option value="Sick">Sick</option>
            <option value="Holiday">Holiday</option>
            <option value="Dailyrest">Daily rest</option>
            <option value="Timeoff">Time Off</option>
            <option value="Available">Available</option>
            <option value="Absent">Absent</option>
          </select>
          <select name="p_status" id="p_status" class="border border-black text-xs mx-1">
            <option value="">All</option>
            <option value="Published">Published</option>
            <option value="Unpublished">Unpublished</option>
            <option value="Un_assigned">Unassigned</option>
          </select>
        </div>
        <div class="ml-auto">
          <a class="btn btn-info bg-greenLight text-white px-1.5 py-2 rounded-lg text-[12px]">Publish(1)</a>
        </div>
      </div>
      <Calander :startDate="formattedFromDate" :endDate="formattedToDate" />
    </div>
  </template>
  
  <script>
  import ModalDialog from './FilterModal.vue';
  import Calander from './Calander.vue';
  
  export default {
    name: 'TopBar',
    components: { ModalDialog, Calander },
    data() {
      return {
        fromDate: '',
        selectedDuration: '1 Week',
      };
    },
    computed: {
      formattedFromDate() {
        return this.formatDate(this.fromDate);
      },
      formattedToDate() {
        return this.calculateEndDate();
      },
    },
    methods: {
      formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'short' });
        return `${month} ${day}`;
      },
      calculateEndDate() {
        if (!this.fromDate) return '';
        const fromDateValue = new Date(this.fromDate);
        let targetDate = new Date(fromDateValue);
  
        switch (this.selectedDuration) {
          case '1 Day':
            targetDate.setDate(targetDate.getDate() );
            break;
          case '2 Days':
            targetDate.setDate(targetDate.getDate() + 1);
            break;
          case '1 Week':
            targetDate.setDate(targetDate.getDate() + 6);
            break;
          case '2 Weeks':
            targetDate.setDate(targetDate.getDate() + 13);
            break;
          case '4 Weeks':
            targetDate.setDate(targetDate.getDate() + 27);
            break;
          case '1 Month':
            targetDate.setMonth(targetDate.getMonth() + 1);
            targetDate.setDate(targetDate.getDate() - 1);
            break;
          case '3 Months':
            targetDate.setMonth(targetDate.getMonth() + 3);
            targetDate.setDate(targetDate.getDate() - 1);
            break;
        }
  
        return this.formatDate(targetDate.toISOString().split('T')[0]);
      },
      adjustDate(direction) {
        let targetDate = new Date(this.fromDate || new Date());
        const durationMap = {
          '1 Day': 1,
          '2 Days': 2,
          '1 Week': 7,
          '2 Weeks': 14,
          '4 Weeks': 28,
          '1 Month': 30, // Approximation
          '3 Months': 90, // Approximation
        };
        targetDate.setDate(targetDate.getDate() + durationMap[this.selectedDuration] * direction);
        this.fromDate = targetDate.toISOString().split('T')[0];
      },
      updateDate() {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + diffToMonday);
        this.fromDate = targetDate.toISOString().split('T')[0];
      },
      showModal() {
        this.$refs.modalDialog.openModal();
      },
      
    },
    mounted() {
      this.updateDate();
    },
  };
  </script>
  