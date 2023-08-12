import { Component, OnInit, computed, signal, effect } from '@angular/core';
import { Vehicle } from './models/vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-signals';
  quantity = signal<number>(1);
  qtyAvailable = signal<number[]>([1,2,3,4,5,6]);
  selectedVehicle = signal<Vehicle>({id: 1,
    name: 'AT-AT', price: 19416.13});
  vehicles = signal<Vehicle[]>([]);
  exPrice = computed(() =>
    this.selectedVehicle().price * this.quantity());
  qtyEff = effect(() => console.log(this.quantity()));

    constructor() {
      effect(() => console.log(this.selectedVehicle()));
    }

  x = signal(5);
  y = signal(3);
  z = computed(() => this.x() + this.y());

  ngOnInit(): void {
    console.log(this.z());
    this.x.set(10);
    console.log(this.z());
  }

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }

  onSomeEvent(qty: number) {
    this.quantity.set(qty);
    this.quantity.set(5);
    this.quantity.set(42);
  }
}
