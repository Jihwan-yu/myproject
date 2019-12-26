import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { ProductService } from './service/product.service';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { StarsComponent } from './component/stars/stars.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SearchFieldComponent } from './component/search-field/search-field.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ProductItemComponent,
    StarsComponent,
    NavBarComponent,
    SearchFieldComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
