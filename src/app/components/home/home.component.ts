import { Component } from '@angular/core';
import { menus } from 'src/app/shared/database/database.array';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public expandedMenu: boolean = false;
    public menus = menus;
    public menuSeleted = menus[0];
    public farmSelected;

    constructor() {
        this.menuSeleted.selected = true;
    }

    public expandSideMenu(): void {
        this.expandedMenu = !this.expandedMenu;
    }

    public expandMenu(menuScreen): void {
        menus.map(menu => {
            if (menu.order !== menuScreen.order) {
                menu.selected = false;
                menu.subMenus.map(subMenu => subMenu.selected = false);
            }
        });

        menuScreen.selected = !menuScreen.selected;
        this.menuSeleted = menuScreen;
        this.farmSelected = null;
    }

    public selectFarm(menu, farm): void {
        this.farmSelected = null;
        menu.subMenus.map(subMenu => {
            if (subMenu.name !== farm.name) {
                subMenu.selected = false;
            }
        });

        farm.selected = !farm.selected;
        this.farmSelected = farm;
    }
}
