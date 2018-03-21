import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {  HttpEvent,
          HttpInterceptor,
          HttpHandler,
          HttpRequest,
          HttpClient
       } from '@angular/common/http';
import { LoaderService } from './loader/loader.service';

@Injectable()
export class HttpService extends HttpClient {
  constructor(
    httpHandler: HttpHandler,
    private loaderService: LoaderService) {
    super(httpHandler);
  }

  apiUrl = '/idea-backend/api/';
  get(url: string): Observable<any>  {
    this.showLoader();
    return super.get(this.getFullUrl(url))
      .catch(this.onCatch)
      .do(
        (res: Response) => {
          this.onSuccess(res);
        },
        (error: any) => {
          this.onError(error);
        }
      )
      .finally(() => {
        this.onEnd();
      });
  }

  post(url: string, paramsObj: Object): Observable<any> {
    this.showLoader();
    return super.post(this.getFullUrl(url), paramsObj)
      .catch(this.onCatch)
      .do(
        (res: Response) => {
          this.onSuccess(res);
        },
        (error: any) => {
          this.onError(error);
        }
      )
      .finally(() => {
        this.onEnd();
      });
  }

  put(url: string, paramsObj: Object): Observable<any> {
    this.showLoader();
    return super.put(this.getFullUrl(url), paramsObj)
      .catch(this.onCatch)
      .do(
        (res: Response) => {
          this.onSuccess(res);
        },
        (error: any) => {
          this.onError(error);
        }
      )
      .finally(() => {
        this.onEnd();
      });
  }

  private getFullUrl(url: string): string {
    return this.apiUrl + url;
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  private onSuccess(res: Response): void {
    console.log('Request successful');
  }

  private onError(res: Response): void {
    console.log('Error, status code: ' + res.status);
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}
