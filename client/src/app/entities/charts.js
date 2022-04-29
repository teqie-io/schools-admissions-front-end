export const chartsData = {
  options: {
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    stroke: {
      width: [0, 2, 3],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 5
      }
    },
    fill: {
      type: 'area',
      opacity: [1, 0.25, 0.85],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'category'
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      width: 700
    },
    grid: {
      show: true,
      borderColor: '#F9F6EE'
    },
    yaxis: {
      show: true,
      min: 0,
      max: 100,
      logBase: 0,
      tickAmount: 5,
      axisBorder: {
        show: false
      },
      crosshairs: {
        show: false,
        position: 'back',
        stroke: {
          color: '#b6b6b6',
          width: 1,
          dashArray: 0
        }
      }
    },
    chart: {
      toolbar: {
        show: false
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0)
          }
          return y
        }
      }
    }
  }
}

export const series = {
  series2021: [
    {
      name: 'Enquiries',
      type: 'column',
      data: [80, 0, 47, 0, 38, 0, 50, 0, 98, 0, 73, 0],
      color: '#008060'
    },
    {
      name: 'Conversion',
      type: 'area',
      data: [25, 30, 40, 40, 50, 45, 45, 50, 50, 55, 55, 50],
      color: '#FFC107'
    },
    {
      name: 'Enrolment',
      type: 'line',
      data: [35, 40, 50, 53, 63, 65, 55, 57, 60, 63, 58, 60],
      color: '#2E72D2'
    }
  ],
  series2020: [
    {
      name: 'Enquiries',
      type: 'column',
      data: [60, 0, 47, 0, 28, 0, 70, 0, 58, 0, 63, 0],
      color: '#008060'
    },
    {
      name: 'Conversion',
      type: 'area',
      data: [15, 20, 30, 45, 45, 60, 60, 50, 50, 55, 60, 60],
      color: '#FFC107'
    },
    {
      name: 'Enrolment',
      type: 'line',
      data: [45, 42, 53, 54, 60, 65, 77, 73, 62, 64, 68, 64],
      color: '#2E72D2'
    }
  ],
  series2019: [
    {
      name: 'Enquiries',
      type: 'column',
      data: [50, 0, 47, 0, 48, 0, 54, 0, 28, 0, 73, 0],
      color: '#008060'
    },
    {
      name: 'Conversion',
      type: 'area',
      data: [32, 43, 52, 52, 62, 57, 57, 62, 62, 67, 67, 62],
      color: '#FFC107'
    },
    {
      name: 'Enrolment',
      type: 'line',
      data: [45, 50, 60, 63, 73, 75, 65, 67, 70, 73, 70, 70],
      color: '#2E72D2'
    }
  ]
}
