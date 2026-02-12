import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver-com',
  templateUrl: './resolver-com.component.html',
  styleUrls: ['./resolver-com.component.scss']
})
export class ResolverComComponent {

  constructor(private router:ActivatedRoute){}

  ngOnInit(): void {
     
    console.log(this.router.snapshot.data);
    
  }
}
