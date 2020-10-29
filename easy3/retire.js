// Build a program that logs when the user will retire and how many more years the user has to work until retirement.
"use strict";

var rlSync = require('readline-sync');
let current_age = rlSync.question("What is your age? ");
let retire_age = rlSync.question("At what age would you like to retire? ");
let delta = retire_age - current_age;
let year = new Date();

console.log(`It's ${year.getFullYear()}. You will retire in ${year.getFullYear() + delta}`);
console.log(`You have only ${delta} years of work to go!`);