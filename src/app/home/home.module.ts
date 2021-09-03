import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { Banner1Component } from "./banner1/banner1.component";
import { NewsComponent } from "./news/news.component";
import { Banner2Component } from "./banner2/banner2.component";
import { Banner3Component } from "./banner3/banner3.component";
import { RedesComponent } from "./redes/redes.component";
import { FooterComponent } from "./footer/footer.component";
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    NavBarComponent,
    Banner1Component,
    NewsComponent,
    Banner2Component,
    Banner3Component,
    RedesComponent,
    FooterComponent
  ]
})
export class HomePageModule {}
