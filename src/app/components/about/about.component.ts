import { Component } from '@angular/core';
import { about, menus } from 'src/app/shared/database/database.array';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    public about = about;
    constructor() { }
}
