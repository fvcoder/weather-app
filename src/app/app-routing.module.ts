import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPage } from './router/index/index.component';
import { ViewPage } from './router/view/view.component';

const routes: Routes = [
  { component: IndexPage, path: '' },
  {
    component: ViewPage,
    path: ':zone',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
