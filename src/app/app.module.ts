import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MenubarModule} from 'primeng/menubar';
import {ChartModule} from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AboutComponent } from './about/about.component';

// Projects
import { PaymentsComponent } from './projects/payments/payments.component';
import { PaymentsEmvComponent } from './projects/payments/payments-emv.component';
import { PaymentsAcquiringComponent } from './projects/payments/payments-acquiring.component';
import { NetworksComponent } from './projects/networks/networks.component';
import { NetworksPcrfComponent } from './projects/networks/networks-pcrf.component';
import { VideoComponent } from './projects/video/video.component';
import { VideoPersonalizationComponent } from './projects/video/video-personalization.component';
import { EmbeddedComponent } from './projects/embedded/embedded.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopMenuComponent,
    AboutComponent,

    // Projects
    PaymentsComponent,
    PaymentsEmvComponent,
    PaymentsAcquiringComponent,
    NetworksComponent,
    NetworksPcrfComponent,
    VideoComponent,
    VideoPersonalizationComponent,
    EmbeddedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
