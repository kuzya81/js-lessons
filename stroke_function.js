
const string = "Привет! Как дела? Вроде как все получилось";
function getVowels(string) {
 const vowels=['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я' ];
 const result = string.toLowerCase().split('').filter(function(letter){
 return vowels.includes(letter);
 })
 return result.join('');
};

console.log(getVowels(string));
