import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { NgModule } from '@angular/core';
import { PostdetailsComponent } from './postdetails/postdetails.component';


export const routes: Routes = [
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
        title:'Posts',
        component: PostsComponent,
    },
    {
        path: 'postdetails/:id',
        component: PostdetailsComponent
    }
];
