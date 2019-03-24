import { $, $$ } from './bling';
import { getImageFromFileInput, setPreviewImage } from './image';

export function initFoodPrefCheckboxes (checkboxSelector) {
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
}

export function focusFormField(formElementSelector) {
  $(formElementSelector).focus();
}

export function initNotificationPhotoField(fileElementSelector, imgToShowPreviewSelector) {
  const photoFileElement = $(fileElementSelector);
  photoFileElement.on('change', async function () {
    const imageData = await getImageFromFileInput(this);
    // console.log(imageData);
    setPreviewImage(imgToShowPreviewSelector, imageData[0]);
  });
}

export function initNotificationTimeField(elementSelector) {
  // jj
}
