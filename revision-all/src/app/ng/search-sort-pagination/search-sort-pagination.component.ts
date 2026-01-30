import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-sort-pagination',
  templateUrl: './search-sort-pagination.component.html',
  styleUrls: ['./search-sort-pagination.component.scss']
})
export class SearchSortPaginationComponent {

  usersData:any = []
  clonedUserData:any = []

  // pagination
  pageIdx:number = 0;
  rowPerPerPage:number = 10;
  totalDataLength:number = 0;
  totalNoOfPages:number = 0;


  constructor(private http:HttpClient){}

  ngOnInit(){
    this.fetchUsersData()
  }


  fetchUsersData(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
      this.usersData = res;
      this.totalDataLength = this.usersData.length;
      this.constructUserDataToDisplay();
    })
  }

  constructUserDataToDisplay(){
    this.totalNoOfPages = this.totalDataLength/this.rowPerPerPage;

    let sIdx = this.pageIdx*this.rowPerPerPage;
    let eIdx = sIdx+this.rowPerPerPage;

    this.clonedUserData = this.usersData.slice(sIdx, eIdx);
  }

  search(e:any){
    
    let searchKey = (e.target.value ?? "").toString().toLowerCase();    
    this.clonedUserData = this.usersData.filter((el:any)=>el.title.toString().toLowerCase().includes(searchKey));
  }

  sortOrder: 'asc' | 'desc' = 'asc'

  sortCol(col:string){
    this.sortOrder = this.sortOrder == 'asc' ? 'desc' : 'asc'

    this.clonedUserData.sort((a:any, b:any)=>{

      if(typeof a[col] === 'number'){
        if(a[col]>b[col]){
          return this.sortOrder == 'asc' ? 1 : -1;
        }else if(a[col]<b[col]){
          return this.sortOrder == 'asc' ? -1 : 1;
        }else{
          return 0;
        }
      }else{
        let aStr = a[col].toString().toLowerCase();
        let bStr = b[col].toString().toLowerCase();

        return this.sortOrder === 'asc' ?
          aStr.localeCompare(bStr) :
          bStr.localeCompare(aStr);  
      }
    })
  }



  nav(param:string){

    if(param == 'pre'){
       if(this.pageIdx>0){
        this.pageIdx--;
       }else{
        return;
       }
    }else{
      if(this.pageIdx+1<this.totalNoOfPages){
        this.pageIdx++;
      }else{
        return;
      }
    }
    this.constructUserDataToDisplay();
  }
}
