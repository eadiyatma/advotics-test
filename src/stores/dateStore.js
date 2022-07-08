import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
    state: () => ({
        /**
         * ini mulai dari tanggal sekarang sampai kebelakang
         * jadi start tanggal sekarang end tanggal berakhir
         */
        date: {
            start: new Date(),
            end: new Date().setDate(new Date().getDate() - 7)
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