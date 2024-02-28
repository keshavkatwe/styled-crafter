import core2 from './core2';

describe('should test core 2', () => {
  const instance = core2({
    mt: { property: 'margin-top' },
    mb: { property: 'margin-bottom' },
    ml: { property: 'margin-left' },
  });

  it('should check basic', () => {
    expect(instance({ mt: '10px', mb: '50%' })).toEqual({
      'margin-top': '10px',
      'margin-bottom': '50%',
    });
  });
});
