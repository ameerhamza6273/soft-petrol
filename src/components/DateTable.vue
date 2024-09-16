<template>
    <div class="pt-[52px]">
        <section class="overflow-y-auto bg-[#f3f4f6]">
            <!-- First Table (Draggable items) -->
            <article class="row w-full bg-[#f3f4f6]" style="min-height: 270px;">
                <table class="table table-bordered border-info m-0 w-full" >
                    <thead class="sticky top-0 bg-[#fff] z-10">
                        <tr>
                            <th class="min-w-[170px] max-w-[175px] p-2 text-sm font-medium">Guard Name</th>
                            <th v-for="(date, index) in dateRange" :key="index"
                                class="p-2 text-sm font-medium min-w-[105px]">
                                <article class="flex justify-between">
                                    <div>
                                        <input type="checkbox" class="th_date">
                                        {{ formatDayOfWeek(date) }}, {{ formatDay(date) }}
                                    </div>
                                    <span class="cursor-pointer"><i class="fa fa-plus"></i></span>
                                </article>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-grayLight pt-5">
                        <tr class="OpenJobTr h-60">
                            <td class="w-[200px] p-2">Additional content can go here</td>
                            <td v-for="(date, index) in dateRange" :key="index"
                                class="relative border-l-2 border-black p-2 text-sm font-medium min-w-[105px]">
                                <div v-for="(shift, idx) in getScheduleForDate(date)" :key="idx" 
                                     class="drag-item bg-blue-200 p-2 rounded-md">
                                    {{ shift.time }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>

            <!-- Second Table (Drop items) -->
            <article class="row w-full">
                <table class="table table-bordered border-info m-0 w-full">
                    <tbody class="bg-[#fff]">
                        <tr class="OpenJobTr">
                            <td class="min-w-[170px] w-[200px] p-3 text-sm font-medium">
                                <article class="flex items-center justify-between">
                                    <span><span class="bg-[#abb4bd] text-white p-1 rounded-xl mr-2">sk</span>Sanwal
                                        Khan</span>
                                    <svg class="Icon" style="display: inline-block; vertical-align: text-bottom;"
                                        width="16px" height="16px" viewBox="0 0 24 24">
                                        <path
                                            d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                                    </svg>
                                </article>
                            </td>
                            <td v-for="(date, index) in dateRange" :key="index"
                                class="p-3 text-sm font-medium min-w-[105px]">
                                <!-- Render dropped shifts here -->
                                <div 
                                    class="bg-green-200 p-2 rounded-md">
                                   
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- bottom button -->
                <div class="flex justify-center">
                    <button class="bg-blue text-white px-4 py-2 rounded-md my-4">Load more...</button>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        startDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            // Example schedule data in array format
            schedule: [
                {
                    date: "2024-09-15",
                    time: "7:00 -9:00",
                },
                {
                    date: "2024-09-12",
                    time: "9:00 -11:00",
                },
            ],
        };
    },
    computed: {
        dateRange() {
            const dateArray = [];
            let currentDate = new Date(this.startDate);
            const endDateValue = new Date(this.endDate);

            currentDate.setFullYear(2024);
            endDateValue.setFullYear(2024);

            while (currentDate <= endDateValue) {
                dateArray.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }

            return dateArray;
        },
    },
    methods: {
        formatDay(date) {
            const day = ('0' + new Date(date).getDate()).slice(-2);
            return day;
        },
        formatDayOfWeek(date) {
            const dayOfWeek = new Date(date).toLocaleDateString("en-US", { weekday: "short" });
            return dayOfWeek;
        },
        formatDate(date) {
            return new Date(date).toISOString().split("T")[0];
        },
        getScheduleForDate(date) {
            const formattedDate = this.formatDate(date);
            return this.schedule.filter((item) => item.date === formattedDate);
        },
     
    },
};
</script>

<style scoped>
.table-bordered {
    border-collapse: collapse;
}

.table-bordered th,
.table-bordered td {
    border: 1px solid #dee2e6;
}

.drag-item {
    cursor: grab;
}

.drag-item:active {
    cursor: grabbing;
}
</style>
