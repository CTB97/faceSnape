import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FaceSnape } from '../models/face-snap.model';
import { FaceSnapeService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent {

  @Input()
  faceSnape!: FaceSnape;
  buttonText!: String;




  constructor(private faceSnapeService: FaceSnapeService, private router: Router) {

  }

  onSnap() {
    if (this.buttonText === 'oh snap!!') {

      this.faceSnapeService.snapFaceSnapById(this.faceSnape.id);
      this.buttonText = 'oops, onSnap';

    } else {
      this.faceSnapeService.snapFaceSnapById(this.faceSnape.id);
      this.buttonText = 'oh snap!!'
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnape.id}`)
  }
}
