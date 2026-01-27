import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent {


  constructor(private route : ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.data);
    
  }
}
