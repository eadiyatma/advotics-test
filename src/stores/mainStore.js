import { defineStore, acceptHMRUpdate } from 'pinia'


export const useMainStore = defineStore('main', {
    state: () => ({
        counter: 0,
        nett: [
            {
                name: 'Nett',
                value: 1000000,
                date: '01/01/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1200000,
                date: '01/02/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1300000,
                date: '01/03/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1300000,
                date: '01/04/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1500000,
                date: '01/05/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1000000,
                date: '06/01/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1200000,
                date: '06/02/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1300000,
                date: '06/03/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1300000,
                date: '06/04/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1500000,
                date: '06/05/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1000000,
                date: '07/01/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1200000,
                date: '07/02/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1300000,
                date: '07/03/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1300000,
                date: '07/04/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1500000,
                date: '07/05/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1000000,
                date: '06/01/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1200000,
                date: '06/02/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1300000,
                date: '06/03/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1300000,
                date: '06/04/2022 GMT'
            },
            {
                name: 'Nett',
                value: 1500000,
                date: '06/05/2022 GMT'
            },
        ],
        gross: [
            {
                name: 'Gross',
                value: 1000000,
                date: '01/01/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1200000,
                date: '01/02/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1300000,
                date: '01/03/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1300000,
                date: '01/04/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1500000,
                date: '01/05/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1000000,
                date: '06/01/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1200000,
                date: '06/02/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1300000,
                date: '06/03/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1300000,
                date: '06/04/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1500000,
                date: '06/05/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1000000,
                date: '07/01/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1200000,
                date: '07/02/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1300000,
                date: '07/03/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1300000,
                date: '07/04/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1500000,
                date: '07/05/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1000000,
                date: '06/01/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1200000,
                date: '06/02/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1300000,
                date: '06/03/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1300000,
                date: '06/04/2022 GMT'
            },
            {
                name: 'Gross',
                value: 1500000,
                date: '06/05/2022 GMT'
            },
        ],
        apv: [
            {
                name: 'Average Purchase Value',
                value: 1000000,
                date: '01/01/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1200000,
                date: '01/02/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1300000,
                date: '01/03/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1300000,
                date: '01/04/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1500000,
                date: '01/05/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1000000,
                date: '06/01/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1200000,
                date: '06/02/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1300000,
                date: '06/03/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1300000,
                date: '06/04/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1500000,
                date: '06/05/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1000000,
                date: '07/01/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1200000,
                date: '07/02/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1300000,
                date: '07/03/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1300000,
                date: '07/04/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1500000,
                date: '07/05/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1000000,
                date: '06/01/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1200000,
                date: '06/02/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1300000,
                date: '06/03/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1300000,
                date: '06/04/2022 GMT'
            },
            {
                name: 'Average Purchase Value',
                value: 1500000,
                date: '06/05/2022 GMT'
            },
        ],
        upt: [
            {
                name: 'Unit per Transaction',
                value: 1000000,
                date: '01/01/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1200000,
                date: '01/02/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1300000,
                date: '01/03/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1300000,
                date: '01/04/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1500000,
                date: '01/05/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1000000,
                date: '06/01/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1200000,
                date: '06/02/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1300000,
                date: '06/03/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1300000,
                date: '06/04/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1500000,
                date: '06/05/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1000000,
                date: '07/01/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1200000,
                date: '07/02/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1300000,
                date: '07/03/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1300000,
                date: '07/04/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1500000,
                date: '07/05/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1000000,
                date: '06/01/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1200000,
                date: '06/02/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1300000,
                date: '06/03/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1300000,
                date: '06/04/2022 GMT'
            },
            {
                name: 'Unit per Transaction',
                value: 1500000,
                date: '06/05/2022 GMT'
            },
        ],
        series: [{
            name: "Nett",
            data: [44, 55, 41, 67, 22, 43],
        },
        {
            name: "Gross",
            data: [13, 23, 20, 8, 13, 27],
        },
        {
            name: "Average Purchase Value",
            data: [11, 17, 15, 15, 21, 14],
        },
        {
            name: "Unit per Transaction",
            data: [21, 7, 25, 13, 22, 8],
        },],
        chartOptions: {
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: true,
                },
                foreColor: "#373d3f",
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            //   offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "01/01/2011 GMT",
                    "01/02/2011 GMT",
                    "01/03/2011 GMT",
                    "01/04/2011 GMT",
                    "01/05/2011 GMT",
                    "01/06/2011 GMT",
                ],
            },
            legend: {
                position: "bottom",
                // offsetY: 40,
            },
            fill: {
                opacity: 1,
            },
            colors: ["#37B04C", "#289E45", "#7AE28C", "#707070"],
        },
        bestSelling: [
            {
                name: 'Danone Milk',
                price: 1000000,
                sold: 100,
            },
            {
                name: 'Danone Milk',
                price: 1000000,
                sold: 130,
            },
            {
                name: 'Danone Milk',
                price: 1000000,
                sold: 120,
            },
            {
                name: 'Danone Milk',
                price: 1000000,
                sold: 180,
            },
            {
                name: 'Danone Milk',
                price: 1000000,
                sold: 190,
            },
        ],
        competitorSelling: [
            {
                name: 'Silk Coconut Milk',
                price: 1000000,
                sold: 100,
            },
            {
                name: 'Silk Coconut Milk',
                price: 1000000,
                sold: 130,
            },
            {
                name: 'Silk Coconut Milk',
                price: 1000000,
                sold: 120,
            },
            {
                name: 'Silk Coconut Milk',
                price: 1000000,
                sold: 180,
            },
            {
                name: 'Silk Coconut Milk',
                price: 1000000,
                sold: 190,
            },
        ],
    }
    ),
    getters: {
        doubleCount: (state) => state.counter * 2,
        newSeries: (state) => {

        }
    },
    actions: {
        increment() {
            this.counter++
        }
    }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}