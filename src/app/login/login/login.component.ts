import {trigger,state, style, animate,transition, keyframes} from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HandleAnimationLoginService } from 'src/app/services/handleAnimationLogin/handle-animation-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [

    trigger('loginBoxAnimation',[
      
      transition(':enter', [       
        animate('1s ease-in', keyframes([ 
          style({transform: 'translateX(-120%)'}),
          style({transform: 'translateX(-110%)'}),
          style({transform: 'translateX(-100%)'}),
          style({transform: 'translateX(15px)'}), 
          style({transform: 'translateX(0px)'}), 
        ])),
      ]),
      transition(':leave', [       
        animate('1s ease-out', keyframes([ 
          style({transform: 'translateX(0px)', opacity:1}), 
          style({transform: 'translateX(15px)',opacity:0.1}), 
          style({transform: 'translateX(-100%)',opacity:0}),
        ])),
      ]),
    ]),



  
  ]
})

export class LoginComponent implements OnInit {
  constructor(public states:HandleAnimationLoginService){

  }

  ngOnInit(): void {

    
    
  }


  leaveBoxLogin(){
    this.states.stateBoxLogin = !this.states.stateBoxLogin
    this.states.stateBoxRegister = !this.states.stateBoxRegister
  }

  




}
