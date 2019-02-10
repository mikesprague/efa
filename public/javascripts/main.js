import '../sass/style.scss';
import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import * as image from './modules/image';

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
  // hacky solution (should replace)
  // allows for one script one all pages
  try {
    initFoodPrefCheckboxes('foodExclusions');
  } catch (e) {
    // ignore
  }
};

const initAutoComplete = () => {
  // hacky solution (should replace)
  // allows for one script one all pages
  try {
    autocomplete($('#address'), $('#lat'), $('#lng'));
  } catch (e) {
    // ignore
  }
};

const initFocusEmail = () => {
  // hacky solution (should replace)
  // allows for one script one all pages
  try {
    $('#emailLogin').focus();
  } catch (e) {
    // ignore
  }
};

const initNotificationPhoto = () => {
  try {
    const notificationPhoto = document.querySelector('#photo');
    notificationPhoto.on('change', async function () {
      const imageData = await image.getImageFromFileInput(this);
      // console.log(imageData);
      image.setPreviewImage('.photo-preview', imageData[0]);
    });
  } catch (e) {
    // ignore
  }
};

initAllCheckboxes();
initAutoComplete();
initFocusEmail();
initNotificationPhoto();
