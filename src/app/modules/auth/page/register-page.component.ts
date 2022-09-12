import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  loginForm:FormGroup= new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
    }
    );
  }
  sendCredentials(){
    const bosy=this.loginForm.value;
  }

}
