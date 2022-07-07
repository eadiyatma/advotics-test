import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
    state: () => ({
        date: {
            start: new Date(),
            end: new Date().setDate(new Date().getDate() - 7)
        },
    }),
});