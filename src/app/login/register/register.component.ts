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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { hostUrl } from 'src/app/app.component';

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
  constructor(public statesBox: HandleAnimationLoginService, private formBuilder:FormBuilder, private http:HttpClient) {
    
    this.dataForm = this.formBuilder.group({
      name:['', [Validators.required]],
      email:['', [Validators.email, Validators.required]],
      age:['',[Validators.required]],
      password:['',[Validators.minLength(8), Validators.required]]
    })
  
  }


  ngOnInit(): void {}


  public dataForm:FormGroup;
  public hidePassword:boolean = true
  public registerState?:{state:boolean, msg:string};
  public loader:boolean=false

  public sendDataForm(): void{
    const formState:boolean = this.dataForm.invalid
    if (formState) return this.dataForm.markAllAsTouched();
    this.loader = true
   
    this.http.post(hostUrl + '/login/register' , this.dataForm.value).subscribe((res:any) =>{

      this.loader = false
      
      if (res.errors){
        this.registerState = {
          state:false,
          msg:res.errors  
        }

        console.log(this.registerState);
        return
      } 
      
      this.registerState = {
        state:true,
        msg:'Cuenta creada con exito'
      }

      setTimeout(() => {
        this.statesBox.stateBoxLogin=true
        this.statesBox.stateBoxRegister=false
      }, 2500);






    })


  }

  processInput(input:string){
    return this.dataForm.controls[input].errors && this.dataForm.controls[input].touched
  }



  leaveBoxRegister() {
    this.statesBox.stateBoxRegister = !this.statesBox.stateBoxRegister;
    this.statesBox.stateBoxLogin = !this.statesBox.stateBoxLogin;
  }

}
