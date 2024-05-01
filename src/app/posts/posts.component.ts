import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
export class PostsComponent implements OnInit {
  posts$: object = {}; // Initialize the posts$ property
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    );
  }
}
