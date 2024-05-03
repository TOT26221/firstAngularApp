import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  constructor(private dataService:DataService){}
  users: any = [];

  ngOnInit(): void {
    // this.users$ = this.dataService.getUsers().subscribe(
    //   (data) => (this.users$ = data)
    // );
    this.users = this.dataService.getUsers().then(
      (data) => (this.users = data)
    );
  }
}
