import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../../data-service.service";
import { PaginationService } from "../../shared/pagination.service";
@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  // array of all items to be paged
  private allItems: any[]; 
  // pager object
   pager: any = {};
   // paged items
   pagedItems: Array<any>;
   public searchText: string;
  constructor(private dataService:DataService, private pages: PaginationService) { }
  data1:any = [];
  isDesc: boolean = false;
  column: string = 'title';
 // categoris: ['Cheeses', 'Beverages']
  data:any = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  }];
  ngOnInit(): void {
    console.log(this.data);
    this.getData();
  }

  getData(){
    console.log(this.data)
    this.dataService.sendGetRequest().subscribe((res:any[])=>{
      //console.log(res);
      //this.data1 = res;
      // set items to json response
      this.allItems = res;
      console.log('this.allItems ----- ',this.allItems);
      // initialize to page 1
      this.setPage(1);
    })
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pages.getPager(this.allItems.length, page);
    console.log('this.allItems :' , this.allItems);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('paged items :' , this.pagedItems);
    
}
sort(property) {
  this.isDesc = !this.isDesc; //change the direction    
  this.column = property;
  let direction = this.isDesc ? 1 : -1;

  this.pagedItems.sort(function (a, b) {
    if (a[property] < b[property]) {
      return -1 * direction;
    }
    else if (a[property] > b[property]) {
      return 1 * direction;
    }
    else {
      return 0;
    }
  });
};


}
