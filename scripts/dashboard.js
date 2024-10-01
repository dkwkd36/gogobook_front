const ctx = document.getElementById('categoryChart');
const weekCtx = document.getElementById('weekChart');
const customerCtx = document.getElementById('customerChart');
const weekLabels = ['금', '토', '일', '월', '화', '수', '목'];
const data = {
    labels: [
      '문학',
      'IT',
      '경제',
      '자기계발',
    ],
    datasets: [{
      label: '판매량',
      data: [300, 50, 100, 150],
      backgroundColor: [
        '#02b4a9',
        '#3bc5a2',
        '#68d596',
        '#96e488',
      ],
      hoverOffset: 4
    }],
  };

  const weekData = {
      labels: weekLabels,
      datasets: [{
        label: '매출액',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    const customerData = {
      labels: weekLabels,
      datasets: [{
        label: '신규 회원 수',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
        tension: 0.1
      }]
    };


  new Chart(ctx, {
    type: 'doughnut',
    data: data,
  });


  
  
    new Chart(weekCtx, {
      type: 'bar',
      data: weekData,
      options: {
        scales: {
          x: {
            beginAtZero: true,
              scaleLineColor: 'red',
                grid: {
                  color: 'transparent',
                },
             },
           y: {
             beginAtZero: true,
               grid: {
                 color: 'transparent',
               },
           }
        }
      },
    });
  
  new Chart(customerCtx, {
    type: 'line',
    data: customerData,
    options: {
      scales: {
        x: {
          beginAtZero: true,
            scaleLineColor: 'red',
              grid: {
                color: 'transparent',
              },
           },
         y: {
           beginAtZero: true,
             grid: {
               color: 'transparent',
             },
         }
      }
    },
  });