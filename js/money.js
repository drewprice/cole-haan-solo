class Money {
  static toString(pennies) {
    let dollars = Math.floor(pennies / 100);
    let cents = (pennies % 100).toString();
    if (cents.length < 2) cents += "0";
    return `${dollars}.${cents}`
  }

  static toPennies(stringVal) {
    let dollars = Number(stringVal.split('.')[0]) * 100;
    let cents = Number(stringVal.split('.')[1]);
    return dollars + cents;
  }
}
