import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFieldComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const fakeEvent = {
    preventDefault(): void {
      return;
    },
    stopPropagation(): void {
      return;
    },
  } as Event;

  it('will show search icon as default', () => {
    // Arrange

    // Act

    // Assert
    const icon = fixture.debugElement.query(By.css('.icon-svg')).nativeElement;
    expect(icon.innerHTML).toEqual('<use xlink:href="#search"></use>');
  });

  it('will show custom icon', () => {
    // Arrange
    component.buttonIcon = 'content-copy';

    // Act
    fixture.detectChanges();

    // Assert
    const icon = fixture.debugElement.query(By.css('.icon-svg')).nativeElement;
    expect(icon.innerHTML).toEqual('<use xlink:href="#content-copy"></use>');
  });

  it('will only show text button when text is set', () => {
    // Arrange
    component.buttonText = 'Søg';

    // Act
    fixture.detectChanges();

    // Assert
    const icon = fixture.debugElement.query(By.css('.icon-svg'));
    expect(icon).toBeNull();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.innerHTML).toBe('Søg');
  });

  it('will emit search query', () => {
    // Arrange
    let searchQuery: string = '';
    component.value = 'test';
    component.search.subscribe((x) => (searchQuery = x.query));

    // Act
    component.emitSearchEvent(fakeEvent);

    // Assert
    expect(searchQuery).toBe('test');
  });
});
