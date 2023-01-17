import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  }, {
    path: 'details',
    component: DetailsComponent,
  },{
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
