import { flex } from './index';

describe('flex helper test cases', () => {
  it('should test basic', () => {
    expect(
      flex({
        flexDir: 'row',
        flex: 1,
        flexWrap: 'wrap',
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 'sp1',
        theme: {
          spacing: {
            sp1: '10px',
            sp2: '12px',
            sp3: '14px',
          },
        },
      }),
    ).toStrictEqual({
      'flex-direction': 'row',
      flex: 1,
      'flex-wrap': 'wrap',
      'flex-grow': 1,
      'justify-content': 'flex-end',
      'align-items': 'center',
      gap: '10px',
    });
  });
});
