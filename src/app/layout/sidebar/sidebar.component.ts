import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
username="EducaVR";
user:string;
grade:string;
  constructor() { }

  ngOnInit(): void {

    if(localStorage.length==0)
    window.location.replace("../");
    this.user="users"
    this.grade=localStorage.getItem("grade");
  }


}
