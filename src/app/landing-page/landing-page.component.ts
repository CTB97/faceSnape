import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  userEmail!: string;

  constructor(private router:Router){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onContinue():void{

    this.router.navigateByUrl('facesnaps')
    
  }

  onSubmitForm(form:NgForm) {
    console.log(form.value.userEmail);
  }

}
