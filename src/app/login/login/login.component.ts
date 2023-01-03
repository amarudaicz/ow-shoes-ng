import {trigger,state, style, animate,transition, keyframes} from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [

    trigger('loginBoxSlide',[
      transition(':leave', [       
        animate('2s ease-in', keyframes([ 
          style({transform: 'translateX(0px)', offset:0.4}), 
          style({transform: 'translateX(15px)',offset:0.8}), 
          style({transform: 'translateX(-100%)',offset:1}),
        ])),
      ])      
    ]),  
  
    trigger('', [
      state('initial', style({
        transform:'translateX(0px)',
      })),

      state('out', style({
        transform:'translateX(-100%)',
      })),

      state('commingBox', style({
        
      })),

      transition('initial => out', [
        animate('1s ease-out')
      ]),

      transition('initial => out', [
        animate('1s ease-out')
      ]),
    ])
    
  ]
})

export class LoginComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(()=>{
      this.show = false
    },2000)
  }

  show:boolean = true


 




}
