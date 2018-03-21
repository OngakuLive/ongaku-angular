import { Injectable }                  from '@angular/core';
import { Http, Jsonp, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';
import { AuthHttp }    from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class HttpService {

  private domain;

  constructor(private auth_http: AuthHttp, private http: Http) {
    this.domain = environment.api_url;
  }

  /**
   * Create a GET request
   *
   * @param {string} endpoint
   * @param {boolean} json
   * @param {boolean} auth
   * @param {boolean} internal
   * @returns {Observable<Response>}
   */
  GET(endpoint: string, json = true, auth = true, internal = true) {
    const service = auth ? this.auth_http : this.http;

    return service.get(internal ? this.domain + endpoint : endpoint)
      .map(res => json ? res.json() : res);
  }

  /**
   * Create a POST request
   *
   * @param {string} endpoint
   * @param {Object} data
   * @param {boolean} json
   * @param {boolean} auth
   * @returns {Observable<Response>}
   */
  POST(endpoint: string, data: object = {}, json = true, auth = true) {
    const service = auth ? this.auth_http : this.http;

    return service.post(this.domain + endpoint, data)
      .map(res => res.json());
  }

  /**
   * Create PUT request
   *
   * @param {string} endpoint
   * @param {Object} data
   * @param {boolean} json
   * @param {boolean} auth
   * @returns {Observable<Response>}
   */
  PUT(endpoint: string, data: object = {}, json = true, auth = true) {
    const service = auth ? this.auth_http : this.http;

    return service.put(this.domain + endpoint, data)
      .map(res => res.json());
  }

  /**
   * Create a PATCH request
   *
   * @param {string} endpoint
   * @param {Object} data
   * @param {boolean} json
   * @param {boolean} auth
   * @returns {Observable<Response>}
   */
  PATCH(endpoint: string, data: object = {}, json = true, auth = true) {
    const service = auth ? this.auth_http : this.http;

    return service.patch(this.domain + endpoint, data)
      .map(res => res.json());
  }

  /**
   * Create a DELETE request
   *
   * @param {string} endpoint
   * @param {object} data
   * @param {boolean} json
   * @param {boolean} auth
   * @returns {Observable<Response>}
   */
  DELETE(endpoint: string, data: object = {}, json = true, auth = true) {
    const service = auth ? this.auth_http : this.http;

    return service.delete(this.domain + endpoint, new RequestOptions({ body: data }))
      .map(res => res.json());
  }

  /**
   * Authenticate with the API
   *
   * @param {Object} data
   * @returns {Observable<any>}
   */
  login(data: object) {
    return this.http.post(this.domain + '/auth/login', data)
      .map(res => res.json());
  }
}
