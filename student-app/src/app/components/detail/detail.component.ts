import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { List } from '../../list.model';
import { ListService } from '../../list.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  list: List;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private listservice: ListService, private router: Router) { }

  fetchListDetail() {
    
    this.listservice.getListById(this.id).subscribe((data: List) => {
      this.list = data;
      console.log('Data Requested...');
      console.log(this.list);
    });

  }

  ngOnInit(): void {
    this.fetchListDetail();
  }

}
