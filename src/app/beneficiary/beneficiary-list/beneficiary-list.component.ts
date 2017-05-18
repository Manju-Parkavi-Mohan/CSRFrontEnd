import { Component,OnInit } from '@angular/core';
import { BeneficiaryProfile } from '../model/beneficiaryProfile.interface';
import { BeneficiaryService } from '../beneficiary.service';
import { AppService } from '../../app.service';
@Component({
    moduleId: module.id,
    selector: 'beneficiary',
    templateUrl: 'beneficiary-list.component.html',
    styleUrls: ['beneficiary-list.component.css']
})
export class BeneficiaryListComponent implements OnInit {
    public maxSize:number = 5;
    public totalItems: number = 164;
    public currentPage: number = 4;
    beneficiaries: BeneficiaryProfile[];
    errorMessage: string;
    constructor(private _service: BeneficiaryService, private _commonService: AppService) {
    }
    ngOnInit(): void {
        this._commonService.showLoader();
        this._service.getBeneficiaries()
        .subscribe(beneficiaries => {
            this.beneficiaries = beneficiaries;
            this._commonService.hideLoader();
            console.log('Returned list of beneficiaries and they are ' + JSON.stringify(this.beneficiaries[0]));
        },
        error => this.errorMessage = <any>error);
    }
    public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
}
