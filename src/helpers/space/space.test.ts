import { space } from './index';

describe('should test space', () => {
  it('should check basic', () => {
    expect(
      space({
        $margin: '10px',
      }),
    ).toStrictEqual({
      margin: '10px',
    });
  });

  it('should check multiple property types', () => {
    expect(
      space({
        $marginX: '10px',
      }),
    ).toStrictEqual({
      'margin-left': '10px',
      'margin-right': '10px',
    });
  });

  it('should check with theme object', () => {
    expect(
      space({
        $marginX: 'sp1',
        theme: {
          spacing: {
            sp1: '10px',
            sp2: '12px',
            sp3: '14px',
          },
        },
      }),
    ).toStrictEqual({
      'margin-left': '10px',
      'margin-right': '10px',
    });
  });
});
