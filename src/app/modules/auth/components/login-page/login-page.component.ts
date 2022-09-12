import { Component, OnInit } from '@angular/core';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
value:string='Hola mundo soy un programa';
loginForm:FormGroup= new FormGroup({});

  constructor(private replaceSpacePipe:ReplaceSpacePipe) { }

  ngOnInit(): void {
    this.value=this.replaceSpacePipe.transform(this.value,'')
    this.loginForm = new FormGroup(
      {
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
    }
    );
  }
  sendCredentials(){
    const body=this.loginForm.value;
    console.log(body);
  }
}
