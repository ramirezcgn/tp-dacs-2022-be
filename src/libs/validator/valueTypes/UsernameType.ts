import { usernameRegex } from '../regexes';
import StringType from './TextType';

export default class UsernameType extends StringType {
  static type = 'username';

  valid() {
    return !this.value || usernameRegex.test(this.value);
  }
}
