import {
  backgroundColors,
  colors,
  type IColorProps,
  textColors,
} from './index';

describe('color helper test cases', () => {
  it('should check basic color function', () => {
    expect(
      colors({ $color: 'red', $backgroundColor: '' } satisfies IColorProps),
    ).toStrictEqual({
      color: 'red',
      'background-color': 'green',
    });
  });
  it('should check with theme object', () => {
    expect(
      colors({
        $color: 'black',
        $backgroundColor: 'white',
        theme: {
          colors: {
            red: 'red',
            black: '#000000',
            white: '#FFFFFF',
          },
        },
      }),
    ).toStrictEqual({
      color: '#000000',
      'background-color': '#FFFFFF',
    });
  });

  it('should test textColor', () => {
    expect(textColors({ $clr: 'red' })).toStrictEqual({ color: 'red' });
  });

  it('should test backgroundColor', () => {
    expect(backgroundColors({ $bgColor: 'red' })).toStrictEqual({
      'background-color': 'red',
    });
  });
});
