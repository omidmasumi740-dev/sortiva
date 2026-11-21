(function () {
  try {
    var param = new URLSearchParams(window.location.search).get('lang');
    var lang = param === 'en' || param === 'fa'
      ? param
      : (localStorage.getItem('sortiva-lang') === 'en' ? 'en' : 'fa');
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  } catch (e) {}
})();
