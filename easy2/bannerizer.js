// Write a function that will take a short line of text, and write it to the console log within a box.

const logInBox = function logInBox(text) {
  let horizontal_edge = `+-${'-'.repeat(text.length)}-+`
  let gap             = `| ${' '.repeat(text.length)} |`
  let textToLog       = `${horizontal_edge}\n` +
                        `${gap}\n` +
                        `| ${text} |\n` +
                        `${gap}\n` +
                        `${horizontal_edge}\n`
  console.log(textToLog);
}

logInBox('In a hole in the ground there lived a hobbit.');
logInBox('');
logInBox('   ');