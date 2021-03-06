import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbTabsetModule,
  NgbCollapseModule,
  NgbTooltipModule,NgbTooltip
} from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DemoAppComponent } from './demo-app.component';



import { InscrireComponent } from './inscrire/inscrire.component';

import { AngularFireModule } from '@angular/fire';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

import { DemoComponent as DefaultDemoComponent } from './demo-modules/kitchen-sink/component';
import { DemoModule as DefaultDemoModule } from './demo-modules/kitchen-sink/module';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NavbarComponent } from './navbar/navbar.component';
import { AfficheResultComponent } from './affiche-result/affiche-result.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { AfficheetudComponent } from './afficheetud/afficheetud.component';



import { AngularFireModule } from '@angular/fire';

import { MatNativeDateModule } from '@angular/material';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

import { HomeComponent  } from './home/home.component';
import { HomeModule } from './home/home.module';

import { NavbarComponent } from './navbar/navbar.component';
import { AfficheResultComponent } from './affiche-result/affiche-result.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { AfficheetudComponent } from './afficheetud/afficheetud.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { FormationComponent } from './formation/formation.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import {NgbDropdownModule,NgbModule} from '@ng-bootstrap/ng-bootstrap'



@NgModule({
<<<<<<< HEAD
  declarations: [DemoAppComponent, InscrireComponent, NavbarComponent, AfficheResultComponent, ConnecterComponent, AfficheetudComponent,],
=======
  declarations: [DemoAppComponent, InscrireComponent, NavbarComponent, AfficheResultComponent, ConnecterComponent, AfficheetudComponent, FormationComponent,],
>>>>>>> 7103e313d70ae7fe6d3e1ffc653a753bda362e1c
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbTabsetModule,
    NgbCollapseModule,
    NgbTooltipModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule, 
    AngularFireStorageModule, 
<<<<<<< HEAD
=======
    NgbDropdownModule,
    NgbModule,
  
>>>>>>> 7103e313d70ae7fe6d3e1ffc653a753bda362e1c
    DragAndDropModule,
    Angulartics2Module.forRoot({
      developerMode: !environment.production
    }),
    PerfectScrollbarModule,
    ClipboardModule,
    DefaultDemoModule,
    HomeModule,
    RouterModule.forRoot(
      [
        {
          path: 'kitchen-sink',
          component: DefaultDemoComponent,
          data: {label: 'Kitchen sink'}
          },
          {
            path: 'home',
            component: HomeComponent,
            data: {label: 'home'}
            },
            { path: '' ,redirectTo:'home' ,pathMatch:'full' },
<<<<<<< HEAD
{
  path:'inscrire',
  component:InscrireComponent,
  data : { label: 'inscrire'}
},

 {
   path:'resultat',
   component:AfficheResultComponent,
   data:{ label:'resultat' }
 },  
 {
   path:'login',
   component:ConnecterComponent,
   data:{ label:'login'}
 },
 {
   path:'afficheResultat',
   component:AfficheetudComponent,
   data:{label:'afficheResultat'}
 }
 
=======
            {
              path:'inscrire',
              component:InscrireComponent,
              data : { label: 'inscrire'}
            },
            
             {
               path:'resultat',
               component:AfficheResultComponent,
               data:{ label:'resultat' }
             },  
             {
               path:'login',
               component:ConnecterComponent,
               data:{ label:'login'}
             },
             {
               path:'afficheResultat',
               component:AfficheetudComponent,
               data:{label:'afficheResultat'}
             },
             {
               path : 'formation',
               component : FormationComponent,
               data:{label:'FormationComponent'}
             }
>>>>>>> 7103e313d70ae7fe6d3e1ffc653a753bda362e1c
      ],    
       {
        useHash: true
      }  
      
      )
  ],
  exports: [
    MatTooltipModule,
    MatNativeDateModule
  ],
  bootstrap: [DemoAppComponent,HomeComponent]
})   
export class DemoAppModule {}        
      
     
   

