// So, to summarize, the three changes that need to be made in the code are:
// Declare punctuationSigns as a set: punctuationSigns = new Set([...]).
// Update the isPunctuation(char) method to use has instead of includes.
// Update this.isPunctuation(char) to this.isPunctuation(char.toString()) within tokenizeWord(word).

const sampleText =
  '¿Lorem ñipsum dólor sit amet?, ¡consectetur! adipiscing elit. Mauris consequat ullamcorper metus, vitae pellentesque nisl eleifend a. Suspendisse finibus dapibus leo at tincidunt. Etiam nec mi vel leo venenatis consectetur. Curabitur eu consectetur sapien, id lobortis tellus. Vivamus consequat, tortor a facilisis pellentesque, turpis ligula faucibus mauris, sit amet commodo urna ligula id sapien. Maecenas facilisis rutrum dapibus. In vel lacinia velit. Nulla facilisi. Quisque et dapibus lectus. Curabitur eu justo et nisi eleifend luctus. Proin vitae fermentum erat. Suspendisse potenti. Morbi dignissim metus et magna pellentesque, id aliquet velit sollicitudin. Mauris pharetra nunc eget ligula malesuada gravida. Nulla facilisis iaculis odio in egestas. Suspendisse non leo dui. Mauris sit amet dapibus ante. Vestibulum fringilla tristique mattis. Suspendisse laoreet, enim eu tincidunt aliquet, augue turpis lacinia justo, eget tempor dolor ipsum nec mauris. Ut rutrum, ipsum ut cursus ullamcorper, nunc orci interdum massa, vitae tincidunt odio justo in tellus. Praesent sed interdum neque. Integer congue libero a metus consequat tincidunt. Nam consectetur erat eu convallis interdum. Curabitur sit amet nunc sit amet nisl ullamcorper fermentum vel sed erat.';

class TextProcessor {
  punctuationSigns = new Set([
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
    '-',
    '_',
    '[',
    ']',
    '{',
    '}',
    '/',
    '\\',
    '|',
    '@',
    '#',
    '$',
    '%',
    '&',
    '*',
    '+',
    '=',
    '<',
    '>',
    '~',
    '`',
    '"',
  ]);

  constructor(text) {
    if (typeof text !== 'string') {
      throw new Error('TextProcessor can only be initialized with a string.');
    }

    if (text.trim().length === 0) {
      throw new Error(
        'TextProcessor cannot be initialized with an empty string.'
      );
    }

    this.processedText = this.processText(text);
  }

  processText(text) {
    const sentences = this.tokenizeSentences(text);
    const result = sentences.map((sentence, index) => ({
      sentenceId: index,
      tokens: this.tokenizeSentence(sentence),
    }));
    return result;
  }

  tokenizeSentences(text) {
    return text.split(/(?<=\.)\s*/);
  }

  tokenizeSentence(sentence) {
    const words = sentence.split(' ');
    const tokenizedSentence = [];
    let tokenId = 0;

    for (const word of words) {
      const tokens = this.tokenizeWord(word);

      for (const token of tokens) {
        const isPunctuationSign = this.isPunctuation(token);

        const tokenObject = {
          tokenId,
          token,
          isPunctuationSign,
        };

        if (!isPunctuationSign) {
          tokenObject.languages = { spanish: '', english: '' };
        }

        tokenizedSentence.push(tokenObject);
        tokenId++;
      }
    }

    return tokenizedSentence;
  }

  tokenizeWord(word) {
    const tokenizedWord = [];
    let currentToken = '';

    for (const char of word) {
      if (this.isPunctuation(char)) {
        if (currentToken.length > 0) {
          tokenizedWord.push(currentToken);
          currentToken = '';
        }
        tokenizedWord.push(char);
      } else {
        currentToken += char;
      }
    }

    if (currentToken.length > 0) {
      tokenizedWord.push(currentToken);
    }

    return tokenizedWord;
  }

  isPunctuation(char) {
    return this.punctuationSigns.has(char);
  }
}

const sampleSentence = new TextProcessor(
  'Hola, ¿cómo estás? - Yo estoy muy bien.'
);

console.log(sampleSentence);

module.exports = TextProcessor;
