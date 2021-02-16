import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-pages-home',
  templateUrl: './static-pages-home.component.html',
  styleUrls: ['./static-pages-home.component.scss']
})
export class StaticPagesHomeComponent implements OnInit {

  public color = "red";
  public colors = ["red","blue","green","yellow"]
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
