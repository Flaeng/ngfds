import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'fds-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input('current-page')
  public currentPage: number = 1;

  @Input('page-count')
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
    const pageNumber = (num: number | null) => {
      return { number: num, isCurrent: this.currentPage == num };
    };

    if (this.pageCount <= 7) {
      const res: IPaginationOption[] = [];
      for (let index = 1; index < this.pageCount + 1; index++) {
        res.push(pageNumber(index));
      }
      return res;
    }
    
    return this.generatePageOptionsWhenMoreThan7pages(pageNumber);
  }

  private generatePageOptionsWhenMoreThan7pages(pageNumber: (num: number | null) => { number: number | null; isCurrent: boolean; }) {
    const showDotDotDotBeforeCurrentPage = 5 <= this.currentPage;
    const showDotDotDotAfterCurrentPage = this.currentPage < this.pageCount - 3;

    const { start, end } = this.getStartAndEndOfPageOptionsNumbers(showDotDotDotAfterCurrentPage, showDotDotDotBeforeCurrentPage);
    const middle = [];
    for (let num = start; num <= end; num++) {
      middle.push(pageNumber(num));
    }

    return [
      pageNumber(1),
      ...(showDotDotDotBeforeCurrentPage ? [pageNumber(null)] : []),
      ...middle,
      ...(showDotDotDotAfterCurrentPage ? [pageNumber(null)] : []),
      pageNumber(this.pageCount)
    ];
  }

  private getStartAndEndOfPageOptionsNumbers(
    showDotDotDotAfterCurrentPage: boolean,
    showDotDotDotBeforeCurrentPage: boolean
  ): { start: number, end: number } {
    let start, end;

    if (showDotDotDotAfterCurrentPage == false) {
      start = this.pageCount - 4;
    } else if (showDotDotDotBeforeCurrentPage == true) {
      start = this.currentPage - 1;
    } else {
      start = 2;
    }

    if (showDotDotDotBeforeCurrentPage == false) {
      end = 5;
    } else if (showDotDotDotAfterCurrentPage) {
      end = this.currentPage + 1;
    } else {
      end = this.pageCount - 1;
    }
    return { start, end };
  }

  public onClick(ev: Event, option: IPaginationOption): void {
    ev.preventDefault();
    ev.stopPropagation();
    if (option.number == null || option.isCurrent) return;

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
