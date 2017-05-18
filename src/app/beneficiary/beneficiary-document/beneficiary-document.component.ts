import { Component,Input,ViewChild  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { ModalDirective } from 'ng2-bootstrap/modal';

import { Beneficiary } from '../model/beneficiary.interface';
import { BeneficiaryService } from '../beneficiary.service';
@Component({
    moduleId: module.id,
    selector: 'beneficiary-document',
    templateUrl: 'beneficiary-document.component.html'
})

export class BeneficiaryDocumentComponent{
    @Input() beneficiary:Beneficiary;
    @ViewChild('childModal') public childModal:ModalDirective;
    docImage:string;
    docToUpload:File;
    errorMessage:string;

    constructor(private _service:BeneficiaryService){
    }

    public showChildModal():void {
        this.childModal.show();
        console.log(this.beneficiary);
    }
 
    public hideChildModal():void {
        this.childModal.hide();
    }

    fileChangeEvent(fileInput: any){
        this.docToUpload = <File> fileInput.target.files[0];
        console.log(this.docToUpload.name);
    }

    uploadDoc():void{
        this._service.postDocument(this.docToUpload)
        .subscribe(error=>this.errorMessage=error);
    }
}
