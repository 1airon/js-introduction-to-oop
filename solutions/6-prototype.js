// BEGIN
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
  
  Money.prototype.getValue = function() {
    return this.value;
  };
  
  Money.prototype.getCurrency = function() {
    return this.currency;
  };
  
  Money.prototype.exchangeTo = function(targetCurrency) {
    const exchangeRates = {
      usd: { eur: 0.7 },
      eur: { usd: 1.2 },
    };
  
    const currentValue = this.getValue();
    const currentCurrency = this.getCurrency();
    
    if (currentCurrency === targetCurrency) {
      return this;
    }
  
    const rate = exchangeRates[currentCurrency] && exchangeRates[currentCurrency][targetCurrency];
    if (typeof rate !== 'number') {
      throw new Error(`Невозможно конвертировать: ${currentCurrency} в ${targetCurrency}`);
    }
    const exchangedValue = currentValue * rate;
    return new Money(exchangedValue, targetCurrency);
  };
  
  Money.prototype.add = function(money) {
    const targetCurrency = this.getCurrency();
    const exchangedMoney = money.exchangeTo(targetCurrency);
    const newValue = this.getValue() + exchangedMoney.getValue();
    return new Money(newValue, targetCurrency);
  };
  
  Money.prototype.format = function() {
    const locale = 'en-US'; 
    const options = { style: 'currency', currency: this.getCurrency() };
    return this.getValue().toLocaleString(locale, options);
  };
  
  export default Money;
  
// END
