import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.scss']
})
export class UsersShowComponent implements OnInit {

  public name = "Codevolution";
  public url = window.location.href;
  public successClass = "text-success";
  public hasError = false
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  greetUser(){
    return "Hello " + this.name;
  }
  onClick(event:any){
    console.log(event)
    this.greeting = event.type;
  }
  logMessage(value:any){
    console.log(value)
  }
}
