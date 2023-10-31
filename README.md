# Password Generator

## Description

This is the fifth assignment for the Front-end Bootcamp Course. The goal of this assignment was to complete the JavaScript code for a web-based password generator.

There are three functions which are the key components to the password generator: `getPasswordOption()`, `getRandom()` and `generatePassword()`.

The `getPasswordOptions()` function runs first, this function gives the user a series of prompts asking what character types they want the password to contain and how long they would like the password to be. If the user doesn't select at least one character type then the function will recur and the user will be prompted again, the image below shows how this part of the function works:

![Recursive function](<assets/images/Screenshot 2023-10-31 193036.png>)

This function also gets the number if characters we should select from each chosen character array (stored in the variable `chars`). If the number is a decimal, the number is rounded down and we log that we will need an extra character from a random table.

The `getRandom()` function is now called once for each character array that the user selected. it will take a random character from each table and `.push()` it to an array called `passArr` where we will store the password.

Lastly, the `generatePassword()` function, this function will jumble the password array to mic the characters and them return the data as a string by using the `.join("")` method, below is an image showing how the function works.

![Generate Password function](<assets/images/Screenshot 2023-10-31 194249.png>)

## Installation

N/A

## Usage

The Password Generator is hosted at this link: https://satsumasegment.github.io/password-generator-bootcamp-challenge/

Follow the prompts and then click the "Generate Password" button to generate your password.