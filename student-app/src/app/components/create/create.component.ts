import { Component, OnInit } from '@angular/core';

import { ListService } from '../../list.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  enteredTitle = '';
  enteredrollno = '';
  title = '';
  rollno = '';
  constructor(private listservice: ListService) { }

  ngOnInit(): void {
  }

  addList() {
    this.listservice.addList(this.title, this.rollno).subscribe(() => {
      console.log('Data added succesfully');
    });
  }

  onAddData() {
  this.title = this.enteredTitle;
  this.rollno = this.enteredrollno;
  if(confirm("New data about to be added"))
    this.addList();
  }

}
