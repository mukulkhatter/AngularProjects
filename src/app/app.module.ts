import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './shared/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,WelcomeComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,


    ProductModule,
    UserModule,
    HttpClientModule,    
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
