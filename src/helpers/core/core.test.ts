import core from './core';

describe('should test core', () => {
  const instance = core({
    mt: 'margin-top',
    mb: 'margin-bottom',
    ml: 'margin-left',
  });
  it('should check basic', () => {
    expect(instance({ mt: 10, mb: '50%' })).toEqual({
      'margin-top': '10px',
      'margin-bottom': '50%',
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(instance({ mt: '50%', pt: '10px' })).toStrictEqual({
      'margin-top': '50%',
    });
  });

  it('should check if theme value working', () => {
    const instanceWithTheme = core(
      {
        mt: 'margin-top',
        mb: 'margin-bottom',
        ml: 'margin-left',
      },
      {
        themeAccessKey: 'spacing',
      },
    );

    expect(
      instanceWithTheme({
        mt: 'sp1',
        mb: '10px',
        theme: {
          spacing: {
            sp1: 10,
          },
        },
      }),
    ).toStrictEqual({
      'margin-top': '10px',
      'margin-bottom': '10px',
    });
  });
});
