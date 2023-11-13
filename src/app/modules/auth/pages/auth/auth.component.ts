import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  formLogin: FormGroup = new FormGroup({});

  constructor(private router:Router){}

  ngOnInit(): void {
    this.initFormGroup();
  }

  public initFormGroup(){
    this.formLogin = new FormGroup({
      user: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  public sendUser(){
    const {value} = this.formLogin
    if (value.user==='alum'&& value.password === '1234' ) {
      this.router.navigate(['/menu']);
    }

  }
}
