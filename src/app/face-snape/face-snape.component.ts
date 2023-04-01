import { Component, Input, OnInit } from '@angular/core';
import { FaceSnape } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {
  ngOnInit(){
    
    this.title = 'Archibald';
  this.description = 'Mon meilleur ami depuis tout petit !';
  this.createdDate = new Date();
  this.snaps = 6;
  this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  this.buttonText='oh snap!!'
  }

  onSnap(){
    if(this.buttonText==='oh snap!!'){

      this.faceSnape.snaps++;
      this.buttonText='oops, onSnap';

    }else{
      this.faceSnape.snaps--;
      this.buttonText='oh snap!!'
    }
  }

  @Input()
  faceSnape!:FaceSnape;

  title!:String;
  description!:String;
  createdDate!:Date;
  snaps!:number;
  imageUrl!:String;
  buttonText!:String;

}
