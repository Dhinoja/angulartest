import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Angular App';

  constructor() {}

  ngOnInit() {}

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
