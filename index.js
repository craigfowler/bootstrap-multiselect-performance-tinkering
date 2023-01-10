// Import stylesheets
import './style.css';
import { viewModel } from './viewModel';
import ko from 'knockout';
import './bootstrap-multiselect-ours';

const howManyElements = 3500;
const vm = new viewModel(howManyElements);
ko.applyBindings(vm);
