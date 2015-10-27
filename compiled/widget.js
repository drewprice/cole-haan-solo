'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bag = (function () {
  function Bag(items) {
    _classCallCheck(this, Bag);

    this.items = items;
  }

  _createClass(Bag, [{
    key: 'total',
    value: function total() {
      sum = 0;
      this.items.forEach(function (item) {
        return sum += Money.toPennies(item.unitPrice) * item.quantity;
      });
      return Money.toString(sum);
    }
  }, {
    key: 'count',
    value: function count() {
      var count = this.items.length;
      var itemPluralizer = 'item';
      if (count != 1) itemPluralizer += 's';
      return count + ' ' + itemPluralizer;
    }
  }, {
    key: 'images',
    value: function images() {
      var bag = document.getElementsByClassName('mini-cart-products')[0];
      var imageElements = bag.getElementsByTagName('img');
      return Array.from(imageElements, function (img) {
        return img.cloneNode(false);
      });
    }
  }]);

  return Bag;
})();
'use strict';

function box(items) {
  var bag = new Bag(items);
  var box = document.createElement('div');
  box.setAttribute('id', 'box');
  var style = 'position: fixed; top: 50%; left: 50%;' + 'transform: translate(-50%, -50%);' + 'height: 66.66vh; width: 90vw;' + 'background: #052b48; color: #fff; opacity: 0.97;' + 'border: 1px solid #fff; text-align: center;' + 'box-shadow: 5px 5px 10px #333';
  box.style.cssText = style;
  box.innerHTML = '\n                    <button onclick="rmOverlay()">&times;</button>\n                    <h2>Ready to check out?</h2>\n                    <p>\n                      ' + bag.count() + '  |  $' + bag.total() + '\n                    </p>\n                    <div id="image-space"></div>\n                    <a href="/cart">\n                      Begin checkout\n                    </a>\n                    <p class="bonus">\n                      Free ground shipping over $150 |\n                      Free 2-day shipping over $250 |\n                      Free returns &amp; exchanges\n                    </p>\n                    <style>\n                      #box h2, p, a, button, li {\n                        color: #fff;\n                        font-size: 1.125em;\n                        text-transform: uppercase;\n                        letter-spacing: 2px;\n                      }\n                      #box h2 {\n                        font-size: 2.5em;\n                      }\n                      #box button {\n                        text-align: right;\n                        color: #F4F4F4;\n                        font-size: 2.5em;\n                        font-weight: 100;\n                      }\n                      #image-space {\n                        background: #fff;\n                      }\n                      #box a {\n                        display: inline-block;\n                        margin-top: 50px;\n                        padding: 15px 30px;\n                        border: 1px solid #F4F4F4;\n                        font-size: 1.5em;\n                      }\n                      #box a:hover {\n                        background: #F4F4F4;\n                        color: #052b48;\n                      }\n                      #box img {\n                        margin: 0 2px;\n                      }\n                      #box .bonus {\n                        margin: 50px 0;\n                        font-size: 0.75em;\n                        font-weight: 100;\n                      }\n                    </style>\n                  ';

  document.getElementById('overlay').appendChild(box);
  var imageSpace = document.getElementById('image-space');
  bag.images().forEach(function (img) {
    return imageSpace.appendChild(img);
  });

  return box;
}
"use strict";
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Money = (function () {
  function Money() {
    _classCallCheck(this, Money);
  }

  _createClass(Money, null, [{
    key: 'toString',
    value: function toString(pennies) {
      var dollars = Math.floor(pennies / 100);
      var cents = (pennies % 100).toString();
      if (cents.length < 2) cents += "0";
      return dollars + '.' + cents;
    }
  }, {
    key: 'toPennies',
    value: function toPennies(stringVal) {
      var dollars = Number(stringVal.split('.')[0]) * 100;
      var cents = Number(stringVal.split('.')[1]);
      return dollars + cents;
    }
  }]);

  return Money;
})();
'use strict';

function overlay() {
  rmOverlay();

  var overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');
  var style = 'position: fixed; top: 0; left: 0; z-index: 500;' + 'background-color: rgba(0, 0, 0, 0.4); width: 100%;' + 'height: ' + document.body.scrollHeight + 'px';
  overlay.style.cssText = style;

  document.body.appendChild(overlay);
  box(monetateData.addCartRows);
  return overlay;
}

function rmOverlay() {
  var existingOverlay = document.getElementById('overlay');
  if (existingOverlay) existingOverlay.remove();
}
'use strict';

document.addEventListener('scroll', function (event) {
  var pageHeight = document.body.scrollHeight;
  var viewedPortionOfPage = document.body.scrollTop + window.innerHeight;

  if (pageHeight == viewedPortionOfPage) overlay();
});
