import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-signals';

  x = signal(5);
  y = signal(3);
  z = computed(() => this.x() + this.y());

  ngOnInit(): void {
    console.log(this.z());
    this.x.set(10);
    console.log(this.z());
  }
}
