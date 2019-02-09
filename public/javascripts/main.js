import '../sass/style.scss';
import { register } from 'register-service-worker';
import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';

const initFoodPrefCheckboxes = ((checkboxSelector) => {
  const firstCheckBox = $(`input[name="${checkboxSelector}"]`);
  if (firstCheckBox) {
    firstCheckBox.on('change', function () {
      if (this.checked) {
        $$(`input[name="${checkboxSelector}"]`).map((checkbox) => {
          /* eslint-disable no-param-reassign */
          checkbox.checked = false;
          /* eslint-enable no-param-reassign */
          return checkbox;
        });
        this.checked = true;
      }
    });
    $$(`input[name="${checkboxSelector}"]`).on('change', function () {
      if (this.value !== firstCheckBox.value) {
        firstCheckBox.checked = false;
      }
    });
  }
});

const initAllCheckboxes = () => {
  initFoodPrefCheckboxes('foodExclusions');
};

const initAutoComplete = () => {
  autocomplete($('#address'), $('#lat'), $('#lng'));
};

const initFocusEmail = () => {
  $('#emailLogin').focus();
};

function registerServiceWorker() {
  register('/service-worker.js', {
    ready() {
      console.log('Service worker is active.');
    },
    registered(registration) {
      console.log('Service worker has been registered.', registration);
    },
    cached(registration) {
      console.log('Content has been cached for offline use.', registration);
    },
    updatefound(registration) {
      console.log('New content is downloading.', registration);
    },
    updated(registration) {
      console.log('New content is available; please refresh.', registration);
    },
    offline() {
      console.info('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}

registerServiceWorker();
