import { variant } from './index';

describe('test cases for variant', () => {
  it('should test basic', () => {
    expect(
      variant({
        themeProperty: 'buttons',
        propName: '$variant',
      })({
        $variant: 'primary',
        theme: {
          buttons: {
            primary: {
              'background-color': 'red',
              color: 'black',
            },
            secondary: {
              'background-color': 'green',
              color: 'white',
            },
          },
        },
      }),
    ).toStrictEqual({
      'background-color': 'red',
      color: 'black',
    });
  });
});
