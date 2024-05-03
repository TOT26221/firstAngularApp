import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-userdetails",
  standalone: true,
  imports: [],
  templateUrl: "./userdetails.component.html",
  styleUrl: "./userdetails.component.scss",
})
export class UserdetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) 
  {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params?.["id"];
    });
  }
  users$: any;
  userId: number = 0;

  ngOnInit(): void {
    this.dataService.getUser(this.userId).then((users) => {
      this.users$ = users});
  }
}
