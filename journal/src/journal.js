//backend


export function Entry(entryText) {
  this.userText = entryText;
}

Entry.prototype.vowels = function() {
  var vowels = 0;
  for( var i = 0; i < this.userText.length; i++) {
    if(this.userText[i] === 'a' || this.userText[i] === 'e' || this.userText[i] === 'i' || this.userText[i] === 'o' || this.userText[i] === 'u') {
      vowels++;
    }
  }
  return vowels;
};

Entry.prototype.consonants= function() {
  var consonants = 0;
  for( var i = 0; i < this.userText.length; i++) {
    if(this.userText[i] !== 'a' && this.userText[i] !== 'e' && this.userText[i] !== 'i' && this.userText[i] !== 'o' && this.userText[i] !== 'u') {
      consonants++;
    }
  }
  return consonants;
};
