import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnape } from '../models/face-snap.model';
import { FaceSnapeService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapService:FaceSnapeService){}

  faceSnapes$!:Observable<FaceSnape[]>;
  ngOnInit(){
    this.faceSnapes$=this.faceSnapService.getAllFaceSnaps();
  }

}
