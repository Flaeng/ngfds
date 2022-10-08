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
  isFirstPage = false;
  isLastPage = false;

  ngOnInit(): void {
    this.setOptions();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.setOptions();
  }

  getAriaCurrent(item: IPaginationOption): string | null {
    return item.isCurrent ? 'page' : null;
  }

  setOptions(): void {
    this.isFirstPage = this.currentPage == 1;
    this.isLastPage = this.currentPage == this.pageCount;
    this.options = this.getPageOptions();
  }

  private getPageOptions(): IPaginationOption[] {
    const res: IPaginationOption[] = [];
    const pushPageNumber = (num: number | null) =>
      res.push({ number: num, isCurrent: this.currentPage == num }) 

    if (this.pageCount <= 7) {
      for (let index = 1; index < this.pageCount + 1; index++) {
        pushPageNumber(index);     
      }
    } else {
      this.getPagesOptionsWhenMoreThan7Pages(pushPageNumber);
    }
    return res;
  }

  private getPagesOptionsWhenMoreThan7Pages(pushPageNumber: (num: number | null) => number) {
    const showDotDotDotBeforeCurrentPage = 5 <= this.currentPage;
    const showDotDotDotAfterCurrentPage = this.currentPage < this.pageCount - 3;

    const start = !showDotDotDotAfterCurrentPage
      ? this.pageCount - 4
      : showDotDotDotBeforeCurrentPage
        ? this.currentPage - 1
        : 2;
    const end = !showDotDotDotBeforeCurrentPage
      ? 5
      : showDotDotDotAfterCurrentPage
        ? this.currentPage + 1
        : this.pageCount - 1;

    pushPageNumber(1);
    if (showDotDotDotBeforeCurrentPage)
      pushPageNumber(null);

    for (let num = start; num <= end; num++) {
      pushPageNumber(num);
    }

    if (showDotDotDotAfterCurrentPage)
      pushPageNumber(null);
    pushPageNumber(this.pageCount);
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