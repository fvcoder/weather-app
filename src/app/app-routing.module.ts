import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPage } from './router/index/index.component';

const routes: Routes = [{ component: IndexPage, path: '' }];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
