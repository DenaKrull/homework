import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: BlogListComponent,
  },
  {
    path: 'blogs/:1',
    component: PostListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blogs',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
