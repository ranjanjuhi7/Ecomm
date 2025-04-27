import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Latest smartphone with advanced features',
      price: 999.99,
      imageUrl: 'https://via.placeholder.com/200',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Laptop Pro',
      description: 'High-performance laptop for professionals',
      price: 1499.99,
      imageUrl: 'https://via.placeholder.com/200',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling wireless headphones',
      price: 199.99,
      imageUrl: 'https://via.placeholder.com/200',
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health tracking',
      price: 299.99,
      imageUrl: 'https://via.placeholder.com/200',
      category: 'Electronics'
    }
  ];

  private users: User[] = [
    {
      id: 1,
      email: 'user@example.com',
      password: 'password123',
      name: 'John Doe'
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  searchProducts(query: string): Product[] {
    return this.products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  validateUser(email: string, password: string): User | undefined {
    return this.users.find(user => 
      user.email === email && user.password === password
    );
  }

  registerUser(user: User): boolean {
    if (this.users.some(u => u.email === user.email)) {
      return false;
    }
    user.id = this.users.length + 1;
    this.users.push(user);
    return true;
  }
} 