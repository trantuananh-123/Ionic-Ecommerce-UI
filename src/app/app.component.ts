import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { menuController } from '@ionic/core';
import { UtilService } from './services/utils.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

    public isMenuEnabled: boolean = true;
    public selectedIndex = 0;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private util: UtilService,
        private router: Router,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        this.selectedIndex = 1;

        this.util.getMenuState().subscribe((menuState: any) => {
            this.isMenuEnabled = menuState;
        });
    }

    navigate(path: any, selectedId: any) {
        this.selectedIndex = selectedId;
        this.router.navigate([path]);
    }

    close() {
        menuController.toggle();
    }
}
