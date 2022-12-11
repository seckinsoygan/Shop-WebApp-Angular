import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {

  title = "Kategori Listesi";
  categories: Category[] = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Yiyecek" },
    { id: 3, name: "Oyun" },
    { id: 4, name: "Ürün" }
  ]

}
