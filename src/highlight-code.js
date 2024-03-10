const applyCode = (txt, reg, color) => {
  return txt.replace(reg, `<span style="color: ${color}"><b>$1</b></span>`);
};


const applySyntaxHighlight = (code, language, colors) => {

  console.log(colors);
  switch (language) {
    case 'javascript':
      // Strings
      code = applyCode(code, /(.*)/g, colors[0].color);
      // Reserved Words
      code = applyCode(code, /\b(var|function|if|else|for|while|console.log)\b/g, colors[1].color);
      // Types
      code = applyCode(code, /\b(string|number|boolean)\b/g, colors[2].color);
      // Multiple line comments
      code = applyCode(code, /(\/\*.*?\*\/)/g, colors[4].color);
      // One line comments
      code = applyCode(code, /(\/\/.*?\n)/g, colors[3].color);
      break;

    case 'java':
      // Strings
      code = applyCode(code, /(.*)/g, colors[0].color);
      // Reserved Words
      code = applyCode(code, /\b(package|public|class|static|if|else)\b/g, colors[1].color);
      // Types
      code = applyCode(code, /\b(void|int|char|boolean)\b/g, colors[2].color);
      // One line comments
      code = applyCode(code, /(\/\/.*?\n)/g, colors[4].color);
      // Multiple line comments
      code = applyCode(code, /(\/\*.*?\*\/)/g, colors[3].color);
      break;

    case 'python':
      // Strings
      code = applyCode(code, /(.*)/g, colors[0].color);
      // Reserved Words
      code = applyCode(code, /\b(def|class|if|else|while|print)\b/g, colors[1].color);
      // Types
      code = applyCode(code, /\b(str|int|float|bool)\b/g, colors[2].color);
      // One line comments
      code = applyCode(code, /(#[^\n]*)/g, colors[4].color);
      // Multiple line comments
      code = applyCode(code, /(\/\*.*?\*\/)/g, colors[3].color);
      break;
    default:
      console.warn('Not a supported language');
  }

  return code;
};

export default function Apply(cd, colors, language) {
  const text = `<code>${cd}</code>`;

  const codeRegex = /<code>[\s\S]*<\/code>/i;
  var code = text.match(codeRegex)[0];

  code = applySyntaxHighlight(code, language, colors);

  return `<pre>${text.replace(codeRegex, code)}</pre>`
}

