import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component'; // Import für die neue Component

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'userdetails/:id',
    component: UserdetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id', // Neue Route für Post-Details
    component: PostDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
