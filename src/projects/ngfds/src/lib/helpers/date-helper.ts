export class DateHelper {
  public static toString(value: Date | null): string {
    if (value == null) return '';

    const dayOfMonth = value.getDate().toString().padStart(2, '0');
    const month = (value.getMonth() + 1).toString().padStart(2, '0');
    const year = value.getFullYear();
    return `${dayOfMonth}/${month}/${year}`;
  }

  public static parseDate(
    dayOfMonth: number,
    month: number,
    year: number
  ): Date | null {
    if (DateHelper.isDateInvalid(dayOfMonth, month, year))
      return null;

    const utcDate = Date.UTC(year, month - 1, dayOfMonth);
    const date = new Date(utcDate);
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month) return null;
    return date;
  }

  public static parseDateString(
    dayOfMonth: string,
    month: string,
    year: string
  ): Date | null {
    const parsedDayOfMonth = parseInt(dayOfMonth, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    if (DateHelper.isDateInvalid(parsedDayOfMonth, parsedMonth, parsedYear)) {
      return null;
    }

    // JS counts months from 0-11, and not 1-12 like you would expect
    // So we minus 1 on the month
    const date = new Date(
      Date.UTC(parsedYear, parsedMonth - 1, parsedDayOfMonth, 0, 0, 0, 0)
    );

    // Validate that JS didnt overflow the year or month
    // This will happend if you put in the date 30/02-2001 (JS reads that as 02/03-2001)
    if (date.getFullYear() !== parsedYear || date.getMonth() + 1 !== parsedMonth) return null;
    return date;
  }

  private static isDateInvalid(
    parsedDayOfMonth: number,
    parsedMonth: number,
    parsedYear: number
  ): boolean {
    return (
      Number.isNaN(parsedDayOfMonth) ||
      parsedDayOfMonth < 1 ||
      parsedDayOfMonth > 31 ||
      Number.isNaN(parsedMonth) ||
      parsedMonth < 1 ||
      parsedMonth > 12 ||
      Number.isNaN(parsedYear)
    );
  }
}
