import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbTabsetModule,
  NgbCollapseModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DemoAppComponent } from './demo-app.component';

import { HomeComponent  } from './home/home.component';
import { HomeModule } from './home/home.module';

import { DemoComponent as DefaultDemoComponent } from './demo-modules/kitchen-sink/component';
import { DemoModule as DefaultDemoModule } from './demo-modules/kitchen-sink/module';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { AngularFireModule } from '@angular/fire';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';



import { NavbarComponent } from './navbar/navbar.component';
import { AfficheResultComponent } from './affiche-result/affiche-result.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { AfficheetudComponent } from './afficheetud/afficheetud.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { FormationComponent } from './formation/formation.component';


@NgModule({
  declarations: [DemoAppComponent, InscrireComponent, NavbarComponent, AfficheResultComponent, ConnecterComponent, AfficheetudComponent, FormationComponent,],
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
      ],    
       {
        useHash: true
      }  
      )
  ],
  bootstrap: [DemoAppComponent]
})   
export class DemoAppModule {}        
      
     
   

