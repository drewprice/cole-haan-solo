function box(items) {
  let bag = new Bag(items);
  let box = document.createElement('div');
  box.setAttribute('id', 'box');
  let style = 'position: fixed; top: 50%; left: 50%;' +
              'transform: translate(-50%, -50%);' +
              'height: 66.66vh; width: 90vw;' +
              'background: #052b48; color: #fff; opacity: 0.97;' +
              'border: 1px solid #fff; text-align: center;' +
              'box-shadow: 5px 5px 10px #333';
  box.style.cssText = style;
  box.innerHTML = `
                    <button onclick="rmOverlay()">&times;</button>
                    <h2>Ready to check out?</h2>
                    <p>
                      ${bag.count()}  |  $${bag.total()}
                    </p>
                    <div id="image-space"></div>
                    <a href="/cart">
                      Begin checkout
                    </a>
                    <p class="bonus">
                      Free ground shipping over $150 |
                      Free 2-day shipping over $250 |
                      Free returns &amp; exchanges
                    </p>
                    <style>
                      #box h2, p, a, button, li {
                        color: #fff;
                        font-size: 1.125em;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                      }
                      #box h2 {
                        font-size: 2.5em;
                      }
                      #box button {
                        text-align: right;
                        color: #F4F4F4;
                        font-size: 2.5em;
                        font-weight: 100;
                      }
                      #image-space {
                        background: #fff;
                      }
                      #box a {
                        display: inline-block;
                        margin-top: 50px;
                        padding: 15px 30px;
                        border: 1px solid #F4F4F4;
                        font-size: 1.5em;
                      }
                      #box a:hover {
                        background: #F4F4F4;
                        color: #052b48;
                      }
                      #box img {
                        margin: 0 2px;
                      }
                      #box .bonus {
                        margin: 50px 0;
                        font-size: 0.75em;
                        font-weight: 100;
                      }
                    </style>
                  `;

  document.getElementById('overlay').appendChild(box);
  let imageSpace = document.getElementById('image-space');
  bag.images().forEach(img => imageSpace.appendChild(img))

  return box;
}
