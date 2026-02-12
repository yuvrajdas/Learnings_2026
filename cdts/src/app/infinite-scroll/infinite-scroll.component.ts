import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent {

  usersData:any = [];
  pageIdx:number = 1;
  limit:number = 10;
  loading:boolean = false;
  totalDataLength:number = 100;
  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.fetchUsersData();
  }

  fetchUsersData(){
    this.loading = true;
    this.http.get(`https://jsonplaceholder.typicode.com/posts?_page=${this.pageIdx}&_limit=${this.limit}`).subscribe((res:any)=>{
      this.usersData = [...this.usersData, ...res ]
      this.loading = false;
      this.pageIdx++;
    })
  }

  onScroll(event:any){
    if( this.loading || this.usersData.length === this.totalDataLength){
      console.log("sadf");
      
      return;
    }
    let ele = event.target;

    if(ele.clientHeight + ele.scrollTop >=ele.scrollHeight){
      this.fetchUsersData();
    }
  }

}
