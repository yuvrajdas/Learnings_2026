import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-pagination',
  templateUrl: './crud-pagination.component.html',
  styleUrls: ['./crud-pagination.component.scss']
})
export class CrudPaginationComponent {

  usersData:any;
  cloneUserData:any;
  

  // pagination
  totalDataLength:number = 0;
  totalNoOfPages:number = 0;
  rowPerPage:number = 10;
  pageIndex:number = 0;
  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.fetchUsersDetails()
  }

  fetchUsersDetails(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res)=>{
      this.usersData = res;
      this.constructUserDataToDisplay();
    })
  }

  constructUserDataToDisplay(){
    this.totalDataLength = this.usersData?.length ?? 0;
    this.totalNoOfPages = this.totalDataLength/this.rowPerPage;
    
    let sIdx = this.pageIndex*this.rowPerPage;
    let eIdx = sIdx+this.rowPerPage; 

    this.cloneUserData = this.usersData.slice(sIdx, eIdx);
  }

  navigate(nav:string){
    if(nav == 'prev'){
      if(this.pageIndex>0){
        this.pageIndex--;
      }else{
        return;
      }
    }else{
      if(this.pageIndex+1<this.totalNoOfPages){
        this.pageIndex++;
      }else{
        return;
      }
    }
    this.constructUserDataToDisplay()
  }

  filterUser(event:any){
    let searkey = (event?.target?.value ?? "").toString().toLowerCase();
    this.cloneUserData = this.usersData.slice(this.pageIndex*this.rowPerPage, (this.pageIndex*this.rowPerPage)+this.rowPerPage).filter((u:any)=> u?.title?.toString().toLowerCase().includes(searkey))
  }

  sortOrder: 'asc' | 'desc' = 'asc';

  sortData(key: string) {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';

    this.cloneUserData.sort((a:any, b:any)=>{
      
      // for number 
      if(typeof a[key] === 'number'){
        if(a[key]>b[key]){
          return this.sortOrder === 'asc' ? 1 : -1;
        }else if(b[key] > a[key]){
          return  this.sortOrder === 'asc' ? -1 : 1;
        }else{
          return 0;
        } 
      }else{
        let aStr = a[key].toString().toLowerCase();
        let bStr = b[key].toString().toLowerCase();

        return this.sortOrder === 'asc' ?
          aStr.localeCompare(bStr) :
          bStr.localeCompare(aStr);  
      }
    })
  }
  
  
}
