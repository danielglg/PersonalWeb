import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProfessionalProfileComponent } from './professional-profile/professional-profile.component';
import { ContactComponent } from './contact/contact.component';

// Projects
import { PaymentsComponent } from './projects/payments/payments.component';
import { PaymentsEmvComponent } from './projects/payments/payments-emv.component';
import { PaymentsAcquiringComponent } from './projects/payments/payments-acquiring.component';
import { NetworksComponent } from './projects/networks/networks.component';
import { NetworksPcrfComponent } from './projects/networks/networks-pcrf.component';
import { VideoComponent } from './projects/video/video.component';
import { VideoPersonalizationComponent } from './projects/video/video-personalization.component';
import { VideoHevcComponent } from './projects/video/video-hevc.component';
import { EmbeddedComponent } from './projects/embedded/embedded.component';
import { ScadaComponent } from './projects/scada/scada.component';
import { OthersComponent } from './projects/others/others.component';


const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'ignore',
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: ProfessionalProfileComponent },
  { path: 'contact', component: ContactComponent },

  // Projects
  { path: 'projects/payments', component: PaymentsComponent },
  { path: 'projects/payments/emv', component: PaymentsEmvComponent },
  { path: 'projects/payments/acquiring', component: PaymentsAcquiringComponent },
  { path: 'projects/networks', component: NetworksComponent },
  { path: 'projects/networks/pcrf', component: NetworksPcrfComponent },
  { path: 'projects/video', component: VideoComponent },
  { path: 'projects/video/hevc', component: VideoHevcComponent },
  { path: 'projects/video/personalization', component: VideoPersonalizationComponent },
  { path: 'projects/embedded', component: EmbeddedComponent },
  { path: 'projects/scada', component: ScadaComponent },
  { path: 'projects/others', component: OthersComponent },

  // Default
  { path: '**', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
