import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-lead-actor',
  templateUrl: './lead-actor.component.html',
  styleUrls: ['./lead-actor.component.css']
})
export class LeadActorComponent implements OnInit {

  constructor(private service : AdminService) { }

  ngOnInit(): void {
  }

  slead:string="";
  admin:any;

  searchDataByLead(){
    this.service.searchByLead(this.slead)
    .subscribe(
      response => {
        this.admin=response;
        console.log(response);
      }
    );
  }

}
