import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    public categories = [];
    public featuredProducts = [];
    public bestSellProducts = [];

    constructor(private data: DataService) { }

    ngOnInit() {
        this.categories = this.data.getCategories();
        this.featuredProducts = this.data.getFeaturedProducts();
        this.bestSellProducts = this.data.getBestSellProducts();
    }
}
