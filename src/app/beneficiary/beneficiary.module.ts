import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { Uploader } from 'angular2-http-file-upload';
import { PopoverModule } from 'ng2-pop-over';
import { BsDropdownModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap'

import { BeneficiaryRoutingModule } from './beneficiary-routing.module';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryDetailComponent } from './beneficiary-detail/beneficiary-detail.component';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';
import { BeneficiaryProfileDetailComponent } from './beneficiary-profile-detail/beneficiary-profile-detail.component';
import { BeneficiaryDocumentComponent } from './beneficiary-document/beneficiary-document.component';
import { BeneficiaryListFilterPipe } from './beneficiary-list-filter-pipe';
@NgModule({
    imports: [
        BeneficiaryRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        PaginationModule.forRoot()
        ],
    declarations: [
        BeneficiaryDetailComponent,
        BeneficiaryListComponent,
        BeneficiaryProfileDetailComponent,
        BeneficiaryDocumentComponent,
        BeneficiaryListFilterPipe
        ],
    providers: [
        Uploader,
        BeneficiaryService
        ]
})
export class BeneficiaryModule{

}