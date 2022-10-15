export class ArrayHelper {
  static remove<T>(arr: T[], item: T): boolean {
    const index = arr.indexOf(item);
    if (index === -1) return false;
    arr.splice(index, 1);
    return true;
  }
}
