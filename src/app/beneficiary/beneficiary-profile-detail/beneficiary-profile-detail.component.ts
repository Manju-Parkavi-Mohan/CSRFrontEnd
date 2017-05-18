import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BeneficiaryProfile } from '../model/beneficiaryProfile.interface';
import { BeneficiaryService } from '../beneficiary.service';
import { Beneficiary } from '../model/beneficiary.interface';
import { AppService } from '../../app.service';

@Component({
    moduleId: module.id,
    selector: 'beneficiary-profile',
    templateUrl: 'beneficiary-profile-detail.component.html',
    styleUrls: ['beneficiary-profile-detail.component.css']
})
export class BeneficiaryProfileDetailComponent implements OnInit{
    noneUpdated: boolean = true;
    @Input() beneficiaryProfile: BeneficiaryProfile;
    beneficiary: Beneficiary  = {
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
    form: FormGroup;
    errorMessage: string;
    name = 'Manju';
    constructor(private _commonService: AppService, fb: FormBuilder, private _route: ActivatedRoute, 
    private _router: Router, private _service: BeneficiaryService) {
            this.form = fb.group({
            'name': ['', Validators.compose([Validators.required])],
            'secretaryName': ['', Validators.required],
            'address':['', Validators.required],
            'city': ['', Validators.required],
            'state': ['', Validators.required],
            'phoneNo': ['', Validators.required],
            'panNo': ['', Validators.required],
            'vetting': ['', Validators.required],
            'status': ['', Validators.required]
        });
        }
    ngOnInit() {
        console.log(this.beneficiaryProfile);
        this.form.controls['name'].setValue(this.beneficiaryProfile.benficiaryName);
        this.form.controls['secretaryName'].setValue(this.beneficiaryProfile.benficiarySecretaryName);
        this.form.controls['address'].setValue(this.beneficiaryProfile.benficiaryAddress);
        this.form.controls['city'].setValue(this.beneficiaryProfile.benficiaryCity);
        this.form.controls['state'].setValue(this.beneficiaryProfile.benficiaryState);
        this.form.controls['phoneNo'].setValue(this.beneficiaryProfile.benficiaryPhoneNumber);
        this.form.controls['panNo'].setValue(this.beneficiaryProfile.panNumber);
        this.form.controls['vetting'].setValue(this.beneficiaryProfile.vetting);
        this.form.controls['status'].setValue(this.beneficiaryProfile.benficiaryStatus);
    }
     updateBeneficiary() {
        console.log(JSON.stringify(this.beneficiary));
        console.log('Inside update beneficiary');
        //this.beneficiary.beneficiaryProfile=this.form.value;
        this.beneficiary.beneficiaryProfile.benficiaryName = this.form.controls['name'].value;
        this.beneficiary.beneficiaryProfile.benficiaryAddress = this.form.controls['address'].value;
        this.beneficiary.beneficiaryProfile.benficiarySecretaryName = this.form.controls['secretaryName'].value;
        this.beneficiary.beneficiaryProfile.benficiaryCity = this.form.controls['city'].value;
        this.beneficiary.beneficiaryProfile.benficiaryState = this.form.controls['state'].value;
        this.beneficiary.beneficiaryProfile.benficiaryPhoneNumber = this.form.controls['phoneNo'].value;
        this.beneficiary.beneficiaryProfile.panNumber = this.form.controls['panNo'].value;
        this.beneficiary.beneficiaryProfile.vetting = this.form.controls['vetting'].value;
        this.beneficiary.beneficiaryProfile.benficiaryStatus = this.form.controls['status'].value;
        console.log(JSON.stringify(this.beneficiary));
        this._service.postBeneficiary(this.beneficiary)
        .subscribe(data => {
            console.log(data);
        this._commonService.hideLoader();
    });
    }
}
