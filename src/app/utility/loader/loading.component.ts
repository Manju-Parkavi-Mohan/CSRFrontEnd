import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    moduleId: module.id,
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls:['./loading.component.css']
})
export class LoadingComponent {
     isLoading: boolean = true;
    constructor(private _loading: AppService) {
        this._loading.startLoader.subscribe((loading) => {
        this.isLoading = loading;
    } );
  }
}
