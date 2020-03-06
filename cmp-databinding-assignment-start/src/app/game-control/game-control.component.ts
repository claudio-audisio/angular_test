import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameStarted = false;
  emitterId;
  @Output() newNumber = new EventEmitter<{newNumber: number}>();
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  startStopGamed() {
    this.gameStarted = !this.gameStarted;

    if (this.gameStarted) {
      this.emitterId = setInterval(() => {
        this.newNumber.emit({newNumber: ++this.lastNumber});
      }, 1000);
    } else {
      if (this.emitterId) {
        clearInterval(this.emitterId);
      }
    }
  }

  onNewNumber() {

  }
}

