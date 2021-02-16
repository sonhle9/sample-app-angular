import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Angular Tutorial - 25 - Route Parameters Get ID

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.scss']
})
export class UsersShowComponent implements OnInit {

  public users = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Brandon", "age": 25},
    {"id": 3, "name": "Christina", "age": 26},
    {"id": 4, "name": "Elena", "age": 28},
    {"id": 5, "name": "Felicia", "age": 25}    
  ]
  public errorMsg = []
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
    private router: Router
  ) {}
  public userId:any;
  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || "");
      this.userId = id;
      console.log(params)
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
  goPrevious() {
    let previousId = this.userId - 1;
    this.router.navigate(['/users', previousId]);
  }
  goNext() {
    let nextId = this.userId + 1;
    this.router.navigate(['/users', nextId]);
  }

  gotoUsers() {
    let selectedId = this.userId ? this.userId : null;
    //this.router.navigate(['/users', {id: selectedId}]);   
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
}
