const sampleText =
  '¿Lorem ñipsum dólor sit amet?, ¡consectetur! adipiscing elit. Mauris consequat ullamcorper metus, vitae pellentesque nisl eleifend a. Suspendisse finibus dapibus leo at tincidunt. Etiam nec mi vel leo venenatis consectetur. Curabitur eu consectetur sapien, id lobortis tellus. Vivamus consequat, tortor a facilisis pellentesque, turpis ligula faucibus mauris, sit amet commodo urna ligula id sapien. Maecenas facilisis rutrum dapibus. In vel lacinia velit. Nulla facilisi. Quisque et dapibus lectus. Curabitur eu justo et nisi eleifend luctus. Proin vitae fermentum erat. Suspendisse potenti. Morbi dignissim metus et magna pellentesque, id aliquet velit sollicitudin. Mauris pharetra nunc eget ligula malesuada gravida. Nulla facilisis iaculis odio in egestas. Suspendisse non leo dui. Mauris sit amet dapibus ante. Vestibulum fringilla tristique mattis. Suspendisse laoreet, enim eu tincidunt aliquet, augue turpis lacinia justo, eget tempor dolor ipsum nec mauris. Ut rutrum, ipsum ut cursus ullamcorper, nunc orci interdum massa, vitae tincidunt odio justo in tellus. Praesent sed interdum neque. Integer congue libero a metus consequat tincidunt. Nam consectetur erat eu convallis interdum. Curabitur sit amet nunc sit amet nisl ullamcorper fermentum vel sed erat.';

const separateIntoSentences = (text) => {
  const sentences = text.split(/(?<=\.)\s*/);
  return sentences;
};

const punctuationSigns = [
  ',',
  '.',
  '¡',
  '!',
  '¿',
  '?',
  ':',
  ';',
  "'",
  '(',
  ')',
];

const separateParagraphsIntoWords = (sentences) => {
  const result = [];

  for (let sentence of sentences) {
    const finalSentence = [];
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
      const currentChar = sentence[i];

      if (currentChar === ' ') {
        if (currentWord.length > 0) {
          finalSentence.push(currentWord);
          currentWord = '';
        }
      } else {
        const isPunctuation = punctuationSigns.includes(currentChar);

        if (isPunctuation && currentWord.length > 0) {
          finalSentence.push(currentWord);
          currentWord = '';
        }

        currentWord += currentChar;

        if (isPunctuation) {
          finalSentence.push(currentChar);
          currentWord = '';
        }
      }
    }

    if (currentWord.length > 0) {
      finalSentence.push(currentWord);
    }

    result.push(finalSentence);
  }

  return result;
};

const paragraphsWithSpaces = (paragraphs) => {
  const result = [];

  for (let i = 0; i < paragraphs.length; i += 1) {
    const currentSentence = paragraphs[i];
    const modifiedSentence = [];

    for (let k = 0; k < currentSentence.length; k += 1) {
      const currentWord = currentSentence[k];
      const nextWord = currentSentence[k + 1];

      modifiedSentence.push(currentWord);

      if (nextWord && !punctuationSigns.includes(nextWord)) {
        modifiedSentence.push('');
      }
    }

    result.push(modifiedSentence);
  }

  return result;
};

const mySeparatedText = separateIntoSentences(sampleText);
const mySeparateParagraphsIntoWords =
  separateParagraphsIntoWords(mySeparatedText);

const myParagraphsWithSpaces = paragraphsWithSpaces(
  mySeparateParagraphsIntoWords
);

console.log(myParagraphsWithSpaces);
