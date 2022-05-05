import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/utils.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private navController: NavController, private utilService: UtilService) { }

    ngOnInit() {
    }

    login() {
        // Enable the Side Menu
        this.utilService.setMenuState(true);
        this.navController.navigateRoot('/main', { animationDirection: 'forward' });
    }

}
