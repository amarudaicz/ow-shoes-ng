import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-products-model',
  templateUrl: './list-products-model.component.html',
  styleUrls: ['./list-products-model.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*', padding:'0 0 10px 0'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
}) 

export class ListProductsModelComponent implements OnInit {
  

  ngOnInit(){


  } 
  
  data:any[] = [
  {
    id:1,
    title: 'NIKE AIR MAX',
    price: 10000,
    stock: 15,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    id:2,
    title: 'NIKE AIR MAX EGSO',
    price: 10000,
    stock: 15,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  ]

  displayedColumns: string[] = ['id', 'title', 'price', 'stock'];
  dataSource = new MatTableDataSource(this.data);
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: any | null;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
 
