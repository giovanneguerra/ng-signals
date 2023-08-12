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
  selectedVehicle = signal<Vehicle>({id: 1, name: 'AT-AT', price: 10000});
  vehicles = signal<Vehicle[]>([]);
  exPrice = computed(() => this.selectedVehicle().price * this.quantity());
  qtyEff = effect(() => console.log("Latests quantity:", this.quantity()));

    constructor() {
      this.quantity.update(qty => qty *2);
      this.selectedVehicle.mutate(v => v.price = v.price + (v.price *.2));
    }

  ngOnInit(): void {
  }

  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
    // this.quantity.set(5);
    // this.quantity.set(42);
  }
}
