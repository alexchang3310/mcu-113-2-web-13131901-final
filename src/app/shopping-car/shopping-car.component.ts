import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shopping-car',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './shopping-car.component.html',
  styleUrls:['./shopping-car.component.scss'],
})
export class ShoppingCarComponent {
  user = {
    name: '',
    address: '',
    phone: ''
  };

  cartItems = [
    { name: 'C 產品', price: 1580, quantity: 1 }
  ];

  totalPrice = 1580;

  updateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateTotal();
  }

  submitOrder() {
    if (!this.user.name || !this.user.address || !this.user.phone) {
      alert('請填寫完整資訊');
      return;
    }

    // 假裝送出訂單
    console.log('訂單已送出', this.user, this.cartItems);
    alert('訂單已送出');
  }
}