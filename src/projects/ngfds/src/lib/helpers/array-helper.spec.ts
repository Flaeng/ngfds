import { ArrayHelper } from './array-helper';

describe('ArrayHelper', () => {
  it('can remove item at first index from array', () => {
    // Arrange
    const item1 = { title: 'dav' };
    const item2 = { title: 'hej' };
    const item3 = { title: 'goddag' };
    const arr = [item1, item2, item3];

    // Act
    const result = ArrayHelper.remove(arr, item1);

    // Assert
    expect(result).toBeTrue();
    expect(arr).toEqual([item2, item3]);
  });
  it('can remove item at middle index from array', () => {
    // Arrange
    const item1 = { title: 'dav' };
    const item2 = { title: 'hej' };
    const item3 = { title: 'goddag' };
    const arr = [item1, item2, item3];

    // Act
    const result = ArrayHelper.remove(arr, item2);

    // Assert
    expect(result).toBeTrue();
    expect(arr).toEqual([item1, item3]);
  });
  it('can remove item at last index from array', () => {
    // Arrange
    const item1 = { title: 'dav' };
    const item2 = { title: 'hej' };
    const item3 = { title: 'goddag' };
    const arr = [item1, item2, item3];

    // Act
    const result = ArrayHelper.remove(arr, item3);

    // Assert
    expect(result).toBeTrue();
    expect(arr).toEqual([item1, item2]);
  });
});
