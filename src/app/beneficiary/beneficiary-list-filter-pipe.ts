import { Pipe, PipeTransform } from '@angular/core';
import { BeneficiaryProfile } from './model/beneficiaryProfile.interface';
@Pipe({
    name: 'beneficiaryListFilter'
})
export class BeneficiaryListFilterPipe implements PipeTransform{
    transform( value:BeneficiaryProfile[], cityFilterBy: string, nameFilterBy: string, statusFilterBy: string ): BeneficiaryProfile[] {
        if ( nameFilterBy) {
            console.log(nameFilterBy ? value.filter((beneficiary: BeneficiaryProfile) =>
            beneficiary.benficiaryName.toLocaleLowerCase().indexOf(nameFilterBy) !== -1) : value);
            value = value.filter((beneficiary: BeneficiaryProfile) =>
            beneficiary.benficiaryName.toLocaleLowerCase().indexOf(nameFilterBy.toLocaleLowerCase()) !== -1);
        }
        if (cityFilterBy ) {
            if (cityFilterBy.toLocaleLowerCase() === 'all') {
                console.log('Inside clear filter');
                cityFilterBy = '';
            }
            console.log('City filter ' + cityFilterBy);
            console.log(cityFilterBy ? value.filter((beneficiary: BeneficiaryProfile) =>
            beneficiary.benficiaryCity.toLocaleLowerCase().indexOf(cityFilterBy) !== -1) : value);
            value = value.filter((beneficiary: BeneficiaryProfile) =>
            beneficiary.benficiaryCity.toLocaleLowerCase().indexOf(cityFilterBy.toLocaleLowerCase()) !== -1);
            console.log(value);
        }
        if (statusFilterBy) {
            if (statusFilterBy.toLocaleLowerCase() === 'all') {
                console.log('Inside clear filter');
                statusFilterBy = '';
            }
            if (statusFilterBy.toLocaleLowerCase() === 'inactive') {
                statusFilterBy = 'I';
            }
            if (statusFilterBy.toLocaleLowerCase() === 'active') {
                statusFilterBy = 'A';
            }
            console.log(statusFilterBy ? value.filter((beneficiary: BeneficiaryProfile) =>
            beneficiary.benficiaryStatus.toLocaleLowerCase().indexOf(statusFilterBy) !== -1) : value);
            value = value.filter((beneficiary: BeneficiaryProfile) =>
            beneficiary.benficiaryStatus.toLocaleLowerCase().indexOf(statusFilterBy.toLocaleLowerCase()) !== -1);
        }
        return value;
    }
}