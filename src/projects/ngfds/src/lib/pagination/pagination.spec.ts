import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PaginationComponent } from "ngfds";


describe('Pagination', () => {
    let fixture: ComponentFixture<PaginationComponent>;
    let component: PaginationComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ PaginationComponent ]
        })
        .compileComponents();
    
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    
      it("shows all options when there's 7 or fewer pages", () => {
        // Arrange
        component.pageCount = 7;

        // Act
        component.setOptions();

        // Assert
        expect(component.options).toBeTruthy();
        expect(component.options.length).toBe(7);
        expect(component.options[0].number).toBe(1);
        expect(component.options[1].number).toBe(2);
        expect(component.options[2].number).toBe(3);
        expect(component.options[3].number).toBe(4);
        expect(component.options[4].number).toBe(5);
        expect(component.options[5].number).toBe(6);
        expect(component.options[6].number).toBe(7);
    });

    it("shows some options and ... when there's 8 or more pages", () => {
        // Arrange
        component.pageCount = 8;

        // Act
        component.setOptions();

        // Assert
        expect(component.options).toBeTruthy();
        expect(component.options.length).toBe(7);
        expect(component.options[0].number).toBe(1);
        expect(component.options[1].number).toBe(2);
        expect(component.options[2].number).toBe(3);
        expect(component.options[3].number).toBe(4);
        expect(component.options[4].number).toBe(5);
        expect(component.options[5].number).toBe(null);
        expect(component.options[6].number).toBe(8);
    });

    it("shows ... in the correct position when page 4 is selected", () => {
        // Arrange
        component.pageCount = 8;
        component.currentPage = 4;

        // Act
        component.setOptions();

        // Assert
        expect(component.options).toBeTruthy();
        expect(component.options.length).toBe(7);
        expect(component.options[0].number).toBe(1);
        expect(component.options[1].number).toBe(null);
        expect(component.options[2].number).toBe(3);
        expect(component.options[3].number).toBe(4);
        expect(component.options[4].number).toBe(5);
        expect(component.options[5].number).toBe(null);
        expect(component.options[6].number).toBe(8);
    });

    it("shows ... in the correct position when page 8 is selected", () => {
        // Arrange
        component.pageCount = 8;
        component.currentPage = 8;

        // Act
        component.setOptions();

        // Assert
        expect(component.options).toBeTruthy();
        expect(component.options.length).toBe(7);
        expect(component.options[0].number).toBe(1);
        expect(component.options[1].number).toBe(null);
        expect(component.options[2].number).toBe(4);
        expect(component.options[3].number).toBe(5);
        expect(component.options[4].number).toBe(6);
        expect(component.options[5].number).toBe(7);
        expect(component.options[6].number).toBe(8);
    });

    it("can identify first page when page 1 is selected", () => {
        // Arrange
        component.pageCount = 2;
        component.currentPage = 1;

        // Act
        component.setOptions();

        // Assert
        expect(component.isFirstPage).toBeTrue();
    });

    it("can identify first page when page 1 is not selected", () => {
        // Arrange
        component.pageCount = 2;
        component.currentPage = 2;

        // Act
        component.setOptions();

        // Assert
        expect(component.isFirstPage).toBeFalse();
    });

    it("can identify last page when the last page is selected", () => {
        // Arrange
        component.pageCount = 4;
        component.currentPage = 4;

        // Act
        component.setOptions();

        // Assert
        expect(component.isLastPage).toBeTrue();
    });

    it("can identify last page when the last page is not selected", () => {
        // Arrange
        component.pageCount = 4;
        component.currentPage = 2;

        // Act
        component.setOptions();

        // Assert
        expect(component.isLastPage).toBeFalse();
    });

});