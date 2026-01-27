import { Component } from '@angular/core';
import { topics } from './dummy_data'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-learnings';
  routes = topics
  constructor(private route:Router){}

  onRouteChange(event:any){
    let rLink = event?.target['value'];
    console.log(rLink)
    this.route.navigateByUrl(rLink)
  }

  loadResolverCom(){
    this.route.navigate(['resolver']);
  }
}
