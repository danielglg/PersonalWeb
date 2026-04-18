import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import NovaLikePreset from './theme/nova-like.preset';

import {MenubarModule} from 'primeng/menubar';
import {ChartModule} from 'primeng/chart';
import {CarouselModule} from 'primeng/carousel';
import { providePrimeNG } from 'primeng/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactModule } from './contact/contact.module';
import { ProfessionalProfileModule } from './professional-profile/professional-profile.module';

// Projects
import { PaymentsComponent } from './projects/payments/payments.component';
import { PaymentsEmvComponent } from './projects/payments/payments-emv.component';
import { PaymentsAcquiringComponent } from './projects/payments/payments-acquiring.component';
import { PaymentsIssuingComponent } from './projects/payments/payments-issuing.component';
import { PaymentsTokenizationComponent } from './projects/payments/payments-tokenization.component';
import { NetworksComponent } from './projects/networks/networks.component';
import { NetworksPcrfComponent } from './projects/networks/networks-pcrf.component';
import { VideoComponent } from './projects/video/video.component';
import { VideoHevcComponent } from './projects/video/video-hevc.component';
import { VideoPersonalizationComponent } from './projects/video/video-personalization.component';
import { EmbeddedComponent } from './projects/embedded/embedded.component';
import { ScadaComponent } from './projects/scada/scada.component';
import { OthersComponent } from './projects/others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopMenuComponent,
    AboutComponent,
    NotFoundComponent,

    // Projects
    PaymentsComponent,
    PaymentsEmvComponent,
    PaymentsAcquiringComponent,
    PaymentsIssuingComponent,
    PaymentsTokenizationComponent,
    NetworksComponent,
    NetworksPcrfComponent,
    VideoComponent,
    VideoHevcComponent,
    VideoPersonalizationComponent,
    EmbeddedComponent,
    ScadaComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ContactModule,
    ProfessionalProfileModule,
    MenubarModule,
    ChartModule,
    CarouselModule,
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: NovaLikePreset,
        options: {
          darkModeSelector: false
        }
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
