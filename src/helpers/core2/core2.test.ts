import core2 from './core2';

describe('should test core 2', () => {
  const instance = core2({
    mt: { property: 'margin-top' },
    mb: { property: 'margin-bottom' },
    ml: { property: 'margin-left' },
    mx: { properties: ['margin-left', 'margin-right'] },
  });

  it('should check basic', () => {
    expect(instance({ mt: '10px', mb: '50%', ml: 10 })).toEqual({
      'margin-top': '10px',
      'margin-bottom': '50%',
      'margin-left': '10px',
    });
  });

  it('should check if undefined passed', () => {
    expect(instance({ mt: undefined })).toStrictEqual({});
  });

  it('should check if percentage passed', () => {
    expect(instance({ mt: '50%' })).toStrictEqual({
      'margin-top': '50%',
    });
  });

  it('should check if extra params passed', () => {
    // Ignore is required to test extra prop passed
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(instance({ mt: '50%', pt: '10px' })).toStrictEqual({
      'margin-top': '50%',
    });
  });

  it('should check if theme value working', () => {
    const instanceWithTheme = core2({
      mt: { property: 'margin-top', scale: 'spacing' },
      mb: { property: 'margin-bottom', scale: 'spacing' },
      ml: { property: 'margin-left', scale: 'spacing' },
    });

    expect(
      instanceWithTheme({
        mt: 'sp1',
        mb: '10px',
        ml: 'sp2',
        theme: {
          spacing: {
            sp1: '10px',
            sp2: 14,
          },
        },
      }),
    ).toStrictEqual({
      'margin-top': '10px',
      'margin-bottom': '10px',
      'margin-left': '14px',
    });
  });

  it('should check if properties config', () => {
    expect(instance({ mx: '50px' })).toStrictEqual({
      'margin-left': '50px',
      'margin-right': '50px',
    });
  });
});
