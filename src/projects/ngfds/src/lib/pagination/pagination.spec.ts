import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('Pagination', () => {
  let fixture: ComponentFixture<PaginationComponent>;
  let component: PaginationComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("shows all options when there's 7 or fewer pages", () => {
    // Arrange
    component.pageCount = 7;

    // Act
    component.setOptions();
    fixture.detectChanges();

    // Assert
    expect(component.options).toEqual([
      { number: 1, isCurrent: true },
      { number: 2, isCurrent: false },
      { number: 3, isCurrent: false },
      { number: 4, isCurrent: false },
      { number: 5, isCurrent: false },
      { number: 6, isCurrent: false },
      { number: 7, isCurrent: false },
    ]);
  });

  it("shows some options and ... when there's 8 or more pages", () => {
    // Arrange
    component.pageCount = 12;

    // Act
    component.setOptions();
    fixture.detectChanges();

    // Assert
    expect(component.options).toEqual([
      { number: 1, isCurrent: true },
      { number: 2, isCurrent: false },
      { number: 3, isCurrent: false },
      { number: 4, isCurrent: false },
      { number: 5, isCurrent: false },
      { number: null, isCurrent: false },
      { number: 12, isCurrent: false },
    ]);
  });

  it('shows ... in the correct position when page 4 is selected', () => {
    // Arrange
    component.pageCount = 12;
    component.currentPage = 5;

    // Act
    // debugger;
    component.setOptions();
    fixture.detectChanges();

    // Assert
    expect(component.options).toEqual([
      { number: 1, isCurrent: false },
      { number: null, isCurrent: false },
      { number: 4, isCurrent: false },
      { number: 5, isCurrent: true },
      { number: 6, isCurrent: false },
      { number: null, isCurrent: false },
      { number: 12, isCurrent: false },
    ]);
  });

  it('shows ... in the correct position when page 12 is selected', () => {
    // Arrange
    component.pageCount = 12;
    component.currentPage = 12;

    // Act
    // debugger;
    component.setOptions();
    fixture.detectChanges();

    // Assert
    expect(component.options).toEqual([
      { number: 1, isCurrent: false },
      { number: null, isCurrent: false },
      { number: 8, isCurrent: false },
      { number: 9, isCurrent: false },
      { number: 10, isCurrent: false },
      { number: 11, isCurrent: false },
      { number: 12, isCurrent: true },
    ]);
  });

  it('can identify first page when page 1 is selected', () => {
    // Arrange
    component.pageCount = 2;
    component.currentPage = 1;

    // Act
    component.setOptions();
    fixture.detectChanges();

    // Assert
    expect(component.isFirstPage).toBeTrue();
  });

  it('can identify first page when page 1 is not selected', () => {
    // Arrange
    component.pageCount = 2;
    component.currentPage = 2;

    // Act
    component.setOptions();
    fixture.detectChanges();

    // Assert
    expect(component.isFirstPage).toBeFalse();
  });

  it('can identify last page when the last page is selected', () => {
    // Arrange
    component.pageCount = 4;
    component.currentPage = 4;

    // Act
    component.setOptions();
    fixture.detectChanges();

    // Assert
    expect(component.isLastPage).toBeTrue();
  });

  it('can identify last page when the last page is not selected', () => {
    // Arrange
    component.pageCount = 4;
    component.currentPage = 2;

    // Act
    component.setOptions();
    fixture.detectChanges();

    // Assert
    expect(component.isLastPage).toBeFalse();
  });
});
