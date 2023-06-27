const TextProcessor = require('./textProcessor');

describe('TextProcessor', () => {
  const sampleText =
    '¿Lorem ñipsum dólor sit amet?, ¡consectetur! adipiscing elit. Mauris consequat ullamcorper metus, vitae pellentesque nisl eleifend a. Suspendisse finibus dapibus leo at tincidunt. Etiam nec mi vel leo venenatis consectetur. Curabitur eu consectetur sapien, id lobortis tellus. Vivamus consequat, tortor a facilisis pellentesque, turpis ligula faucibus mauris, sit amet commodo urna ligula id sapien. Maecenas facilisis rutrum dapibus. In vel lacinia velit. Nulla facilisi. Quisque et dapibus lectus. Curabitur eu justo et nisi eleifend luctus. Proin vitae fermentum erat. Suspendisse potenti. Morbi dignissim metus et magna pellentesque, id aliquet velit sollicitudin. Mauris pharetra nunc eget ligula malesuada gravida. Nulla facilisis iaculis odio in egestas. Suspendisse non leo dui. Mauris sit amet dapibus ante. Vestibulum fringilla tristique mattis. Suspendisse laoreet, enim eu tincidunt aliquet, augue turpis lacinia justo, eget tempor dolor ipsum nec mauris. Ut rutrum, ipsum ut cursus ullamcorper, nunc orci interdum massa, vitae tincidunt odio justo in tellus. Praesent sed interdum neque. Integer congue libero a metus consequat tincidunt. Nam consectetur erat eu convallis interdum. Curabitur sit amet nunc sit amet nisl ullamcorper fermentum vel sed erat.';

  xdescribe('Initialization', () => {
    test('should process the sample text as a string', () => {
      expect(typeof sampleText).toBe('string');
    });

    test('should throw an error when initialized with a non-string value', () => {
      const initializeWithNonString = () => {
        new TextProcessor(123);
      };

      expect(initializeWithNonString).toThrow(
        'TextProcessor can only be initialized with a string.'
      );
    });

    test('should throw an error when initialized with an empty string', () => {
      const initializeWithEmptyString = () => {
        new TextProcessor('');
      };

      expect(initializeWithEmptyString).toThrow(
        'TextProcessor cannot be initialized with an empty string.'
      );
    });

    test('should create a new instance of TextProcessor', () => {
      const textProcessor = new TextProcessor(sampleText);
      expect(textProcessor).toBeInstanceOf(TextProcessor);
    });
  });

  describe('Text processing', () => {
    let textProcessor;

    beforeEach(() => {
      textProcessor = new TextProcessor(sampleText);
    });

    test('should have processed sentences', () => {
      expect(textProcessor.processedText.length).toBeGreaterThan(0);
    });

    describe('Sentences', () => {
      test('sentences should be an array of objects', () => {
        textProcessor.processedText.forEach((sentence) => {
          expect(typeof sentence).toBe('object');
        });
      });

      test('every sentence should have a property called sentenceId', () => {
        textProcessor.processedText.forEach((sentence) => {
          expect(sentence).toHaveProperty('sentenceId');
        });
      });

      test('every sentence should have a property called tokens', () => {
        textProcessor.processedText.forEach((sentence) => {
          expect(sentence).toHaveProperty('tokens');
        });
      });

      test('the property tokens should be an array', () => {
        textProcessor.processedText.forEach((sentence) => {
          expect(sentence.tokens).toBeInstanceOf(Array);
        });
      });

      test('the tokens property length should be greater than 0', () => {
        textProcessor.processedText.forEach((sentence) => {
          expect(sentence.tokens.length).toBeGreaterThan(0);
        });
      });

      test('the first token of every sentence should start with a capital letter', () => {
        textProcessor.processedText.forEach((sentence) => {
          const firstToken = sentence.tokens.find(
            (token) => !token.isPunctuationSign
          );
          const firstLetter = firstToken.token.charAt(0);
          expect(firstLetter).toMatch(/[A-Z]/);
        });
      });

      test('the lats token of every sentence should be a period ', () => {
        textProcessor.processedText.forEach((sentence) => {
          const lastToken = sentence.tokens[sentence.tokens.length - 1];
          expect(lastToken.token).toBe('.');
        });
      });
    });

    xdescribe('Tokens', () => {
      test('a token (that is not a punctuation sign) should have the "languages" property', () => {
        const selectedSentence =
          textProcessor.processedText[
            Math.floor(Math.random() * textProcessor.processedText.length)
          ];
        expect(selectedSentence.tokens[3]).toHaveProperty('languages');
      });
    });
  });
});
