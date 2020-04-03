import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mwl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   isloged :Boolean = false;


  constructor(private router: Router) {
    let status = localStorage.getItem('isloged')
    
    if(status==="true"){
      this.isloged = true
    }else{
      this.isloged = false
    }

   }
  calendar(){
    this.router.navigate(['/kitchen-sink']); 
}
inscrire(){
  this.router.navigate(['/inscrire']);
}

resultat(){
  this.router.navigate(['/resultat']);
}
login(){
  this.router.navigate(['/login']);
}
afficheResu(){
  this.router.navigate(['/afficheResultat'])
}
<<<<<<< HEAD
=======

afficheFormation(){
  this.router.navigate(['formation'])
}
>>>>>>> 7103e313d70ae7fe6d3e1ffc653a753bda362e1c
  ngOnInit() {
  }


  logout(){
    this.isloged=false
    localStorage.setItem('isloged',"false")
    
  }


}
