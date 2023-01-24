import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import {Subscription, Observable} from 'rxjs'
import { hostUrl } from 'src/app/app.component';

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

  constructor(private http:HttpClient){
    
  }

  ngOnInit(){
    
    this.http.get(hostUrl + '/products/get-all-products').subscribe((res:any)=>{
      console.log(res);
      this.data = res
      const dataTable = new MatTableDataSource(this.data);
      this.dataSource = dataTable;
    })

    
    
  }
  
  data:any;
  dataSource:any
  

  displayedColumns: string[] = ['id', 'title', 'price', 'subtitle'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: any | null;

  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
 
}
 
