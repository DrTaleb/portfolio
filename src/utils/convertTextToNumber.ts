// Updated regex to match both English and Persian numerals, allowing for leading zeros
export const positiveNumberRegex = /^((0*[0-9]+(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)|([۰-۹]+))$/;

// Function to convert Persian numerals to English numerals
const persianToEnglishDigits = (str : string) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const englishDigits = '0123456789';
  return str.replace(/[۰-۹]/g, (char) => englishDigits[persianDigits.indexOf(char)]);
};

export const convertTextInputToNumber = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFieldFunction: Function,
  numberOfCharacters: number,
  setFieldFunctionType: 'formik' | 'setState',
  outputType: 'string' | 'number' | undefined = 'number',
) => {
  e.preventDefault();

  let { value } = e.target;

  // Convert Persian digits to English digits
  value = persianToEnglishDigits(value);

  const isValid: boolean =
    (positiveNumberRegex.test(value.toString()) && value.toString().length <= numberOfCharacters) ||
    value.toString() === '';

  if (isValid) {
    if (setFieldFunctionType === 'formik') {
      setFieldFunction(e.target.name, outputType === 'string' ? value : +value);
    } else {
      setFieldFunction(outputType === 'string' ? value : +value);
    }
  }
};
