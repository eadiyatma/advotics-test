import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
    state: () => ({
        date: {
            start: new Date().setDate(new Date().getDate() - 7),
            end: new Date()
        },
        maxDate: new Date().setDate(new Date().getDate()),
        minDate: new Date().setDate(new Date().getDate() - 180),
        endDate: new Date().setDate(new Date().getDate() - 7),
        startDate: new Date(),
    }),
    actions: {
        newDate(start, end) {
            this.date = {
                start: start,
                end: end,
            }
        }
    }
});