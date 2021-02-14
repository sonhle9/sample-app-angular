import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts-header',
  templateUrl: './layouts-header.component.html',
  styleUrls: ['./layouts-header.component.scss']
})
export class LayoutsHeaderComponent implements OnInit {

  public loading = true;
  public displayName = true;

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(){
    console.log("log out")
  }

}
