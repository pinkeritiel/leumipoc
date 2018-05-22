import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ViewIpnpComponent } from './view/view-ipnp/view-ipnp.component';
import { ViewIpnpdetailsComponent } from './view/view-ipnpdetails/view-ipnpdetails.component';
import { ViewIpnpkyc1Component } from './view/view-ipnpkyc1/view-ipnpkyc1.component';
import { ViewIpnpnavigatorComponent } from './view/view-ipnpnavigator/view-ipnpnavigator.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: HomepageComponent},
  { path: 'newIPNP',component: ViewIpnpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ViewIpnpComponent,
    ViewIpnpdetailsComponent,
    ViewIpnpkyc1Component,
    ViewIpnpnavigatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // for debugging 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
