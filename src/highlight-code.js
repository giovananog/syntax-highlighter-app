const applyCode = (txt, reg, color) => txt.replace(reg, `<span style="color: ${color}"><b>$&</b></span>`);




const applySyntaxHighlight = (code, language) => {
  
  switch (language) {
    case 'javascript':
      // Reserved Words
      code = applyCode(code, /\b(var|function|if|else|for|while)\b/g, 'd857cf');
      // Types
      code = applyCode(code, /\b(string|number|boolean)\b/g, '1385e2');
      // One line comments
      code = applyCode(code, /(\/\/.*?\n)/g, '267703');
      // Multiline comments
      code = applyCode(code, /(\/\*[\s\S]*\*\/)/g, '267703');
      // Strings
      code = applyCode(code, /(".*?")/g, 'ce9178');
      break;
    case 'java':
      // Reserved Words
      code = applyCode(code, /\b(package|public|class|static|if|else)\b/g, 'd857cf');
      // Types
      code = applyCode(code, /\b(void|int|char|boolean)\b/g, '1385e2');
      // One line comments
      code = applyCode(code, /(\/\/.*?\n)/g, '267703');
      // Multiline comments
      code = applyCode(code, /(\/\*[\s\S]*\*\/)/g, '267703');
      // Strings
      code = applyCode(code, /(\".*?\")/g, 'ce9178');
      break;
    case 'python':
      // Reserved Words
      code = applyCode(code, /\b(def|class|if|else|while)\b/g, 'd857cf');
      // Types
      code = applyCode(code, /\b(str|int|float|bool)\b/g, '1385e2');
      // One line comments
      code = applyCode(code, /(#[^\n]*)/g, '267703');
      // Multiline comments
      code = applyCode(code, /(\'\'\'[\s\S]*?\'\'\')|(\"\"\"[\s\S]*?\"\"\")/g, '267703');
      // Strings
      code = applyCode(code, /(\".*?\")/g, 'ce9178');
      break;
    default:
      console.warn('Not a supported language');
  }

  return code;
};


export default function Apply (cd) {
    
    const text = `<code>${cd}</code>`;
    
    console.log(cd);
    const codeRegex = /<code>[\s\S]*<\/code>/i;
    var code = text.match(codeRegex)[0];
    
    
    const selectedLanguage = 'javascript'; 
    
    code = applySyntaxHighlight(code, selectedLanguage);
    
    return text.replace(codeRegex, code);

}

