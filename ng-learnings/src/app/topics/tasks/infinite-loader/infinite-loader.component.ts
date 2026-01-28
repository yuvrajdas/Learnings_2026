import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-loader',
  templateUrl: './infinite-loader.component.html',
  styleUrls: ['./infinite-loader.component.scss']
})
export class InfiniteLoaderComponent {

  usersData:any = [];
  pageNo:number = 0;
  limit:number = 15;
  loading:boolean = false;

  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.fetchData()
  }
  
  fetchData(){
    this.loading = true;
    this.http.get(`https://jsonplaceholder.typicode.com/posts?_page=${this.pageNo}&_limit=${this.limit}`).subscribe((res:any)=>{
        console.log(res)
        this.usersData = [...this.usersData, ...res];
        this.loading = false;
        this.pageNo++; 
    })
  }

  onScroll(e:any){
    let ele = e.target;
    
    if(ele.scrollTop + ele.clientHeight>=ele.scrollHeight){
      console.log("___________sdf");
      this.fetchData()
      
    }
    
    // const element = event.target;

    // if user reached bottom
    // if (element.scrollTop + element.clientHeight >= element.scrollHeight - 5) {
    //   this.fetchData();
    // }
    // const element = e.target;

    // // if user reached bottom
    // if (element.scrollTop + element.clientHeight >= element.scrollHeight - 5) {
    //   this.fetchData();
    // }
  }

}
