function introduction(name) {
  return `Hi, my name is ${name}.`;
}

introduction("Dylan");
console.log(introduction("Dylan"));

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguage("Gracie", "JavaScript");
console.log(introductionWithLanguage("Gracie", "JavaScript"));

function introductionWithLanguageOptional(name, language = `JavaScript`) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Gracie");
introductionWithLanguageOptional("Gracie", "Next Js");

console.log(introductionWithLanguageOptional("Dylan"));
console.log(introductionWithLanguageOptional("Dylan", "Python"));
