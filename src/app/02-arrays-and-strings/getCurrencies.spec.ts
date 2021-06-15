import { getCurrencies } from "./getCurrencies";

describe('currencies', () => {
  it('should return the supported currencies', () => {
    expect(getCurrencies()).toContain('USD');
    expect(getCurrencies()).toContain('AUD');
    expect(getCurrencies()).toContain('EUR');
  });

});
