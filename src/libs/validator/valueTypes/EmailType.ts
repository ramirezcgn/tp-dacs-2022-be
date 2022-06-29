import { emailRegex } from '../regexes';
import StringType from './TextType';

export default class EmailType extends StringType {
  static type = 'email';

  valid() {
    return !this.value || emailRegex.test(this.value);
  }
}
