import '../sass/style.scss';
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
  initFoodPrefCheckboxes('dietRequirements');
  initFoodPrefCheckboxes('foodAllergies');
};

const initAutoComplete = () => {
  autocomplete($('#address'), $('#lat'), $('#lng'));
};

const initFocusEmail = () => {
  $('#emailLogin').focus();
};
