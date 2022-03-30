import { get } from 'lodash';

export default {
  getInt(value: string, radix?: number | undefined) {
    return parseInt(value, radix);
  },
  getFloat(value: string) {
    return parseFloat(value);
  },
  getBoolean(value: unknown) {
    return !!value;
  },
  getUndefined() {
    return void 0;
  },
  getNull() {
    return null;
  },
  getArray(...params: unknown[]) {
    return params;
  },
  get(obj: Object, path: keyof Object | [keyof Object]) {
    return get(obj, path);
  }
};