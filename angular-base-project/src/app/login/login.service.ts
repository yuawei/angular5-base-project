import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { HttpService } from '../core/http.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  constructor(private httpService: HttpService) { }

  storeUserData(user: any) {
  }

  authenticate(user: User): Observable<any> {
    return this.httpService.post('login',JSON.stringify(user));
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.json().description);
  }
}
