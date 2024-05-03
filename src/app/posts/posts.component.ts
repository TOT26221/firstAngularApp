import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { tick } from "@angular/core/testing";
import { Observable } from "rxjs";
import { RouterLink, RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.scss",
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.posts = this.data.getPosts().then(
      (data) => (this.posts = data)
    );
  }
}
