import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
    state: () => ({
        date: {
            start: new Date(),
            end: new Date().setDate(new Date().getDate() - 7)
        },
        maxDate: new Date().setDate(new Date().getDate() - 1),
        minDate: new Date().setDate(new Date().getDate() - 180),
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