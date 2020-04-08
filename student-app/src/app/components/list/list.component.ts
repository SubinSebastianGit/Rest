import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { List } from '../../list.model';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];

  constructor(private listservice: ListService, private router: Router) { }

  ngOnInit(): void {
    this.fetchLists();

  }

  fetchLists() {
    this.listservice.getLists().subscribe((data: List[]) => {
      this.lists = data;
      console.log('Data Requested...');
      console.log(this.lists);
    });

  }
  

}
