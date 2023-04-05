import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnape } from '../models/face-snap.model';
import { FaceSnapeService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnape>;
  buttonText!: String;

  constructor(private faceSnapeService: FaceSnapeService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.buttonText = 'oh snap!!'
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapeService.getSnapById(snapId);
  }

  onSnap(id:number) {
    if (this.buttonText === 'oh snap!!') {

      this.faceSnapeService.snapFaceSnapById(id).pipe(
        tap(()=>{
          this.faceSnap$ = this.faceSnapeService.getSnapById(id);
          this.buttonText = 'oops, onSnap';
        })
      ).subscribe();
      

    } else {
      this.faceSnapeService.unSnapById(id).pipe(
        tap(()=>{
          this.faceSnap$ = this.faceSnapeService.getSnapById(id);
          this.buttonText = 'oh snap!!'
        })
      ).subscribe();
      
    }
  }

}
