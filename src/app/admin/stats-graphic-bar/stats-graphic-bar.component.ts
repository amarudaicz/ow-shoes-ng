import { Component, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-stats-graphic-bar',
  templateUrl: './stats-graphic-bar.component.html',
  styleUrls: ['./stats-graphic-bar.component.scss']
})
export class StatsGraphicBarComponent {

  public barChartData:ChartConfiguration<'bar'>['data'] = {
    
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
        
        backgroundColor:'#738cf2b8',
        borderColor:'#38488b',
        borderWidth: 1,
        label:'Balance',
        minBarLength: 5,
        data: [ 1500, 1700, 2000, 2600, 2250, 4300, 3200, 4250, 4500, 5100, 3000, 5300  ],
      }

    ]
  }



  public barChartOptions:ChartOptions<'bar'> = {

    responsive: false,
    scales:{
      y:{
        beginAtZero:true
      }
    },
    plugins:{
      title:{
        display:true,
        text:'Balance en pesos'
      }
    }

  }

}
