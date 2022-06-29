import { timeRegex } from '../regexes';
import StringType from './TextType';

export default class TimeType extends StringType {
  static type = 'time';

  valid() {
    return !this.value || timeRegex.test(this.value);
  }
}
