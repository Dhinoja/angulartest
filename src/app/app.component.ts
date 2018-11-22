import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { RepositoryService } from './repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Angular App';

  constructor(private repoService: RepositoryService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAARGydswlu2PprVAkS-gKNTHZRsiZ58Uw',
      authDomain: 'ng-test-17074.firebaseapp.com',
      databaseURL: 'https://ng-test-17074.firebaseio.com'
    });
  }

  saveAll() {
    this.repoService
      .saveCategories()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
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
  }
}
