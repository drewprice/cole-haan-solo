function overlay() {
  rmOverlay()

  let overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');
  let style = 'position: fixed; top: 0; left: 0; z-index: 500;' +
              'background-color: rgba(0, 0, 0, 0.4); width: 100%;' +
              'height: ' + document.body.scrollHeight + 'px';
  overlay.style.cssText = style;

  document.body.appendChild(overlay);
  box(monetateData.addCartRows);
  return overlay;
}

function rmOverlay() {
  let existingOverlay = document.getElementById('overlay');
  if (existingOverlay) existingOverlay.remove();
}
