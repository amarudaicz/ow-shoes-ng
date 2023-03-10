import {trigger,state, style, animate,transition, keyframes} from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HandleAnimationLoginService } from 'src/app/services/handleAnimationLogin/handle-animation-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { hostUrl } from 'src/app/app.component';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage-service.service';

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

  
  constructor(public statesBox:HandleAnimationLoginService, private formBuilder: FormBuilder, private http:HttpClient, private storage:LocalStorageService, private route:Router) {

    this.dataForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
    
  } 
  
  ngOnInit(): void {
    
    
  } 
  
  public dataForm:FormGroup;
  public loader:boolean = false;
  public loginState?:string;
  public hidePassword:boolean = true  

  leaveBoxLogin(){
    this.statesBox.stateBoxLogin = !this.statesBox.stateBoxLogin
    this.statesBox.stateBoxRegister = !this.statesBox.stateBoxRegister
  }

  sendDataForm(){
    console.log(this.dataForm);
    const formState:boolean = this.dataForm.invalid

    if (formState) return this.dataForm.markAllAsTouched();
    
  
      this.loader = true
      
      this.http.post(hostUrl + '/login/go', this.dataForm.value).subscribe((res:any)=>{
        //MANDAR EL USER POR EL BODY
        //PETICION QUE BUSCA EL USER Y COMPARA CONTRASE??AS
        //DEVUELVE EL TOKEN JWT Y LO TENGO QUE GUARDAR En LOCALSTORAGE
        if (res.errors){
          this.loader = false
          this.loginState = res.errors
          console.log(this.loginState);
          return
        }
        
        const payload = {
          name:res.name,
          role:res.role
        }
        
        this.storage.setMoreItems(
          [{name:'tkow', value:res.token}, 
          {name:'user', value:payload}]
        )

        this.route.navigate(['/'])
        

      })

      setTimeout(() => {
      }, 3000);

    }
      


  processInput(input:string){
    return this.dataForm.controls[input].errors && this.dataForm.controls[input].touched
  }


}
