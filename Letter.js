function Characters(letters) {
    this.letters = letters; // string value
    this.guessedLetters = false; //boolean value
    this.printThis = function () {
        if (this.letters === " ") {
            // show letters
            console.log(this.letters);
            this.guessedLetters = true;

            // show blank placeholder
        } else {
            console.log("_");
        }
    };

    this.checkCharacter = function (userInput) {
        if (userInput === this.letters) {
            this.guessedLetters = true;
        } else {
            console.log('try again');
        }

    };



};