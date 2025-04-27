import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private mockDataService: MockDataService) { }

  getProducts(): Observable<Product[]> {
    return of(this.mockDataService.getProducts());
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.mockDataService.getProductById(id));
  }

  searchProducts(query: string): Observable<Product[]> {
    return of(this.mockDataService.searchProducts(query));
  }
} 