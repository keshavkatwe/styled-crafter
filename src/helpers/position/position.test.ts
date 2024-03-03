import { type IPositionProps, position } from './index';

describe('should check position test cases', () => {
  it('should test basic', () => {
    expect(
      position({
        $position: 'absolute',
        $top: '10px',
      } satisfies IPositionProps),
    ).toStrictEqual({
      position: 'absolute',
      top: '10px',
    });
  });
});
