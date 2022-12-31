import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemCartStorage } from 'src/app/interfaces/itemCartStorage.interface';

@Component({
  selector: 'app-modal-buy-product',
  templateUrl: './modal-buy-product.component.html',
  styleUrls: ['./modal-buy-product.component.scss']
})

export class ModalBuyProductComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalBuyProductComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

} 
  