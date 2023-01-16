import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  characterList = [];
  page = 1;
  hasNextPage = false;
  hasPreviousPage = false;
  searchControl = null;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getChars(this.page);
  }

  searchCharacter() {
    this.getChars(1);
  }

  goToPreviousPage() {
    if (this.hasPreviousPage) {
      this.getChars(this.page - 1);
    }
  }

  goToNextPage() {
    if (this.hasNextPage) {
      this.getChars(this.page + 1);
    }
  }

  private getChars(requestPage: number) {
    const params = { page: requestPage, name: this.searchControl || '' };
    this.charactersService.getCharacters(params)
      .subscribe((res: any) => {
        this.page = requestPage;
        this.hasNextPage = !!res.info.next;
        this.hasPreviousPage = !!res.info.prev;
        this.characterList = res.characters;
      })
  }
}
