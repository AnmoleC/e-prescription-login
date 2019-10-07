import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  roles: string[] = ['Admin', 'Doctor', 'Patient'];
  loginForm: FormGroup;


  
  
  
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  onSubmit(){

    console.log("Submitted");
    
    
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    console.log(this.loginForm.value.role);
    
  }
  

}