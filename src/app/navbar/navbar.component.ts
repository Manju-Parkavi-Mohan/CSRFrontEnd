import {Component,Input} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'] 
})
export class NavBarComponent {
    isCollapsed: boolean= true;
    bgColor: string = "white";
    active: string;
    toggleCollapse(): void {
        console.log('Collapse is '+this.isCollapsed)
        this.isCollapsed= !this.isCollapsed;
    }
}