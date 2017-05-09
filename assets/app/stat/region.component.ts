import { Component, OnInit } from '@angular/core';
import { PersonalService } from "../personal/personal.service";
import { MovieService } from "../movies/movie.service";

@Component({
  selector: 'region-chart',
  templateUrl: './region.component.html'
})
export class RegionComponent implements OnInit {
    targetUser : any;
    movieRatings = [];
    nation = {}
    countries = [];
    rate_count = [];
    id_list = [];
    idList = {};


    constructor(private personalService : PersonalService, private movieService : MovieService) {}

    ngOnInit() {
        console.log(localStorage.getItem('userId'))
        this.personalService.getUser(localStorage.getItem('userId'))
            .subscribe(
                (targetUser: any) => {
                    this.targetUser = targetUser;
                    this.movieRatings = targetUser[0].movieRatings;
                    for (let i = 0; i < this.movieRatings.length; i++) {
                        this.id_list.push(this.movieRatings[i].movie)
                    }
                    this.idList['id'] = this.id_list
                    console.log("regioncomponent!!!!!!!!!");

                    this.movieService.getMovies(this.idList).subscribe(
                        result => {
                            for (let i=0; i < result.length; i++) {
                              let thisMovie = result[i];
                              let country = thisMovie.country;
                              if (country in this.nation) {
                                this.nation[country] += 1;
                              } else {
                                this.nation[country] = 1;
                              } 

                              console.log("printing this objet!!");
                              console.log(this.nation);

                              this.countries = [];
                              this.rate_count = [];

                              for (var key in this.nation) {
                                console.log("nation");
                                this.countries.push(key)
                                this.rate_count.push(this.nation[key])
                              }

                              console.log("LISTLSITLSITSLTISTISLTISLTISLTISL");
                              console.log(this.countries);
                              console.log(this.rate_count);

                              this.doughnutChartLabels = this.countries;
                              this.doughnutChartData = this.rate_count;
                            }
                            console.log(result);
                        })     
                    });
                }

  // need to get data dynamically
  public doughnutChartLabels:string[] = ['United Kingdom', 'United States of America', 'New Zealand', 'Canada', 'Japan'];
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