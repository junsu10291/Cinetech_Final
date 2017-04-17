import { Component } from '@angular/core'

@Component ({
    selector: 'rate-chart',
    templateUrl: './rate.component.html'
})

export class RateComponent {
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels:string[] = ['1', '2', '3', '4', '5'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    // need to dynamically get data from the user
    {data: [65, 59, 80, 81, 56, 55], label: 'Series A'}]
 
  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }
 
  public chartHovered(e:any):void {
    //console.log(e);
  }
 
 /**
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */

}