import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-buy-product',
  templateUrl: './modal-buy-product.component.html',
  styleUrls: ['./modal-buy-product.component.scss']
})

export class ModalBuyProductComponent {

  constructor(
    public dialogRef: MatDialogRef<Component>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

}
  