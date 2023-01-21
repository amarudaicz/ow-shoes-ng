import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-stats-graphic',
  templateUrl: './stats-graphic.component.html',
  styleUrls: ['./stats-graphic.component.scss']
})
export class StatsGraphicComponent implements OnInit {
  constructor() { }

  ngOnInit(){
    this.randomNumbers()
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],

    datasets: [
      {
        data: [ 8, 15, 20, 25, 22, 40, 34, 50, 52, 60, 38, 86  ],
        label: 'Ventas',
        fill: true,
        tension: 0,
        borderColor: '#738cf2',
        backgroundColor: '#00000000'
      },

      {
        data: [ 5, 3, 6, 10, 13, 15, 19, 10, 13, 20, 26, 34  ],
        label: 'Usuarios Registrados',
        fill: false,
        tension: 0,
        borderColor: '#fd9898',
        backgroundColor: '#00000000'
      },
    ],
    
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    interaction:{
      mode:'x',
    },
      plugins:{
      title:{
        display:true,
        text:'Estadisticas del sitio'
      }
    }

  };


  private randomNumbers(){
    const numbers:number[] = []

    for (let i = 0; i < 12; i++) {
      let random = Math.floor((Math.random() * (150 - 1 + 1)) + 1);
      numbers.push(random)
    }
  
    return numbers
  
  }

}

