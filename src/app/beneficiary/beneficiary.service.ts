import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Uploader } from 'angular2-http-file-upload';
import { UploadItem } from 'angular2-http-file-upload';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {BeneficiaryProfile} from './model/beneficiaryProfile.interface';
import {Beneficiary} from './model/beneficiary.interface';

@Injectable()
export class BeneficiaryService {
    private serverName= 'http://w0016en0v:8080';
    private beneficiaryListUrl= this.serverName + '/CSR/beneficiaries'; // '../api/json/beneficiary/bene.json';
    private docUploadUrl= '../api/json/beneficiary/dummy.json';
    private beneficiaryPostUrl= this.serverName + '/CSR/beneficiary';

    constructor(private _http: Http) {
    }

    getBeneficiaries(): Observable<BeneficiaryProfile[]> {
        console.log('Inside beneficiary list');
        return this._http.get(this.beneficiaryListUrl)
        .map((response: Response) => response.json())
        .do(data => console.log('All ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getBeneficiary(id: number): Observable<Beneficiary> {
        console.log('Inside beneficiary detail service');
        const url = 'http://w0016en0v:8080/CSR/beneficiaries/' + id;
        return this._http.get(url)
        .map((response: Response) => response.json())
        .do(data => console.log('Beneficiary detail is ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    postBeneficiary(beneficiary: Beneficiary): Observable<any> {
        console.log(JSON.stringify(beneficiary));
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this._http.post(this.beneficiaryPostUrl, beneficiary, options)
        .map(res => res.json())
        .do(data => console.log('Returned response for updating benficiary detail is ' + JSON.stringify(data)));
    }

    postDocument(document: File): Observable<any> {
        console.log('Document name is ' + document.name);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this._http.put(this.docUploadUrl, document, options)
        .map(res => res.json());
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
