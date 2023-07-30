import { Component } from '@angular/core';

interface work {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent {
  works: work[] = [
    {value: 'work-0', viewValue: 'Work 1'},
    {value: 'work-1', viewValue: 'Work 2'},
    {value: 'work-2', viewValue: 'Work 3'}
  ];
}
