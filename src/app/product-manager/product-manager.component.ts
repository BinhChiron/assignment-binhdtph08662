import { Component, OnInit } from '@angular/core';
import{Product} from '../Product';
import{ServiceService} from '../service.service';
import {data} from '../MockData';
import { from } from 'rxjs';


@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
// product: Product[];
  constructor(
    private ServiceService: ServiceService
  ) { }

  ngOnInit(): void {
  }
  // getProduct(){
  //   this.ServiceService.getProducts().subscribe(data =>{
  //     console.log(data)
  //     this.product = data;
  //   })
  // }
  products = data;
  

}
