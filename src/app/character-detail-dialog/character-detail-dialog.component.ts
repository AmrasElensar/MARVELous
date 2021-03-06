import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Character} from '../models/character';

@Component({
  selector: 'app-character-detail-dialog',
  templateUrl: './character-detail-dialog.component.html',
  styleUrls: ['./character-detail-dialog.component.scss']
})
export class CharacterDetailDialogComponent implements OnInit {
  character: Character;
  characterThumbnailUrl: string;
  wikiUrl: string;
  comicsUrl: string;
  comicPanelOpenState: boolean;
  storiesPanelOpenState: boolean;
  seriesPanelOpenState: boolean;
  panelClosedDescription = 'Detail Pages';
  comicPanelOpenDescription = `Click to browse to the comic's detail page`;
  storiesPanelOpenDescription = `Click to browse to the storyline's detail page`;
  seriesPanelOpenDescription = `Click to browse to the series' detail page`;

  constructor(@Inject(MAT_DIALOG_DATA) data,
              public dialogRef: MatDialogRef<CharacterDetailDialogComponent>) {
    this.character = data.character;
  }

  ngOnInit() {
    this.characterThumbnailUrl = `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
    this.setUrls();
  }

  setUrls = () => {
    const wikiUrl = this.character.urls.filter(url => url.type === 'wiki')[0];
    const comicsUrl = this.character.urls.filter(url => url.type === 'comiclink')[0];

    if (wikiUrl) {
      this.wikiUrl = wikiUrl.url;
    } else {
      this.wikiUrl = undefined;
    }

    if (comicsUrl) {
      this.comicsUrl = comicsUrl.url;
    } else {
      this.comicsUrl = undefined;
    }
  };

  closeDialog = () => {
    this.dialogRef.close();
  };
}
