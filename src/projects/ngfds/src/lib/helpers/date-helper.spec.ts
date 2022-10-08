import { DateHelper } from "./date-helper";

describe('DateHelper', () => {
    it('can parse valid date 1/3-2020', () => {
        // Arrange
        const day = 1;
        const month = 3;
        const year = 2020;

        // Act
        const date = DateHelper.parseDate(day, month, year);

        // Assert
        expect(date).toBeTruthy();
        expect(date?.getDate()).toBe(1);
        expect(date?.getMonth()).toBe(2);
        expect(date?.getFullYear()).toBe(2020);
    });

    it('can parse valid date 29/8-2020', () => {
        // Arrange
        const day = 29;
        const month = 8;
        const year = 2020;

        // Act
        const date = DateHelper.parseDate(day, month, year);

        // Assert
        expect(date).toBeTruthy();
        expect(date?.getDate()).toBe(29);
        expect(date?.getMonth()).toBe(7);
        expect(date?.getFullYear()).toBe(2020);
    });

    it('wont parse invalid date 30/2-2021', () => {
        // Arrange
        const day = 30;
        const month = 2;
        const year = 2021;

        // Act
        const date = DateHelper.parseDate(day, month, year);

        // Assert
        expect(date).toBeNull();
    });
    
    it('wont parse invalid date 20/0-2021', () => {
        // Arrange
        const day = 20;
        const month = 0;
        const year = 2021;

        // Act
        const date = DateHelper.parseDate(day, month, year);

        // Assert
        expect(date).toBeNull();
    });
    
    it('wont parse invalid date 34/12-2021', () => {
        // Arrange
        const day = 34;
        const month = 12;
        const year = 2021;

        // Act
        const date = DateHelper.parseDate(day, month, year);

        // Assert
        expect(date).toBeNull();
    });

    it('can parse date string 16/4-2021', () => {
        // Arrange
        // To the user: Month 1 = Jan, 2 = Feb, 3 = Mar, 4 = Apr, 5 = May
        const day = '16', month = '4', year = '2021';

        // Act
        const date = DateHelper.parseDateString(day, month, year);

        // Assert
        // In JavaScript: Month 0 = Jan, 1 = Feb, 2 = Mar, 3 = Apr, 4 = May
        expect(date).toEqual(new Date(Date.UTC(2021, 3, 16)));
    });
});