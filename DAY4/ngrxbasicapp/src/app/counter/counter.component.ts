import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrementCount,
  incrementCount,
} from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  _count: Observable<number>;
  constructor(public store: Store<{ count: number }>) {
    this._count = this.store.select('count'); // selector
  }

  IncrementCountHandler() {
    // dispatch an action
    this.store.dispatch(incrementCount());
  }
  DecrementCountHandler() {
    this.store.dispatch(decrementCount());
  }
}
