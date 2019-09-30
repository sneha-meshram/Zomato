import { Component, NgModule, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import { Title } from '@angular/platform-browser';
import {PageEvent} from '@angular/material/paginator';

// class food{
//   Title:String;
//   Description:String;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Title = 'Zomato';

// foods: Array <any> = [];
// pageSize = 10;
//   pageSizeOptions: number[] = [5, 10, 25, 100];
//   pageEvent: PageEvent;
//   from = 1;
//   to = 10;
  // constructor(private myservice: MyserviceService) {
  //   this.foods = [];
  // }


config: any;
collection = {count: 50, data: []};
constructor() {
  for (let i = 0; i < this.collection.count; i++) {
    this.collection.data.push(
      {
        id: i + 1,
        value: 'items number ' + (i + 1)
      }
    );
  }

  this.config = {
  itemPerPage: 6,
  currentPage: 1,
  totalItems: this.collection.count};
}

pageChanged(event) {
  this.config.currentPage = event;
}

}


  // ngOnInit(){
  //  this.myservice.getDetails().subscribe(data => {
  // console.log(data.collections);
  // this.foods = data.collections;
  //  })
  // }


