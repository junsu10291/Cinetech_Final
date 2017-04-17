import { Component } from '@angular/core';
 
@Component({
  selector: 'actor-chart',
  templateUrl: './actor.component.html'
})
export class ActorComponent {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [1.2, 3.4, 4.2, 4.5, 2.3, 2.1], label: 'Favorite Actors'},
  ];

  public lineChartLabels:Array<any> = ['Tom Hanks', 'Junsu Choi', 'Jongje Kim', 'Hyunjun Kim', 'Hongjun Choi', 'Daehyun Kim'];
  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }
 
  public chartHovered(e:any):void {
    //console.log(e);
  }
}