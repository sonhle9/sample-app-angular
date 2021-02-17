import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.scss']
})
export class UsersIndexComponent implements OnInit {

  // users:any[] = []
  // public errorMsg = []
  // constructor(private userService: UserService) { }

  constructor() { }

  ngOnInit() {
  }

  // ngOnInit() {
  //   this.getUsers();
  //   console.log(this.users);
  // }

  // getUsers(): void {
  //   this.userService.getUsers()
  //       .subscribe(users => this.users = users,
  //                  error => this.errorMsg = error);;
  // }

  // removeUser = (index:any, userid:any) => {
  //   let sure = window.confirm("Are you sure?");
  //   if (sure === true) {
  //     console.log("remove User index:"+index+" id:"+userid);
  //     // axios
  //     //   .delete(
  //     //     'https://railstutorialapi.herokuapp.com/api/users/'+userid, { withCredentials: true }
  //     //   )
  //     //   .then(response => {
  //     //     if (response.data.flash) {
  //     //       const newUsers = [...users];
  //     //       newUsers.splice(index, 1);
  //     //       setUsers(newUsers);
  //     //       flashMessage(...response.data.flash);
  //     //     }
  //     //   })
  //     //   .catch(error => {
  //     //     console.log(error)
  //     //   });
  //   }
  // };

}
