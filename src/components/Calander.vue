<template>
    <div class="pt-[52px]">
        <section class="overflow-y-auto bg-[#f3f6f9]">
            <!-- First Table (Draggable items) -->
            <article class="row w-full bg-[#f3f4f6]" style="min-height: 270px;">
                <!-- First Table (Draggable Items) -->
                <table class="table table-bordered border-info m-0 w-full" @dragover.prevent
                    @drop="handleDrop('first')">
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
                            <td class="w-[200px] max-w-[205px] p-2 relative ">
                                <div class="absolute top-3 pr-2">
                                    <div class="grid grid-cols-2 gap-2 ">
                                        <select name="others" id="others"
                                            class="border border-gray-300 rounded-md bg-white text-md p-1 py-2">
                                            <option value="">time</option>
                                            <option value="spread_shifts">00:00</option>
                                            <option value="deleted_shifts">01:00</option>
                                            <option value="deleted_shifts">02:00</option>
                                            <option value="deleted_shifts">03:00</option>
                                            <option value="deleted_shifts">04:00</option>
                                        </select>
                                        <select name="others" id="others"
                                            class="border border-gray-300 rounded-md bg-white text-md p-1 py-2">
                                            <option value="">Adress</option>
                                            <option value="spread_shifts">Hull</option>
                                            <option value="deleted_shifts">Leeds</option>
                                            <option value="deleted_shifts">Brighton</option>
                                            <option value="deleted_shifts">Cardiff</option>
                                            <option value="deleted_shifts">Oxford</option>
                                        </select>
                                    </div>
                                    <input type="text" id="first_name"
                                        class="bg-white w-full text-md border rounded-md mt-2 border-gray-300 p-1"
                                        placeholder="Job Ref" required />

                                    <div class="relative w-full mt-2">
                                        <input type="search"
                                            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                            placeholder="Guard name" required />
                                        <button type="submit"
                                            class="absolute top-0 end-0 p-2.5 h-full text-md text-white bg-blue rounded-e-lg"><svg
                                                class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg></button>
                                    </div>
                                   <div class="flex mt-3 gap-2">
                                    <a
                                        class="btn btn-danger bg-green px-4 py-1.5  rounded text-white text-sm cursor-pointer ">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <a
                                        class="btn btn-danger bg-green px-4 py-1.5  rounded text-white text-sm cursor-pointer ">
                                        <i class="fa-solid fa-envelope"></i>
                                    </a>
                                   </div>
                                </div>


                            </td>
                            <td class="border border-gray-400 p-1 cursor-grab relative"
                                v-for="(date, index) in dateRange" :key="index">
                                <div v-for="(item, index) in getScheduleForDate1(date)" :key="index" draggable="true"
                                    @dragstart="dragStart(item, 'first')"
                                    class="bg-[#f76d65] p-0.5 px-2 rounded absolute top-1 w-[93%] ">
                                    <p>{{ item.name }}</p>
                                    <p>{{ item.time }}</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>

            <!-- Second Table (Drop items) -->
            <article class="row w-full">
                <!-- Second Table (Drop Items) -->
                <table class="table table-bordered border-info m-0 w-full bg-white" @dragover.prevent
                    @drop="handleDrop('second')">
                    <tbody>

                        <tr class=" OpenJobTr">
                            <td class="min-w-[170px] w-[200px] p-3 text-sm font-medium">
                                <article class="flex items-center justify-between">
                                    <span><span class="bg-[#abb4bd] text-white p-1 rounded-xl mr-2">sk</span>Sanwal
                                        Khan</span>
                                    <svg class="Icon" style="display: inline-block; vertical-align: text-bottom;"
                                        width="16px" height="16px" viewBox="0 0 24 24">
                                        <path
                                            d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z">
                                        </path>
                                    </svg>
                                </article>
                            </td>
                            <td v-for="(date, index) in dateRange" :key="index"
                                class="p-1 text-sm font-medium min-w-[105px]">
                                <div v-for="(item, index) in getScheduleForDate2(date)" :key="index" draggable="true"
                                    @dragstart="dragStart(item, 'second')"
                                    class="bg-[#aa7942] cursor-grab p-0.5 px-2 rounded">
                                    <p>{{ item.name }}</p>
                                    <p>{{ item.time }}</p>
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
            // List of draggable items in the first table
            items: [
                {
                    id: 1, name: "Item 1",
                    date: "2024-09-15",
                    time: "7:00 -9:00",
                },
                {
                    id: 2, name: "Item 2",
                    date: "2024-09-21",
                    time: "7:00 -9:00",
                },
                {
                    id: 3, name: "Item 3",
                    date: "2024-09-16",
                    time: "7:00 -9:00",
                },
                {
                    id: 4, name: "Item 4",
                    date: "2024-09-18",
                    time: "7:00 -9:00",
                },
            ],
            draggedItem: null, // Item being dragged
            draggedFrom: null, // Tracks which table the item was dragged from
            droppedItems: [{
                id: 5, name: "Item 5",
                date: "2024-09-19",
                time: "7:00 -9:00",
            },
            {
                id: 6, name: "Item 6", date: "2024-09-17",
                time: "7:00 -9:00",
            },],  // List of dropped items in the second table
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
        // Triggered when drag starts
        dragStart(item, source) {
            this.draggedItem = item; // Store dragged item
            this.draggedFrom = source; // Store the source of the dragged item (first or second table)
        },
        // Triggered when an item is dropped
        handleDrop(destination) {
            if (this.draggedItem) {
                if (this.draggedFrom === 'first' && destination === 'second') {
                    // Move from first table to second table
                    this.droppedItems.push(this.draggedItem);
                    this.items = this.items.filter(item => item.id !== this.draggedItem.id); // Remove item from first table
                } else if (this.draggedFrom === 'second' && destination === 'first') {
                    // Move from second table to first table
                    this.items.push(this.draggedItem);
                    this.droppedItems = this.droppedItems.filter(item => item.id !== this.draggedItem.id); // Remove item from second table
                }
            }
            this.draggedItem = null; // Clear dragged item
            this.draggedFrom = null; // Clear dragged from
        },
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
        getScheduleForDate1(date) {
            const formattedDate = this.formatDate(date);
            return this.items.filter((item) => item.date === formattedDate);
        },
        getScheduleForDate2(date) {
            const formattedDate = this.formatDate(date);
            return this.droppedItems.filter((item) => item.date === formattedDate);
        },
    },
};
</script>

<style scoped>
/* me */
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
