import { Component } from '@angular/core';

@Component({
  selector: 'region-chart',
  templateUrl: './region.component.html'
})
export class RegionComponent {
  // need to get data dynamically
  public doughnutChartLabels:string[] = ['U.S.', 'Asia', 'Europe', 'Latin America', 'Other'];
  public doughnutChartData:number[] = [400, 300, 150, 100, 50];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }

  public chartHovered(e:any):void {
    //console.log(e);
  }
}