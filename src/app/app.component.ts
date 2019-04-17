import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "App Title";

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  logoutClick() {
    this.authService.signOutUser();
  }
  loginClick() {
    this.authService.signInUser("admin", "admin");
  }

  // saveAll() {
  //   this.repoService
  //     .saveCategories()
  //     .subscribe(
  //       response => console.log(response),
  //       error => console.log(error)
  //     );
  // this.repoSerivce
  //   .saveItems()
  //   .subscribe(
  //     response => console.log(response),
  //     error => console.log(error)
  //   );
  // this.repoSerivce
  //   .saveItemCategories()
  //   .subscribe(
  //     response => console.log(response),
  //     error => console.log(error)
  //   );
  // }
}
