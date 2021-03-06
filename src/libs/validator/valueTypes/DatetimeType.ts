import { datetimeRegex } from '../regexes';
import StringType from './TextType';

export default class DatetimeType extends StringType {
  static type = 'datetime';

  valid() {
    return !this.value || datetimeRegex.test(this.value);
  }
}
