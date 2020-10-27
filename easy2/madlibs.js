// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

const madlib = function madlib() {
  var rlSync = require('readline-sync');
  const noun = rlSync.question('Enter a noun: ');
  const verb = rlSync.question('Enter a verb: ');
  const adjective = rlSync.question('Enter an adjective: ');
  const adverb = rlSync.question('Enter an adverb: ');

  console.log(`Colorless ${adjective} ${noun}s ${verb} ${adverb}.`);

}

// Colorless green ideas sleep furiously.
madlib();
