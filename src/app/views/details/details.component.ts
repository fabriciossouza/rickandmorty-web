import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  data: any;

  episodeList = [{
    id: 28,
    name: 'The Ricklantis Mixup',
    air_date: 'September 10, 2017',
    episode: {
      season: 'S03',
      number: 'E07',
    },
  },{
    id: 28,
    name: 'The Ricklantis Mixup',
    air_date: 'September 10, 2017',
    episode: {
      season: 'S03',
      number: 'E07',
    },
  },{
    id: 28,
    name: 'The Ricklantis Mixup',
    air_date: 'September 10, 2017',
    episode: {
      season: 'S03',
      number: 'E07',
    },
  },{
    id: 28,
    name: 'The Ricklantis Mixup',
    air_date: 'September 10, 2017',
    episode: {
      season: 'S03',
      number: 'E07',
    },
  },{
    id: 28,
    name: 'The Ricklantis Mixup',
    air_date: 'September 10, 2017',
    episode: {
      season: 'S03',
      number: 'E07',
    },
  }]

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCharacterById();
  }

  private getCharacterById() {
    this.activatedRoute.params.subscribe((params: any) => this.getCharacterDetails(params.id))
  }

  private getCharacterDetails(id: number) {
    this.charactersService.getCharacterDetails(id)
      .subscribe((res: any) => this.data = res)
  }
}
