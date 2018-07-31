const html = require('choo/html');

module.exports = function(state) {
  return html`
  <div class="signupPromo">
    <div class="signupPromo__title">${state.translate('signInPromoText')}</div>
    <div class="signupPromo__info">${state.translate('signInExplanation')}</div>
    <a href="/signin"
      class="link signupPromo__link"
    >
      ${state.translate('signInLearnMore')}
    </a>
  </div>
  `;
};
