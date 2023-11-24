import colors from './colors';

describe('color helper test cases', () => {
  it('should check basic color function', () => {
    expect(colors({ color: 'red', backgroundColor: 'green' })).toStrictEqual({
      color: 'red',
      'background-color': 'green',
    });
  });
});
