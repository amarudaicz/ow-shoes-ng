import { Component, Input, OnInit, ChangeDetectionStrategy,SimpleChanges, OnChanges, EventEmitter, Output} from '@angular/core';
import { hostUrl } from 'src/app/app.component';
import { restService } from '../../services/restService/rest-service.service';

@Component({
  selector: 'app-size-swatches',
  templateUrl: './size-swatches.component.html',
  styleUrls: ['./size-swatches.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,


})
export class SizeSwatchesComponent implements OnInit, OnChanges {
  constructor(private rest:restService) {} 
  
  ngOnInit(){
    this.getSwatches() 
    
  }

  ngOnChanges(changes: SimpleChanges){

    
    this.getSwatches()
    if (!changes['swatchColor'].firstChange) {
      console.log(this.swatchColor);
      
    }
  }

  @Input() dataProduct:any
  @Input() swatchColor?:object|any
  @Input() idProduct?:string
  public sizeSwatches:any
  public sizeSwatch?:object|any;
  public sizeId:string|any;
  @Output() public swatchSizeEmitter = new EventEmitter<object>()
  private getSwatches(){
    
      this.rest.get(`${hostUrl}/products/get-variants-bycolor?id=${this.idProduct}&color_id=${this.swatchColor.id}`)
      .subscribe(res => {
        this.sizeSwatches = res  
        console.log('EJECUTANDOO FETCH');
        console.log(res);
        
      })
  }

  public sendSizeSwatch(swatch:object|any){
    this.sizeSwatch = swatch 
    this.sizeId = String(swatch.id)
    this.swatchSizeEmitter.emit(swatch)    
    console.log(this.sizeId);
    
    
  }

}
