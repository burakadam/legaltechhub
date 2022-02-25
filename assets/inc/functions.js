function init() {
  clicker('#login', () => {
    window.location.href = '/main.html';
  });

  clicker('#header__menu-btn', (e) => {
    document.getElementById('menu').classList.toggle('active');
    document.body.classList.toggle('menu-opened');
  });

  clicker('.header__container-btn', (e) => {
    var id = e.getAttribute('data-id');
    var el = document.getElementById(id);

    if (hasClass(el, 'active')) {
      removeClass(el, 'active');
      removeClass(e, 'active');
    } else {
      removeClass(
        'header .blue-container,#header___buttons > button',
        'active'
      );

      addClass(el, 'active');
      addClass(e, 'active');
    }
  });

  clicker('.close-btn', (e) => {
    e.parentNode.classList.toggle('active');
  });

  clicker('.tab', (e) => {
    removeClass(e.parentNode.children, 'active');
    addClass(e, 'active');
  });

  clicker('.tabs.dropdown .tab', (e) => {
    resetItems(e);
  });

  clicker('.document-box > button', (e) => {
    e.parentNode.classList.toggle('opened');

    e.parentNode.querySelectorAll('iframe')[0].style.height = hasClass(
      e.parentNode,
      'opened'
    )
      ? '693px'
      : 0;
    0;
  });

  clicker('.tabs.dropdown', (e) => {
    e.classList.toggle('opened');
  });

  clicker('#template-reject', () => {
    addClass('#overlay', 'active');
  });

  clicker('#overlay .close-btn', () => {
    removeClass('#overlay', 'active');
  });
}

function resetItems(e) {
  removeClass(e.parentNode.children, 'active');
  var cln = e.cloneNode(true);
  var parent = e.parentNode;
  cln.addEventListener('click', function (e) {
    resetItems(this);
  });

  cln.classList = 'tab active';

  e.remove();
  parent.insertBefore(cln, parent.querySelectorAll('button')[0]);
}
