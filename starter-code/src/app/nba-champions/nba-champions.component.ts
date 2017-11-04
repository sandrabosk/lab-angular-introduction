import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.component.html',
  styleUrls: ['./nba-champions.component.css']
})
export class NbaChampionsComponent implements OnInit {
  champions: Object[] = [
    {
      year: `2015 - 2016`,
      champName: 'Cleveland Cavaliers',
      photo: `http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png`,
      best_palyers: [ 'Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao' ],
    },
    {
      year: `2014 - 2015`,
      champName: 'Golden State Warriors',
      photo: `http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/gsw.png`,
      best_palyers: [ 'Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli' ],
    },
    {
      year: `2013 - 2014`,
      champName: 'San Antonio Spurs',
      photo: 'http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
      best_palyers: [ 'Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter' ],
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
