class Bag {
  constructor(items) {
    this.items = items;
  }

  total() {
    sum = 0;
    this.items.forEach(function(item){
      return sum += (Money.toPennies(item.unitPrice) * item.quantity)
    })
    return Money.toString(sum);
  }

  count() {
    let count = this.items.length;
    let itemPluralizer = 'item';
    if (count != 1) itemPluralizer += 's';
    return `${count} ${itemPluralizer}`;
  }

  images() {
    let bag = document.getElementsByClassName('mini-cart-products')[0];
    let imageElements = bag.getElementsByTagName('img');
    return Array.from(imageElements, img => img.cloneNode(false))
  }
}
