import { Component } from '@angular/core';

@Component({
  selector: 'app-preflipkart',
  templateUrl: './preflipkart.component.html',
  styleUrls: ['./preflipkart.component.css']
})
export class PreflipkartComponent {
name: string = '';
price: number = 0;
rating: number = 0;
deliverydate: Date = new Date;
freedelivery: boolean = true;

productname: string = '';
productprice:number = 0;

products: any = [
  {name:'Apple' , price:60000 , rating:4.5, deliverydate:'12/10/2024', freedelivery:'true'},
  {name:'samsung' , price:40000 , rating:4.4, deliverydate:'9/11/2024', freedelivery:'true'}
  
];

submit(){

  let product = {

    name: this.name,
    price:this.price,
    rating:this.rating,
    deliverydate:this.deliverydate,
    freedelivery: this.freedelivery
  }

  this.products.push(product);
}
delete(i:number){
  this.products.splice(i,1)
}
pricelh(){
  this.products.sort((a:any,b:any)=>a.price-b.price)
}
pricehl(){
  this.products.sort((a:any,b:any)=>b.price-a.price)
}
ratinglh(){
  this.products.sort((a:any,b:any)=>a.rating-b.rating)
}
ratinghl(){
  this.products.sort((a:any,b:any)=>b.rating-a.rating)
}
applydiscount(){
  this.products=this.products.map((product:any) => {
    product.price=product.price/2;
    return product;
  })
}
applydeliverycharges(){
  this.products = this.products.map((product:any)=> {product.price=product.price+50;
    return product;
  })
}
totalprice(){
  var total = this.products.reduce((sum:any,product:any)=>sum+product.price,0);
  alert('Total cart price:' +total);
}

delivery(){
  this.products = this.products.filter((product:any)=> product.date == product.date<10/10/2024)
}

search1(){
  this.products = this.products.filter((product:any)=> product.name.includes(this.productname))
}
// search2(){
//   this.products = this.products.filter((product:any)=> product.price<this.price)
// }


}
