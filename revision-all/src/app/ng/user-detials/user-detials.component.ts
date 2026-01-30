import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-detials',
  templateUrl: './user-detials.component.html',
  styleUrls: ['./user-detials.component.scss']
})
export class UserDetialsComponent {

  constructor(private route:ActivatedRoute){}
 
  ngOnInit(){
    console.log(this.route.snapshot);
    
  }
  
}
