import {Component, OnInit} from '@angular/core';
import {MarvelComicsService} from '../services/marvel-comics.service';
import {Creator} from '../models/creator';
import {CreatorCollection} from '../models/creator-collection';
import {CREATOR_ORDER_BY} from './creator-order-by';

@Component({
  selector: 'app-creator-overview',
  templateUrl: './creator-overview.component.html',
  styleUrls: ['./creator-overview.component.scss']
})
export class CreatorOverviewComponent implements OnInit {
  creators: Creator[];
  pageNumber = 1;
  pageSize = '12';
  pageOffset = '0';
  orderByProperty = 'lastName';
  totalPages: number;
  orderBy = CREATOR_ORDER_BY;

  constructor(private marvelComicService: MarvelComicsService) {
  }

  ngOnInit() {
    this.getCreatorsPage(1, 0);
  }

  getCreatorsPage = (pageNumber: number, pageOffset: number) => {
    this.pageNumber = pageNumber;
    this.pageOffset = pageOffset.toString();
    this.getCreators();
  };

  getCreators = () => {
    this.marvelComicService.getCreators(this.pageSize, this.pageOffset, this.orderByProperty)
      .subscribe(this.setCreatorsAndPagingData);
  };

  setCreatorsAndPagingData = (creatorCollection: CreatorCollection) => {
    this.creators = creatorCollection.data.results;
    this.totalPages = creatorCollection.data.total;
  };
}
