import { borderRadius, type IBorderRadiusProps } from './index';

describe('should check border test cases', () => {
  it('should test border radius ', () => {
    expect(
      borderRadius({ $borderRadius: '10px' } satisfies IBorderRadiusProps),
    ).toStrictEqual({
      'border-radius': '10px',
    });
  });
});
