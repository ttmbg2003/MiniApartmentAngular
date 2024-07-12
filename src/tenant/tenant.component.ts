import { Component, OnInit } from '@angular/core';
import { TenantService } from './tenant-service.service';
import { Tenant } from '../model/tenant';
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import {CommonModule} from '@angular/common';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tenant',
  standalone: true,
  imports: [SidebarComponent, CommonModule ],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.css'
})
export default class TenantComponent implements  OnInit {
  source:Tenant[]=[];
  totalElements: number = 0;  
  totalPage: any;  
  constructor(private service:TenantService){
  }
  ngOnInit(): void {
    this.getTenant(1,1);
  }
  
  private getTenant(page:number, size:number): void {
    this.service.getData(page,size).subscribe(data => {
      this.source = data['result']['content'];
      this.totalElements = data['totalElements'];
      this.totalPage = data['totalPages'];
      console.log("Data received: ", this.source);
      console.log(this.totalPage);
      
    }, error => {
      console.error("Error retrieving data: ", error);
    });
  }
//   nextPage(event: PageEvent) {
//     ;
//     request['pageNo'] = event.pageIndex.toString();
//     request['pageSize'] = event.pageSize.toString();
//     this.getTenant(request);
// }

  // loadData(): void {
  //   this.service.getData().subscribe(data => {
  //     this.source.localdata = data;
  //     this.updateGridSource();
  //     console.log("Data received: ", this.source);
  //   }, error => {
  //     console.error("Error retrieving data: ", error);
  //   });
  // }
  // updateGridSource(): void {
  //   const gridComponent = document.querySelector('jqxDataTable') as any;
  //   if (gridComponent) {
  //     gridComponent.updateBoundData;
  //   }
  // }
}
