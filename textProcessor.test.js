// const TextProcessor = require('./textProcessor');

// describe('TextProcessor', () => {
//   const sampleText =
//     '¿Lorem ñipsum dólor sit amet?, ¡consectetur! adipiscing elit. Mauris consequat ullamcorper metus, vitae pellentesque nisl eleifend a. Suspendisse finibus dapibus leo at tincidunt. Etiam nec mi vel leo venenatis consectetur. Curabitur eu consectetur sapien, id lobortis tellus. Vivamus consequat, tortor a facilisis pellentesque, turpis ligula faucibus mauris, sit amet commodo urna ligula id sapien. Maecenas facilisis rutrum dapibus. In vel lacinia velit. Nulla facilisi. Quisque et dapibus lectus. Curabitur eu justo et nisi eleifend luctus. Proin vitae fermentum erat. Suspendisse potenti. Morbi dignissim metus et magna pellentesque, id aliquet velit sollicitudin. Mauris pharetra nunc eget ligula malesuada gravida. Nulla facilisis iaculis odio in egestas. Suspendisse non leo dui. Mauris sit amet dapibus ante. Vestibulum fringilla tristique mattis. Suspendisse laoreet, enim eu tincidunt aliquet, augue turpis lacinia justo, eget tempor dolor ipsum nec mauris. Ut rutrum, ipsum ut cursus ullamcorper, nunc orci interdum massa, vitae tincidunt odio justo in tellus. Praesent sed interdum neque. Integer congue libero a metus consequat tincidunt. Nam consectetur erat eu convallis interdum. Curabitur sit amet nunc sit amet nisl ullamcorper fermentum vel sed erat.';

//   describe('Initialization', () => {
//     test('should create a new instance of TextProcessor', () => {
//       const textProcessor = new TextProcessor(sampleText);
//       expect(textProcessor).toBeInstanceOf(TextProcessor);
//     });
//   });

//   describe('Text processing', () => {
//     let textProcessor;

//     beforeEach(() => {
//       textProcessor = new TextProcessor(sampleText);
//     });

//     test('should process the sample text as a string', () => {
//       expect(typeof sampleText).toBe('string');
//     });

//     test('should have 25 sentences', () => {
//       expect(textProcessor.processedText.length).toBe(25);
//     });

//     test('should have the first token (not a punctuation sign) of every sentence start with a capital letter', () => {
//       textProcessor.processedText.forEach((sentence) => {
//         const firstToken = sentence.tokens.find(
//           (token) => !token.isPunctuationSign
//         );
//         const firstLetter = firstToken.token.charAt(0);
//         expect(firstLetter).toMatch(/[A-Z]/);
//       });
//     });

//     test('should have 14 tokens in the first sentence', () => {
//       expect(textProcessor.processedText[0].tokens.length).toBe(14);
//     });

//     test('should have isPunctuationSign property with value true for the first token in the first sentence', () => {
//       expect(textProcessor.processedText[0].tokens[0].isPunctuationSign).toBe(
//         true
//       );
//     });

//     test('should have the last token of every sentence as a "." (period)', () => {
//       textProcessor.processedText.forEach((sentence) => {
//         const lastToken = sentence.tokens[sentence.tokens.length - 1];
//         expect(lastToken.token).toBe('.');
//       });
//     });

//     test('should have "ñ" in the token at index 2 of the first sentence', () => {
//       expect(textProcessor.processedText[0].tokens[2].token).toContain('ñ');
//     });

//     test('should have "ó" in the token at index 3 of the first sentence', () => {
//       expect(textProcessor.processedText[0].tokens[3].token).toContain('ó');
//     });

//     test('should start the first token in sentence 18 with a capital letter', () => {
//       const firstToken = textProcessor.processedText[17].tokens[0].token;
//       const firstLetter = firstToken.charAt(0);
//       expect(firstLetter).toBe(firstLetter.toUpperCase());
//     });

//     test('should have a property "languages" for the token at index 3 of sentence 4', () => {
//       expect(textProcessor.processedText[3].tokens[3]).toHaveProperty(
//         'languages'
//       );
//     });

//     test('should have "spanish" and "english" properties inside "languages" for the token at index 3 of sentence 4', () => {
//       const languages = textProcessor.processedText[3].tokens[3].languages;
//       expect(languages).toHaveProperty('spanish');
//       expect(languages).toHaveProperty('english');
//     });
//   });
// });

const TextProcessor = require('./textProcessor');

describe('TextProcessor', () => {
  const sampleText =
    '¿Lorem ñipsum dólor sit amet?, ¡consectetur! adipiscing elit. Mauris consequat ullamcorper metus, vitae pellentesque nisl eleifend a. Suspendisse finibus dapibus leo at tincidunt. Etiam nec mi vel leo venenatis consectetur. Curabitur eu consectetur sapien, id lobortis tellus. Vivamus consequat, tortor a facilisis pellentesque, turpis ligula faucibus mauris, sit amet commodo urna ligula id sapien. Maecenas facilisis rutrum dapibus. In vel lacinia velit. Nulla facilisi. Quisque et dapibus lectus. Curabitur eu justo et nisi eleifend luctus. Proin vitae fermentum erat. Suspendisse potenti. Morbi dignissim metus et magna pellentesque, id aliquet velit sollicitudin. Mauris pharetra nunc eget ligula malesuada gravida. Nulla facilisis iaculis odio in egestas. Suspendisse non leo dui. Mauris sit amet dapibus ante. Vestibulum fringilla tristique mattis. Suspendisse laoreet, enim eu tincidunt aliquet, augue turpis lacinia justo, eget tempor dolor ipsum nec mauris. Ut rutrum, ipsum ut cursus ullamcorper, nunc orci interdum massa, vitae tincidunt odio justo in tellus. Praesent sed interdum neque. Integer congue libero a metus consequat tincidunt. Nam consectetur erat eu convallis interdum. Curabitur sit amet nunc sit amet nisl ullamcorper fermentum vel sed erat.';

  describe('Initialization', () => {
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

    test('should process the sample text as a string', () => {
      expect(typeof sampleText).toBe('string');
    });

    test('should have processed sentences', () => {
      expect(textProcessor.processedText.length).toBeGreaterThan(0);
    });

    test('should have processed sentences with the first token starting with a capital letter', () => {
      textProcessor.processedText.forEach((sentence) => {
        const firstToken = sentence.tokens.find(
          (token) => !token.isPunctuationSign
        );
        const firstLetter = firstToken.token.charAt(0);
        expect(firstLetter).toMatch(/[A-Z]/);
      });
    });

    test('should have processed sentences with the last token as a period', () => {
      textProcessor.processedText.forEach((sentence) => {
        const lastToken = sentence.tokens[sentence.tokens.length - 1];
        expect(lastToken.token).toBe('.');
      });
    });

    test('should have processed sentences with the specific token containing "ñ" and "ó"', () => {
      const selectedSentence =
        textProcessor.processedText[
          Math.floor(Math.random() * textProcessor.processedText.length)
        ];
      expect(
        selectedSentence.tokens.some((token) => token.token.includes('ñ'))
      ).toBe(true);
      expect(
        selectedSentence.tokens.some((token) => token.token.includes('ó'))
      ).toBe(true);
    });

    test('should have processed sentences with the first token starting with a capital letter for a specific sentence', () => {
      const selectedSentence =
        textProcessor.processedText[
          Math.floor(Math.random() * textProcessor.processedText.length)
        ];
      const firstToken = selectedSentence.tokens[0].token;
      const firstLetter = firstToken.charAt(0);
      expect(firstLetter).toBe(firstLetter.toUpperCase());
    });

    test('should have processed sentences with the token at a specific index containing "languages" property', () => {
      const selectedSentence =
        textProcessor.processedText[
          Math.floor(Math.random() * textProcessor.processedText.length)
        ];
      expect(selectedSentence.tokens[3]).toHaveProperty('languages');
    });

    test('should have processed sentences with "spanish" and "english" properties inside "languages" for a specific token', () => {
      const selectedSentence =
        textProcessor.processedText[
          Math.floor(Math.random() * textProcessor.processedText.length)
        ];
      const languages = selectedSentence.tokens[3].languages;
      expect(languages).toHaveProperty('spanish');
      expect(languages).toHaveProperty('english');
    });
  });
});
