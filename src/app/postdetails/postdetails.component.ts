import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-postdetails",
  standalone: true,
  imports: [],
  templateUrl: "./postdetails.component.html",
  styleUrl: "./postdetails.component.scss",
})
export class PostdetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.postId = params?.["id"]});
  }
  posts$: any;
  postId: number = 0;

  ngOnInit(): void {
    this.dataService.getPost(this.postId).then((data) => {
      this.posts$ = data})
  }

  
}
