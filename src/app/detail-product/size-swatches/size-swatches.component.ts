import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { hostUrl } from 'src/app/app.component';
import { restService } from '../../services/restService/rest-service.service';

@Component({
  selector: 'app-size-swatches',
  templateUrl: './size-swatches.component.html',
  styleUrls: ['./size-swatches.component.scss'],
})
export class SizeSwatchesComponent implements OnInit {
  constructor(private rest: restService) {}

  ngOnInit() {

  }

  


  @Input() dataProduct: any;
  @Input() swatchColor?: object | any;
  @Input() idProduct?: string;
  @Input() sizeSwatches: any;

  public sizeSwatch?: object | any;
  public sizeId: string | any;
  @Output() public swatchSizeEmitter = new EventEmitter<object>();

  public sendSizeSwatch(swatch: object | any) {
    this.sizeSwatch = swatch;
    this.sizeId = swatch.size_id;
    this.swatchSizeEmitter.emit(swatch);
    console.log(this.sizeId)
  }
}
