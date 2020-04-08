import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  
  getLists() {
    return this.http.get(`${this.uri}/lists`);
  }

  getListById(id) {
    return this.http.get(`${this.uri}/lists/${id}`);
  }

  addList(title, rollno) {
    const list = {
      title: title,
      rollno: rollno
    };
    return this.http.post(`${this.uri}/lists/add`, list);
  }

  updateList(id, title, rollno) {
    const list = {
      title: title,
      rollno: rollno
    };
    return this.http.post(`${this.uri}/lists/update/${id}`, list);
  }

  deletelist(id) {
    return this.http.get(`${this.uri}/lists/delete/${id}`);
  }

}
