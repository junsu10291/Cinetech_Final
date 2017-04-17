import { Component, OnInit } from "@angular/core"

@Component ({
    selector: 'app-panel',
    templateUrl: './panel.component.html'
})
  
export class PanelComponent implements OnInit {
    movies = []
    ngOnInit() {
        for (let i = 0; i < 15; i++) {
            this.movies.push({"id": i, "fill": false});
        }
    }

}

