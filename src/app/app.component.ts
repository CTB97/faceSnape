import { Component, OnInit } from '@angular/core';
import { FaceSnape } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  mySnap!:FaceSnape;
  mySnap1!:FaceSnape;
  ngOnInit(){
    
    this.mySnap={
      title:'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      createdDate:new Date(),
      snaps:7,
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location:'Dakar'
    }
    this.mySnap1={
      title:'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      createdDate:new Date(),
      snaps:7,
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    }
  }
}
