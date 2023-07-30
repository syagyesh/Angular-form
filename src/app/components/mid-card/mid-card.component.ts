import { Component } from '@angular/core';

interface work {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mid-card',
  templateUrl: './mid-card.component.html',
  styleUrls: ['./mid-card.component.css']
})
export class MidCardComponent {
  works: work[] = [
    {value: 'work-0', viewValue: 'Work 1'},
    {value: 'work-1', viewValue: 'Work 2'},
    {value: 'work-2', viewValue: 'Work 3'}
  ];  
}
