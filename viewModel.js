import ko from 'knockout';
import { createAvailableOptions } from './createAvailableOptions';

export function viewModel(howManyElements) {
  const items = createAvailableOptions(howManyElements);

  this.allItems = ko.observableArray(items);
  this.selectedItems = ko.observableArray();
}
