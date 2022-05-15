import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    //assign form group
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  //submit form function
  submit(): void{
    //console.log('submit login');
    this.http.post('http://localhost:8000/api/v1/login', this.form.getRawValue()).
    subscribe(() => this.router.navigate(['/']))
  }


}
