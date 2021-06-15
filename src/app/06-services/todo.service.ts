
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class TodoService {
  constructor(private http: HttpClient) {
  }

/*   add(todo) {
    return this.http.post('...', todo).subscribe(r => r.toString());
  }

  getTodos() {
    return this.http.get('...').subscribe(r => r.json());
  }

  delete(id) {
    return this.http.delete('...').subscribe(r => r.json());
  } */
}
