import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FaceSnape } from '../models/face-snap.model';
import { FaceSnapeService } from '../services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!:FormGroup;
  faceSnapPreview$!: Observable<FaceSnape>;
  urlRegex!: RegExp;

  constructor(private router:Router, private formBuilder:FormBuilder,private faceSnapService:FaceSnapeService){
    
  }
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapForm = this.formBuilder.group({
      title: [null,[Validators.required]],
      description: [null,[Validators.required]],
      imageUrl: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
      location: [null]
  });

  this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    map(formValue=>({
      ...formValue,
      createdDate: new Date(),
      snaps:0,
      id:0
    }))
  );
  }

  onSubmitForm() {
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
}


  

}
