import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Chart, { Legend } from 'chart.js/auto'; //fro chart.js
import * as echarts from 'echarts'; // for ECharts
import * as Highcharts from 'highcharts'; // for Highcharts
import { DataService } from '../services/dataService';
@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts implements AfterViewInit {
  // data = {
  //   labels: ['apple', 'banana', 'orange', 'berries', 'cherries'],
  //   values: [10, 20, 50, 40, 30],
  // };

  data:number[]=[];
  labels: string[] = [];
  constructor(private dataService: DataService) {
    // Fetch data from the service
    this.data = this.dataService.data.values;
    this.labels=this.dataService.data.labels;
  }

  // Initialize Chart.js
  ngAfterViewInit() {
    this.initChartJS();
    this.initECharts();
    this.initHighCharts();
  }

  // Initialize Chartjs
  initChartJS() {
    const ctx = document.getElementById('chartjs') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Fruits count',
            data: this.data,
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(12, 255, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Fruit Consumption',
            font: {
              size: 16,
            },
          },
        },

        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Quantity',
              font: {
                size: 14,
              },
            },
            ticks: {
              stepSize: 10, // Set step size for y-axis ticks
            },
          },
          x: {
            title: {
              display: true,
              text: 'Fruits',
              font: {
                size: 16,
              },
              color: '#333333',
            },
          },
        },
      },
    });
  }

  // Initialize ECharts
  initECharts() {
    // Initialize the echarts instance based on the prepared dom
    const myChart = echarts.init(
      document.getElementById('echart') as HTMLDivElement
    );

    // Specify the configuration items and data for the chart
    const option = {
      title: {
        text: 'Fruit Consumption',
        left: 'center',
        top: 10,
        textStyle: { fontSize: 22, fontWeight: 700, color: '#23263b' }
      },
      tooltip: { trigger: 'axis' },
      legend: {
        data: ['Fruits Count'],
        top: 40,
        left: 'center',
        textStyle: { fontSize: 16, color: '#23263b' }
      },
      grid: { left: 50, right: 30, bottom: 50, top: 80 },
      xAxis: {
        data: this.labels,
        name: 'Fruits',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: { fontSize: 16, color: '#23263b' },
        axisLabel: { interval: 0, rotate: 0, fontSize: 14, color: '#23263b' }
      },
      yAxis: {
        name: 'Quantity',
        nameTextStyle: { fontSize: 16, color: '#23263b' },
        axisLabel: { color: '#23263b' }
      },
      series: [{
        name: 'Fruits Count',
        type: 'bar',
        data: this.data,
        itemStyle: {
          borderRadius: [12, 12, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#42a5f5' },
            { offset: 1, color: '#1976d2' }
          ])
        },
        label: {
          show: true,
          position: 'top',
          fontSize: 14,
          color: '#23263b'
        }
      }]
    };

    // Display the chart using the configuration items and data just specified.
    myChart.setOption(option);
  }

  initHighCharts() {
    Highcharts.chart('highchart', {
      chart: { type: 'column' },
      title: { text: 'Fruit Consumption' },
      xAxis: {
        categories: this.labels,
        title: { text: 'Fruits', style: { fontSize: '16px' } },
        labels: { 
          style: { fontSize: '14px' },
          rotation:0
        },
      },
      yAxis: {
        title: { text: 'Quantity', style: { fontSize: '16px' } },
        labels: { style: { fontSize: '14px' } },
      },
      series: [
        {
          //i wan tto have this serires name writtern on top
          type: 'column',
          name: 'Fruit Count',
          data: this.data,
        },
      ],
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            style: { fontSize: '14px' },
          },
        },
      },
    });
  }
}

//gcp