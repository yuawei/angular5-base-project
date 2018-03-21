import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';

@Injectable()
export class LoadingService {
  public status: Subject<boolean> = new Subject();
  private _active: boolean = true;
}