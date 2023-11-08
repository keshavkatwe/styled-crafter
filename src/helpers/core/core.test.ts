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
    expect(instance({ mt: '50%', ml: 90 })).toStrictEqual({
      'margin-top': '50%',
      'margin-left': '90px',
    });
  });
});
