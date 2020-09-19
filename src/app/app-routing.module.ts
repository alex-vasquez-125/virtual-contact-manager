import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'card', component: CardPageComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'table', component: TablePageComponent },
  { path: '', component: ListPageComponent },
  { path: '**', component: NotFoundPageComponent }
];
/* todo
*   look at difference between <a href="/list" and routerLink="/ https://angular.io/guide/router
*   path: '/', component: MYCOMPONENT breaks the world... why?
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
