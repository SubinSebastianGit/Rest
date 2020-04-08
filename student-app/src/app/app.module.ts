import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';

import { ListService } from './list.service';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
  { path: 'create', component:CreateComponent},
  { path: 'edit/:id', component:EditComponent},
  { path: 'list', component:ListComponent},
  { path: 'detail/:id', component:DetailComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    TopBarComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
