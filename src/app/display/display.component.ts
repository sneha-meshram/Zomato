import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

 
  foods: Array<any>;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 15, 20];
  pageEvent: PageEvent;
  from = 1;
  to = 10;
  constructor(private myservice: MyserviceService) { 
    this.foods = [];
  }

  ngOnInit() {
    this.fetchFood();
  }


  fetchFood(){
     this.myservice.getDetails().subscribe(data => {
     console.log(data.collections);
     this.foods = data.collections;
      }, error => {
        console.log(error);
      });
     }

     pageChange(event){
       this.pageEvent = event;
       this.to = (this.pageEvent.pageIndex + 1) * this.pageEvent.pageSize;
       this.from = this.to - this.pageEvent.pageSize + 1;
    }
  }
