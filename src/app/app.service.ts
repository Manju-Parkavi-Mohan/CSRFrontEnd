import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
@Injectable()
export class AppService {
    private _loader = new Subject<boolean>();
    startLoader = this._loader.asObservable();
    /* Loading Service starts */
    // Showing Loader 
    showLoader() {
        console.log('Inside loader');
        this._loader.next(true);
    }

    // Hiding Loader
    hideLoader() {
        this._loader.next(false);
    }
    /* Loading Service Ends */
}
