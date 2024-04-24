import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent {
    public title: string = 'Angular bases';
    public counter: number = 10;

    increment(value: number): void {
        this.counter = this.counter + value;
    }

    decrement(value: number): void {
        this.counter = this.counter - value;
    }

    reset(): void {
        this.counter = 10;
    }
}