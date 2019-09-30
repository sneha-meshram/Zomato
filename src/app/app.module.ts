import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MyserviceService } from './myservice.service';
import { MatCardModule } from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatToolbarModule,
    BrowserAnimationsModule,


  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
