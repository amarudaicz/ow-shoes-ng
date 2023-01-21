import { Component } from '@angular/core';
import {data} from './dataStats'

@Component({
  selector: 'app-cards-stats',
  templateUrl: './cards-stats.component.html',
  styleUrls: ['./cards-stats.component.scss']
})


export class CardsStatsComponent {
  
  constructor() {
    Object.assign(this, { data });
    
  }

  cards:{stats:number, title:string, color:string}[] = [
    { 
      stats:15,
      title:'Ventas Semanales',
      color:'#738cf2',
    },
    { 
      stats:125,
      title:'Ventas Mensuales',
      color:'#87e29d',
    },
    { 
      stats:20,
      title:'Nuevos Usuarios',
      color:'#fffe76',
    },
    { 
      stats:8,
      title:'Productos OutStock',
      color:'#fd9898',
    }
  ]







}
