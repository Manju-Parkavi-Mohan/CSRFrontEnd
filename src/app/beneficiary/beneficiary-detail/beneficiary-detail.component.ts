import { Component, OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BeneficiaryService } from '../beneficiary.service';
import { BeneficiaryProfile } from '../model/beneficiaryProfile.interface';
import { Beneficiary } from '../model/beneficiary.interface';
import { AppService } from '../../app.service';
@Component({
    moduleId: module.id,
    templateUrl: 'beneficiary-detail.component.html'
})
export class BeneficiaryDetailComponent implements OnInit {

    beneficiary: Beneficiary;
    headerContent: string = 'Profile';
    errorMessage: string;
    beneficiaryName: string;
    beneficiaryAddress: string;
    constructor(private _commonService: AppService, private _route: ActivatedRoute, 
    private _router: Router, private _service: BeneficiaryService) {
    }

    ngOnInit(): void {
        const id = +this._route.snapshot.params['id'];
        if (!isNaN(id)) {
            this._commonService.showLoader();
            console.log('Existing Beneficiary');
            this._service.getBeneficiary(id)
            .subscribe(beneficiary => {
                this.beneficiary = beneficiary;
                this.beneficiaryName = beneficiary.beneficiaryProfile.benficiaryName;
                this.beneficiaryAddress = beneficiary.beneficiaryProfile.benficiaryAddress;
                this._commonService.hideLoader();
            },
            error => this.errorMessage = <any>error);
        }else {
            console.log('New Beneficiary');
            this.beneficiary = {
                beneficiaryProfile: {
                    benficiaryAddress: '',
                    benficiaryCity: '',
                    benficiaryId: null,
                    benficiaryName: '',
                    panNumber: null,
                    benficiaryPhoneNumber: null,
                    benficiarySecretaryName: '',
                    benficiaryState: '',
                    benficiaryStatus: '',
                    fcraNumber: '',
                    vetting: ''}};
        }
    }
    setHeaderName(content:string){
        console.log('Inside set header '+content);
        this.headerContent = content;
    }
    setHeaderNames(){
        console.log('Inside set header names');
        //this.headerContent = content;
    }
}
