import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
export class UserdetailsComponent implements OnInit {
    user$: any;
    userID: number = 0;
    constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.userID = params['id'] );
    }
    ngOnInit() {
    this.data.getUser(this.userID).subscribe(
    data => this.user$ = data
    )
    }
    }