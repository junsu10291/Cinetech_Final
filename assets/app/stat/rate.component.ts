import { Component, Input, OnInit } from '@angular/core'
import { PersonalService } from "../personal/personal.service";

@Component ({
    selector: 'rate-chart',
    templateUrl: './rate.component.html'
})

export class RateComponent implements OnInit {
  @Input() aveRate: number[];

  targetUser : any;
  targetMovie : any;
  averageRate = [0,0,0,0,0];
  movieRatings = [];
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  constructor(private personalService : PersonalService) {}

  ngOnInit() {
    this.personalService.getUser(localStorage.getItem('userId'))
            .subscribe(
                (targetUser: any) => {
                    this.targetUser = targetUser;
                    console.log(targetUser[0].movieRatings);
                    this.movieRatings = targetUser[0].movieRatings;
                    for (let i = 0; i < this.movieRatings.length; i++) {
                        this.averageRate[this.movieRatings[i].rating-1] += 1
                    };
                   this.barChartData = [
                   {data: this.averageRate, label: 'Rating Distribution'}]
            });  
  }
  
  public barChartLabels:string[] = ['1', '2', '3', '4', '5'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    // need to dynamically get data from the user
    {data: [1, 1, 1, 1, 1], label: 'Rating Distribution'}]

  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }
 
  public chartHovered(e:any):void {
    //console.log(e);
  }
}