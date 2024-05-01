import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post$: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.dataService.getPost(id).subscribe(
        data => this.post$ = data
      );
    });
  }
}
