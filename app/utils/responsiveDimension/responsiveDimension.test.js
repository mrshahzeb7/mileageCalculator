const {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} = require('./responsiveDimension');

describe('responsiveHeight', () => {
  it('calculates responsive height correctly', () => {
    expect(responsiveHeight(50)).toBeGreaterThan(0);
  });

  it('handles zero input', () => {
    expect(responsiveHeight(0)).toBe(0);
  });

  it('handles negative input', () => {
    expect(responsiveHeight(-50)).toBeLessThan(0);
  });
});

describe('responsiveWidth', () => {
  it('calculates responsive width correctly', () => {
    expect(responsiveWidth(50)).toBeGreaterThan(0);
  });

  it('handles zero input', () => {
    expect(responsiveWidth(0)).toBe(0);
  });

  it('handles negative input', () => {
    expect(responsiveWidth(-50)).toBeLessThan(0);
  });
});

describe('responsiveFontSize', () => {
  it('calculates responsive font size correctly', () => {
    expect(responsiveFontSize(16)).toBeGreaterThan(0);
  });

  it('handles zero input', () => {
    expect(responsiveFontSize(0)).toBe(0);
  });

  it('handles negative input', () => {
    expect(responsiveFontSize(-16)).toBeLessThan(0);
  });
});
