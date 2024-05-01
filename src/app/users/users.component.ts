import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  constructor(private dataService: DataService) { }
  users$: any= [];
  ngOnInit(): void {
   this.dataService.getUsers().subscribe(
      data => this.users$ = data
    );
  }
}
