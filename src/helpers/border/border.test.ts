import {
  border,
  borderOther,
  borderRadius,
  borderWidth,
  IBorderOtherProps,
  type IBorderRadiusProps,
} from './index';

describe('should check border test cases', () => {
  it('should basic border', () => {
    expect(
      border({
        $bw: '10px',
      }),
    ).toStrictEqual({
      'border-width': '10px',
    });
  });

  it('should test border radius ', () => {
    expect(
      borderRadius({
        $borderRadius: '10px',
        $btlr: 'br2',
        theme: {
          radii: {
            br1: '20px',
            br2: '30px',
          },
        },
      } satisfies IBorderRadiusProps),
    ).toStrictEqual({
      'border-radius': '10px',
      'border-top-left-radius': '30px',
    });
  });

  it('should basic border width', () => {
    expect(
      borderWidth({
        $bw: '10px',
      }),
    ).toStrictEqual({
      'border-width': '10px',
    });
  });

  it('should basic border other props', () => {
    expect(
      borderOther({
        $borderStyle: 'solid',
      } satisfies IBorderOtherProps),
    ).toStrictEqual({
      'border-style': 'solid',
    });
  });
});
