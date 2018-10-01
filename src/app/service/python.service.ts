import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PYTHON_SERVER} from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class PythonService {

  constructor(private http: HttpClient) {
  }

  public call(module: string, method: string, para: any) {
    const url = PYTHON_SERVER + '/' + module + '/' + method;
    return this.http.post(url, para);
  }

}
