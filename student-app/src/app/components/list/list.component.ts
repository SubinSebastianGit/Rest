import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listservice: ListService) { }

  ngOnInit(): void {
    this.listservice.getLists().subscribe((lists) => {
      console.log(lists);
    });

  }

}
