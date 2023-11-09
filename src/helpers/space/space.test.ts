import { space } from './index';

describe('should test space', () => {
  it('should check basic', () => {
    expect(
      space({
        margin: '10px',
      }),
    ).toStrictEqual({
      margin: '10px',
    });
  });
});
