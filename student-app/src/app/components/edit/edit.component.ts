import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { List } from '../../list.model';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  list: List;

  enteredTitle = '';
  enteredrollno = '';
  title = '';
  rollno = '';

  id = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private listservice: ListService, private router: Router) { 

  }

  ngOnInit(): void {
  this.fetchListDetail();
  }

  fetchListDetail() {
    
    this.listservice.getListById(this.id).subscribe((data: List) => {
      this.list = data;
      console.log('Data Requested...');
      console.log(this.list);
    });

  }

  onUpdateData() {
  this.title = '';
  this.rollno = '';
  this.updateList();
  }

  updateList() {
    
    this.listservice.updateList(this.id, this.list.title, this.list.rollno).subscribe(() => {
      console.log('List Updated...');
    });
    alert('Data Updated!');

  }

}
