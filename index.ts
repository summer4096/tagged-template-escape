type EscapeFunction<T> = (value: T) => string;

function escapeTaggedTemplateString<T>(escaper: EscapeFunction<T>, strings: TemplateStringsArray, ...values: T[]): string {
  var maxLength = Math.max(strings.length, values.length);

  var output = '';
  for (var i = 0; i < maxLength; i++) {
    if (typeof strings[i] !== 'undefined') {
      output += strings[i];
    }
    if (typeof values[i] !== 'undefined') {
      output += escaper(values[i]);
    }
  }

  return output;
}

export default function createTaggedTemplateStringEscaper<T> (escaper: EscapeFunction<T>) {
  return (strings: TemplateStringsArray, ...values: T[]) => escapeTaggedTemplateString(escaper, strings, ...values);
}
