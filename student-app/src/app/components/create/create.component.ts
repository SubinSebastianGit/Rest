import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private listservice: ListService) { }

  ngOnInit(): void {
  }

}
