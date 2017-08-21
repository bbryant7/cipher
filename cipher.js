const letters = 'abcdefghijklmnopqrstuvwxyz';


function encipher(str, shift) {
  let answer = '';

  for (var i = 0; i < str.length; i++) {
    let index = letters.indexOf(str[i]);
// can you 25 or 26, if you use 25 the letter[i] needs to be [shift - position - 1] which accounts for the loop index beginning at 0.
    if (index + shift > 26) {
      let position = 26 - index;
      answer += letters[shift - position]

    } else {
      answer += letters[index + shift];

    }
  }
  return answer;


}

function decipher(str, shift) {
  let answer = '';

  for (var i = 0; i < str.length; i++) {
    let index = letters.indexOf(str[i]);
    console.log(index);

    if (index - shift < 0) {
      let position = index - shift;

      answer += letters[ 26 + position]

    } else {
      answer += letters[index - shift];

    }
  }
  return answer;


}


module.exports = {
  encipher,
  decipher
}
