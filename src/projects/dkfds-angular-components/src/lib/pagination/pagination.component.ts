import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'fds-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input("current-page")
  public currentPage: number = 1;
  
  @Input("page-count")
  public pageCount: number = 1;

  @Output()
  public change: EventEmitter<PageChangeEvent> = new EventEmitter();

  options: IPaginationOption[] = [];
  isFirstPage: boolean = false;
  isLastPage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setOptions();
  }

  getAriaCurrent(item: IPaginationOption): string | null {
    return item.isCurrent ? 'page' : null;
  }

  setOptions(): void {
    this.isFirstPage = this.currentPage == 1;
    this.isLastPage = this.currentPage == this.pageCount;
    // debugger;
    if (this.pageCount < 8) {
      this.options = [...new Array(this.pageCount).fill(0)]
        .map((x, i) => {
          return { number: i + 1, isCurrent: this.currentPage == i + 1 };
        });
    } else {
      const res: IPaginationOption[] = [{ number: 1, isCurrent: this.currentPage == 1 }];
      if (this.currentPage <= 3) {
        res.push(...[
          { number: 2, isCurrent: this.currentPage == 2 },
          { number: 3, isCurrent: this.currentPage == 3 },
          { number: 4, isCurrent: this.currentPage == 4 },
          { number: 5, isCurrent: this.currentPage == 5 },
          { number: null, isCurrent: false },
          { number: this.pageCount, isCurrent: false },
        ].slice(0, this.pageCount - 1));
      } else if (this.currentPage >= this.pageCount- 3) {
        res.push(...[
          { number: null, isCurrent: false },
          { number: this.pageCount - 4, isCurrent: this.currentPage == this.pageCount - 4 },
          { number: this.pageCount - 3, isCurrent: this.currentPage == this.pageCount - 3 },
          { number: this.pageCount - 2, isCurrent: this.currentPage == this.pageCount - 2 },
          { number: this.pageCount - 1, isCurrent: this.currentPage == this.pageCount - 1 },
          { number: this.pageCount, isCurrent: this.currentPage == this.pageCount },
        ]);
      } else {
        res.push(...[
          { number: null, isCurrent: false },
          { number: this.currentPage - 1, isCurrent: false },
          { number: this.currentPage, isCurrent: true },
          { number: this.currentPage + 1, isCurrent: false },
          { number: null, isCurrent: false },
          { number: this.pageCount, isCurrent: false },
        ]);
      }
      this.options = res;
    }
  }

  public onClick(ev: Event, option: IPaginationOption): void {
    ev.preventDefault();
    ev.stopPropagation();
    if (option.number == null || option.isCurrent)
      return;
    
    this.currentPage = option.number;
    this.setOptions();
    
    const event = Object.assign({}, ev) as PageChangeEvent;
    event.pageNumber = option.number;
    this.change.emit(event);
  }

  
}
interface IPaginationOption {
  number: number | null;
  isCurrent: boolean;
}

export class PageChangeEvent extends Event {
  public pageNumber!: number;
}