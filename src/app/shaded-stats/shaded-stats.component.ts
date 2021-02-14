import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shaded-stats',
  templateUrl: './shaded-stats.component.html',
  styleUrls: ['./shaded-stats.component.scss']
})
export class ShadedStatsComponent implements OnInit {

  @Input('parentData') masterName!: string;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addd() {
    this.add.emit("Hey Codeevolution")
  }

}
