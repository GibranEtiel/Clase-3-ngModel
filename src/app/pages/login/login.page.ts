import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  comuna:string = "loESPEJO";
  nombre:string = " gibran"

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){
    //crear el codigo dque quiera de la logica
    this.router.navigate(['/agregar']);

  }

}
