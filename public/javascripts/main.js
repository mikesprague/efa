import '../sass/style.scss';
import { $ } from './modules/bling';
import initAutocomplete from './modules/autocomplete';
import {
  focusFormField,
  initFoodPrefCheckboxes,
  initNotificationPhotoField,
} from './modules/form';

// use try catches until I decide to split up files or conditionally load in one

try {
  initFoodPrefCheckboxes('foodExclusions');
} catch (e) {
  // ignore
}

try {
  initAutocomplete($('#address'), $('#lat'), $('#lng'));
} catch (e) {
  // ignore
}

try {
  initNotificationPhotoField('#photo', '.photo-preview');
} catch (e) {
  // ignore
}

try {
  focusFormField('#emailLogin');
} catch (e) {
  // ignore
}
