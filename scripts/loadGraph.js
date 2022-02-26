var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [200,2000,1500,2500,5000,1000,1000,3000,4500,5500],
      borderColor: "#DFE0EB",
      fill: false
    }, { 
      data: [500,3000,2500,3500,6000,2000,1500,4000,5500,6500],
      borderColor: "#3751FF",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});