Sudocode:
let letters = "abcdefghijklmnopqrstuvwxyz"
answer = " "
shift = number of spaces to move
str = given string
index = letters.indexOf (str[i]);
** indexOf of lets you grab the index number in the letters array that corresponds to each letter in the string.
ex. hello,
if index = letters.indexOf (str[0]) (which is the "H") then,
index = 7 (letters[h])
----------
function gets two parameters, a string word(str) and  shift

ENCRYPT:
Create for loop to iterate over the length of str
if str[i] > 25 {
  index = letters.indexOf (str[i]);
  * create "position" variable which stores the length of letter - index
  answer += letter[shift - position]
}
 otherwise {
   answer += original letter position + the shift quantity
 }

 DECRYPT:
 opposite of ENCRYPT
 create loop over length of str

 if str[i] < 0 {
    the position is index - shift;

    answer += position + 26 which = the index on letters string

 }
 else {
   answer += original letter position - shift quantity
 }
