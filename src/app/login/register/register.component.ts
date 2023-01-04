import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

import { HandleAnimationLoginService } from 'src/app/services/handleAnimationLogin/handle-animation-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

  animations: [
    trigger('registerBoxAnimation', [
      transition(':enter', [
        animate(
          '2s ease-in',
          keyframes([
            style({ transform: 'translateY(180%)'}),
            style({ transform: 'translateY(-5px)'}),
            style({ transform: 'translateY(0%)'}),
          ]),
          ),
      ]),
      transition(':leave', [
        animate(
          '1s ease-out',
          keyframes([
            style({ transform: 'translateY(-100%)',opacity:1}),
            style({ transform: 'translateY(-101%)',opacity:0.1}),
            style({ transform: 'translateY(0%)',opacity:0}),
          ])   
        ),
      ]),
    ]),

    trigger('slideBoxRegister', [
      state(
        'in', 
        style({
          transform: 'translateY(-100%)',
         
        })
      ),

      state(
        'out',
        style({
          transform: 'translateY(0%)',
        })
      ),

      transition('in => out', [animate('3s')]),

      transition('out => in', [animate('3s')]),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  constructor(public states: HandleAnimationLoginService) {}
  ngOnInit(): void {}

  leaveBoxRegister() {
    this.states.stateBoxRegister = !this.states.stateBoxRegister;
    this.states.stateBoxLogin = !this.states.stateBoxLogin;
  }
}
