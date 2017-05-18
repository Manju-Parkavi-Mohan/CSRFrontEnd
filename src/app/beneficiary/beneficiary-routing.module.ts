import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';
import { BeneficiaryDetailComponent } from './beneficiary-detail/beneficiary-detail.component';

@NgModule({
    imports:[
        RouterModule.forChild([
            {path:'beneficiary/:id',component:BeneficiaryDetailComponent},
            {path:'beneficiary',component:BeneficiaryDetailComponent}
        ])
    ],
    exports:[RouterModule]
})
export class BeneficiaryRoutingModule{}