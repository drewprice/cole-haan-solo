document.addEventListener('scroll', function (event) {
  var pageHeight = document.body.scrollHeight;
  var viewedPortionOfPage = document.body.scrollTop + window.innerHeight;

  if (pageHeight == viewedPortionOfPage) overlay();
});
