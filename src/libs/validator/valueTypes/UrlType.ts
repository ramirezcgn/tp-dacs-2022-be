import { urlRegex } from '../regexes';
import StringType from './TextType';

export default class UrlType extends StringType {
  static type = 'url';

  valid() {
    return !this.value || urlRegex.test(this.value);
  }
}
