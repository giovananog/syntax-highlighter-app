const applyCode = (txt, reg, color) => {
  // console.log('Input Text:', txt);
  // console.log('Regular Expression:', reg);
  // console.log('Color:', color);
  
  return txt.replace(reg, `<span style="color: #${color}"><b>$1</b></span>`);
};


const applySyntaxHighlight = (code, language) => {
  
  switch (language) {
    case 'javascript':
      // Strings
      code = applyCode(code, /(.*)/g, 'ce9178');
      // Reserved Words
      code = applyCode(code, /\b(var|function|if|else|for|while|console.log)\b/g, 'd857cf');
      // Types
      code = applyCode(code, /\b(string|number|boolean)\b/g, '1385e2');
      // Multple line comments
      code = applyCode(code, /(\/\*.*?\*\/)/g, '267703');
      // One line comments
      code = applyCode(code, /(\/\/.*?\n)/g, '267703');
      break;

    case 'java':
      // Strings
      code = applyCode(code, /(".*?")/g, 'ce9178');
      // Reserved Words
      code = applyCode(code, /\b(package|public|class|static|if|else)\b/g, 'd857cf');
      // Types
      code = applyCode(code, /\b(void|int|char|boolean)\b/g, '1385e2');
      // One line comments
      code = applyCode(code, /(\/\/.*?\n)/g, '267703');
      // Multple line comments
      code = applyCode(code, /(\/\*.*?\*\/)/g, '267703');
      break;

    case 'python':
      // Strings
      code = applyCode(code, /(".*?")/g, 'ce9178');
      // Reserved Words
      code = applyCode(code, /\b(def|class|if|else|while)\b/g, 'd857cf');
      // Types
      code = applyCode(code, /\b(str|int|float|bool)\b/g, '1385e2');
      // One line comments
      code = applyCode(code, /(#[^\n]*)/g, '267703');
      // Multple line comments
      code = applyCode(code, /(\/\*.*?\*\/)/g, '267703');
      break;
    default:
      console.warn('Not a supported language');
  }

  return code;
};

export default function Apply(cd) {
  const text = `<code>${cd}</code>`;

  const codeRegex = /<code>[\s\S]*<\/code>/i;
  var code = text.match(codeRegex)[0];

  const selectedLanguage = 'javascript';
  code = applySyntaxHighlight(code, selectedLanguage);

  return `<pre>${text.replace(codeRegex, code)}</pre>`
}

