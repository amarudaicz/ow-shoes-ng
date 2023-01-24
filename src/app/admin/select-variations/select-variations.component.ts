import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { hostUrl } from 'src/app/app.component';

@Component({
  selector: 'app-select-variations',
  templateUrl: './select-variations.component.html',
  styleUrls: ['./select-variations.component.scss']
})
export class SelectVariationsComponent implements OnInit {

  constructor(private http:HttpClient, private toast:MatSnackBar) { }

  ngOnInit() {
    const tables = ['sizes_guide', 'colors_guide']
    
    tables.forEach(e =>{
      this.http.get(hostUrl + '/admin/get-guide-values/' + e).subscribe((res:any)=>{
        if (e === 'sizes_guide') {
          this.sizeVariations = res
        }else{
          this.colorVariations = res
        }
      })
    })



  }

  @Input() id:any
  
  sizeVariations:any[] = [] //HACER PETICION DE LA GUIA DE TALLES Y PONER LOS VALORES REALES
  colorVariations:any[] = []
  sizeVariationsSelect:any[] = []
  colorVariationsSelect:any[] = []
  buttonDisabled:boolean = false
  
  public addChipValue(event:any){
    const value = event.target.id
    event.target.classList.toggle('chip-selected')
    console.log(event.target)
     if (event.target.classList.contains('color-chip')) {      
       if (this.colorVariationsSelect.some(e => e === value)){
         const newVariations = this.colorVariationsSelect.filter(e => e !== value)
         this.colorVariationsSelect = newVariations
         return 
       }

       this.colorVariationsSelect.push(value)
       console.log(this.colorVariationsSelect);
       return
     }


    if (this.sizeVariationsSelect.some(e => e === value)){
      const newVariations = this.sizeVariationsSelect.filter(e => e !== value)
      this.sizeVariationsSelect = newVariations
      return 
    }
    
    this.sizeVariationsSelect.push(value)
    console.log(this.sizeVariationsSelect);
  }


  sendData(){
    this.buttonDisabled = true
    console.log({sizeId:this.sizeVariationsSelect, valueColors:this.colorVariationsSelect, product_id:this.id});

    const data = {valueSizes:this.sizeVariationsSelect, valueColors:this.colorVariationsSelect, product_id:this.id}

    const configToast:MatSnackBarConfig = {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration:3000,
      panelClass:['toast'],
    }

    this.http.post(hostUrl + '/admin/insert-variations', data).subscribe((res:any)=>{
      if (res.succes){
        this.toast.open(res.succes, undefined, configToast )
        this.buttonDisabled = false
        return
      }
      
      this.toast.open('A ocurrido un error', undefined, configToast)
    })
  }
}
 