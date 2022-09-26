import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service : AdminService) { }

  ngOnInit(): void {
  }

  daid: number=0;
  dtexting =false;


  // dfunction(){
  //   let dtext = this.dtexting;
  //   let document:any.getElementById("deleted")?.innerHTML="deleted";
  // }

  deleteDataByAid(){
    this.service.deleteByAid(this.daid);
    
  }


}
