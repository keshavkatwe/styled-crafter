import { colors } from './index';

describe('color helper test cases', () => {
  it('should check basic color function', () => {
    expect(colors({ $color: 'red', $backgroundColor: 'green' })).toStrictEqual({
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
});
