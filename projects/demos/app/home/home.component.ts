import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: ['./home.component.scss']
=======
  styleUrls: ['./home.component.scss'],
  
>>>>>>> 7103e313d70ae7fe6d3e1ffc653a753bda362e1c
})
export class HomeComponent implements OnInit {
   isloged :Boolean = false;


<<<<<<< HEAD
  constructor(private router: Router) {
=======
  constructor(private router: Router, ) {

>>>>>>> 7103e313d70ae7fe6d3e1ffc653a753bda362e1c
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
afficheResu(){
  this.router.navigate(['/afficheResultat'])
}
<<<<<<< HEAD
=======
afficheFormation(){
  this.router.navigate(['formation'])
}
>>>>>>> 7103e313d70ae7fe6d3e1ffc653a753bda362e1c
login(){
  this.router.navigate(['/login']);
}
  ngOnInit() {
  }
  logout(){
    this.isloged=false
    localStorage.setItem('isloged',"false")
    
  }



}

