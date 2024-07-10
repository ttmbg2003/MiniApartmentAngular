import { Component } from '@angular/core';
import { TenantService } from './tenant-service.service';
import { Tenant } from '../model/tenant';
import { SidebarComponent } from "../components/sidebar/sidebar.component";
const logo = require('../components/icons/TenantIcon.png').default as string;
@Component({
  selector: 'app-tenant',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.css'
})
export default class TenantComponent { 
  logo = logo;
  constructor(private service:TenantService){}
  ngOnInit(): void {
    console.log("aaaaaaaaa");
    this.service.getData().subscribe(console.log);
  }
}
