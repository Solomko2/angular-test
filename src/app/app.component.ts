import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from './Post.model';
import {FetchService} from './fetch.service';
import {FormControl, FormGroup} from '@angular/forms';

const ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public posts$: Observable<Post[]>;
  public form: FormGroup;

  public getPosts() {
    this.posts$ = this.fetchService.getPosts();
  }

  public addPosts() {
    this.fetchService.addPost(
      {
        id: ID(),
        title: 'test' + ID(),
        body: 'wwww'
      }
    ).subscribe(console.log);
  }

  public clearPosts() {
    this.posts$ = null;
  }

  public buildForm() {
    this.form = new FormGroup({
      name: new FormControl()
    });
  }

  test(e) {
    console.log(e.target.value);
  }

  constructor(public fetchService: FetchService) {}


  ngOnInit() {
    this.buildForm();
  }
}
