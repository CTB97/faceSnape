import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { FaceSnape } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  interval$!: Observable<string>;
  
  ngOnInit(){

    /* this.interval$ = interval(1000).pipe(
      map(value => value % 2 === 0 ?
          `Je suis ${value} et je suis pair` :
          `Je suis ${value} et je suis impair`
      )
  ); */

  }
}
