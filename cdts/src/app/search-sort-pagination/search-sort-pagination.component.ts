import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-search-sort-pagination',
  templateUrl: './search-sort-pagination.component.html',
  styleUrls: ['./search-sort-pagination.component.scss']
})
export class SearchSortPaginationComponent {

  constructor(private http : HttpClient){}

  userData:Array<any> = [];
  cloneUserData:Array<any> = [];
  
  // pagination
  pageIdx:number = 0;
  rowPerPage:number = 10;
  totalDataLength:number = 0;
  totalNoOfPages:number = 0;


  ngOnInit(){
    this.fetchUsersData();
  }

  fetchUsersData(){
    this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
      this.userData = res;
      this.totalDataLength = res.length;
      this.totalNoOfPages = this.totalDataLength/this.rowPerPage;
      this.constructDataToDisplay();
    })
  }

  constructDataToDisplay(){
    let sIdx = this.rowPerPage*this.pageIdx;
    let eIdx = sIdx+this.rowPerPage;

    this.cloneUserData = this.userData.slice(sIdx, eIdx);
  }

  navigateTo(param:string){
    if(param=== 'pre'){
      if(this.pageIdx>0){
        this.pageIdx--;
      }else{
        return;
      }
      this.constructDataToDisplay();
    }else{
      if(this.pageIdx+1<this.totalNoOfPages){
        this.pageIdx++;
      }else{
        return;
      }
      this.constructDataToDisplay();
    }
  }

  changePageSize(event:any){
    console.log(event.target.value);
    this.rowPerPage = event.target.value;
    this.pageIdx = 0;
    this.constructDataToDisplay();
  }

  sortType: 'asc' | 'desc' = 'asc';

  sortCol(col:string){

    this.sortType = this.sortType === 'asc' ? 'desc' :'asc';

    this.cloneUserData.sort((a:any, b:any)=>{
    
      if(typeof a[col] === 'number'){

        if(a[col]>b[col]){
          return this.sortType === 'asc' ? 1 : -1;
        }else if(a[col] < b[col]){
          return this.sortType === 'asc' ? -1 : 1;
        }else{
          return 0;
        }
      }else{
          let aVal = a[col].toString().toLowerCase();
          let bVal = b[col].toString().toLowerCase();

          return this.sortType === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      
    })
  }
}
