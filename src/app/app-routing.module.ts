import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalProfileComponent } from './professional-profile/professional-profile.component';

const routes: Routes = [
  { path: '**', component: ProfessionalProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
