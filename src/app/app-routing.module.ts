import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/content',
    pathMatch: 'full',
  },
  { path: 'content', component: ContentComponent },
  {
    path: '**',
    component: ContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
