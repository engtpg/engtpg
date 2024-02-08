// ApexCharts options and config
window.addEventListener("load", function() {
    let options = {
        // set the labels option to true to show the labels on the X and Y axis
        xaxis: {
        show: true,
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
            show: true,
            style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        },
        yaxis: {
        show: true,
        labels: {
            show: true,
            style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
            formatter: function (value) {
            return  value + 'k';
            }
        }
        },
        series: [
        {
            name: "Total Transaction",
            data: [150, 141, 145, 152, 135, 125],
            color: "#1A56DB",
        },
        {
            name: "LBC",
            data: [43, 13, 65, 12, 42, 73],
            color: "#7E3BF2",
        },
        {
            name: "MDM",
            data: [22, 32, 15, 42, 32, 83],
            color: "#FE3BF2",
        },
        {
            name: "GNX1",
            data: [12, 43, 11, 40, 45, 92],
            color: "#7FFBF2",
        },
        ],
        chart: {
        sparkline: {
            enabled: false
        },
        height: "500px",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
        },
        tooltip: {
        enabled: true,
        x: {
            show: false,
        },
        },
        fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
        },
        dataLabels: {
        enabled: false,
        },
        stroke: {
        width: 6,
        },
        legend: {
        show: false
        },
        grid: {
        show: false,
        },
    }

    if (document.getElementById("labels-chart-wa") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("labels-chart-wa"), options);
        chart.render();
    }
    });

    // ApexCharts options and config
window.addEventListener("load", function() {
    let options = {
        // set the labels option to true to show the labels on the X and Y axis
        xaxis: {
        show: true,
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
            show: true,
            style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        },
        yaxis: {
        show: true,
        labels: {
            show: true,
            style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
        }
        },
        series: [
        {
            name: "Total Transaction",
            data: [1.22, 1.1, 1.345, 1.52, 1.35, 1.25],
            color: "#1A56DB",
        },
        {
            name: "GNX1",
            data: [0.23, 0.13, 0.45, 0.12, 0.42, 0.13],
            color: "#7E3BF2",
        },
        {
            name: "MDM",
            data: [0.323, 0.130, 0.045, 0.154, 0.402, 0.213],
            color: "#FE3BF2",
        },
        {
            name: "LBC",
            data: [0.123, 0.313, 0.845, 0.452, 0.452, 0.173],
            color: "#7FFBF2",
        },
        ],
        chart: {
        sparkline: {
            enabled: false
        },
        height: "500px",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
        },
        tooltip: {
        enabled: true,
        x: {
            show: false,
        },
        },
        fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
        },
        dataLabels: {
        enabled: false,
        },
        stroke: {
        width: 6,
        },
        legend: {
        show: false
        },
        grid: {
        show: false,
        },
    }

    if (document.getElementById("labels-chart-wa-proc") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("labels-chart-wa-proc"), options);
        chart.render();
    }
    });
        // ApexCharts options and config
window.addEventListener("load", function() {
    let options = {
        // set the labels option to true to show the labels on the X and Y axis
        xaxis: {
        show: true,
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
            show: true,
            style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        },
        yaxis: {
        show: true,
        labels: {
            show: true,
            style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
        }
        },
        series: [
        {
            name: "CPU",
            data: [10, 11, 12, 11, 12, 11],
            color: "#1A56DB",
        },
        {
            name: "Memory",
            data: [35, 27, 33, 37, 34, 29],
            color: "#7E3BF2",
        },
        {
            name: "disk '/'",
            data: [45.7, 44.9, 40.8, 42.154, 49.402, 50.213],
            color: "#FE3BF2",
        },
        {
            name: "disk '/san01'",
            data: [60.25, 62.313, 61.845, 63.452, 65.452, 60.173],
            color: "#7FFBF2",
        },
        {
            name: "disk '/san02'",
            data: [7.25, 6.313, 6.845, 6.452, 5.452, 6.173],
            color: "#7F25F2",
        },
        ],
        chart: {
        sparkline: {
            enabled: false
        },
        height: "500px",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
        },
        tooltip: {
        enabled: true,
        x: {
            show: false,
        },
        },
        fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
        },
        dataLabels: {
        enabled: false,
        },
        stroke: {
        width: 6,
        },
        legend: {
        show: false
        },
        grid: {
        show: false,
        },
    }

    if (document.getElementById("labels-chart-util-srv") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("labels-chart-util-srv"), options);
        chart.render();
    }
    });
    // ApexCharts options and config
window.addEventListener("load", function() {
    let options = {
        // set the labels option to true to show the labels on the X and Y axis
        xaxis: {
        show: true,
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
        labels: {
            show: true,
            style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        },
        yaxis: {
        show: true,
        labels: {
            show: true,
            style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
        }
        },
        series: [
        {
            name: "CPU",
            data: [10, 11, 12, 11, 12, 11],
            color: "#1A56DB",
        },
        {
            name: "Memory",
            data: [35, 27, 33, 37, 34, 29],
            color: "#7E3BF2",
        },
        {
            name: "disk '/'",
            data: [45.7, 44.9, 40.8, 42.154, 49.402, 50.213],
            color: "#FE3BF2",
        },
        {
            name: "disk '/san01'",
            data: [60.25, 62.313, 61.845, 63.452, 65.452, 60.173],
            color: "#7FFBF2",
        },
        {
            name: "disk '/san02'",
            data: [7.25, 6.313, 6.845, 6.452, 5.452, 6.173],
            color: "#7F25F2",
        },
        ],
        chart: {
        sparkline: {
            enabled: false
        },
        height: "500px",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
        },
        tooltip: {
        enabled: true,
        x: {
            show: false,
        },
        },
        fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
        },
        dataLabels: {
        enabled: false,
        },
        stroke: {
        width: 6,
        },
        legend: {
        show: false
        },
        grid: {
        show: false,
        },
    }

    if (document.getElementById("labels-chart-util-ha") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("labels-chart-util-ha"), options);
        chart.render();
    }
    });