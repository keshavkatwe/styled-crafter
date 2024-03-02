import { layout } from './index';

describe('should test all cases of layout', () => {
  it('should test basic', () => {
    expect(
      layout({
        $height: '10px',
        $overflow: 'hidden',
      }),
    ).toStrictEqual({
      height: '10px',
      overflow: 'hidden',
    });
  });

  it('should test basic', () => {
    expect(
      layout({
        $height: 'sz2',
        $overflow: 'hidden',
        theme: {
          sizes: {
            sz1: 10,
            sz2: 20,
          },
        },
      }),
    ).toStrictEqual({
      height: '20px',
      overflow: 'hidden',
    });
  });
});
