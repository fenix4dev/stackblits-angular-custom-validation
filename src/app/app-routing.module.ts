import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleFormComponent } from './sample-form/sample-form.component';

const routes: Routes = [
  {
    path: 'sampleform',
    component: SampleFormComponent,
  },
  {
    path: '',
    redirectTo: 'sampleform',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'sampleform',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
