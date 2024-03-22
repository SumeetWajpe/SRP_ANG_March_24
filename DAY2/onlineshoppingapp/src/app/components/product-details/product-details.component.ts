import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((r: any) => (this.id = r.id));
  }
}
