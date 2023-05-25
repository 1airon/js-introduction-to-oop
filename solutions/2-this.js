// BEGIN
function Rational(numer = 0, denom = 1) {
  let numerator = numer;
  let denominator = denom;

  const setNumer = (newNumer) => {
    numerator = newNumer;
  };

  const setDenom = (newDenom) => {
    if (newDenom !== 0) {
      denominator = newDenom;
    } else {
      throw new Error('Знаменатель не может быть равен нулю');
    }
  };

  const getNumer = () => numerator;

  const getDenom = () => denominator;

  const toString = () => `${numerator}/${denominator}`;

  const add = (rational) => {
    const newNumer = numerator * rational.getDenom() + denominator * rational.getNumer();
    const newDenom = denominator * rational.getDenom();
    return Rational(newNumer, newDenom);
  };

  return {
    setNumer,
    setDenom,
    getNumer,
    getDenom,
    toString,
    add,
  };
}

export default Rational;
// END