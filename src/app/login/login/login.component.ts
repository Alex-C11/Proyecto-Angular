import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string="";
  public password:string="";

  constructor(public authService:AuthService,public router:Router,private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  onSubmitLogin(){
  	this.authService.loginEmail(this.email,this.password).subscribe((token:any)=>{
      console.log(token.access_token);
      localStorage.setItem('isLoggedIn',"true");
      localStorage.setItem('token', token.access_token);
      //this.toastr.success('Bienvenido: '+this.email);
      this.router.navigate(['/dashboard']);
      this.toastr.success(this.email, 'Bienvenido....');
    },err=>{
      console.log("error: "+err);
      this.toastr.warning('Mensaje', 'Acceso Denegado');
    }
  );

  }

}
