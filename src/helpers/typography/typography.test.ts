import { type ITypographyProps, typography } from './index';

describe('should check all test cases for typography', () => {
  it('should check basic', () => {
    expect(
      typography({
        $textAlign: 'center',
        $letterSpacing: '10px',
      } satisfies ITypographyProps),
    ).toStrictEqual({
      'text-align': 'center',
      'letter-spacing': '10px',
    });
  });
});
