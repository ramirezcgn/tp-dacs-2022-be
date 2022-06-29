import { dateRegex } from '../regexes';
import StringType from './TextType';

export default class DateType extends StringType {
  static type = 'date';

  valid() {
    return !this.value || dateRegex.test(this.value);
  }
}
