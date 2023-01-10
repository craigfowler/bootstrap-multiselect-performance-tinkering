import { randomString } from './randomString';

export function createAvailableOptions(howMany) {
  return [...Array(howMany)]
    .map((v, i) => ({name: randomString(5), value: i + 1}));
}