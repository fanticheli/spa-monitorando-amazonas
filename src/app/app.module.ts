import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    AppRouting,
    BrowserModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashBoardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
