import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public post(url: string, body: any) {
    return this.http.post(url, {});
  }

  public get(url: string) {
    this.http.get(url).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }


}
