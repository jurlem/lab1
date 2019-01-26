//Bonus
// 9 Palindrome

var input = prompt("Please enter a sentence");
console.log(input);


var inputRep = input.replace(/\W/g, '');
console.log(inputRep);

var inputReversed = inputRep.reverse();

if (input === inputReversed) {
  console.log("Great! You've entered a Palindrome!!");
} else {
  console.log("I dont see it any similar! ");
}

/*
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/ 

//10 lorem ipsum
// or backslash in the end of the line instead of "" + on each row
var multiStr= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut tincidunt ligula. Fusce iaculis risus nec justo maximus, a tempus purus condimentum. Fusce volutpat ante at est ultrices ornare. Ut ut diam ut purus tempor bibendum fringilla vel dolor. Morbi congue ex sit amet orci ullamcorper sagittis. Vivamus congue leo metus, vel efficitur urna lacinia sit amet. Sed sed lacus in ante eleifend pulvinar. Quisque pretium, dolor luctus cursus interdum, arcu massa cursus ante, sit amet euismod magna ipsum a mi. Maecenas egestas, ex nec lacinia consequat, eros neque iaculis enim, facilisis aliquam nibh tellus quis libero." +

"Donec elementum sem vitae scelerisque rhoncus. Donec accumsan pharetra enim ac aliquet. Morbi ut turpis ut nibh varius egestas nec at sapien. Proin odio est, gravida eget varius eget, lacinia eu nunc. Pellentesque imperdiet eu libero ut sodales. Nunc sit amet eros quis lectus venenatis luctus rhoncus sed arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus." +

"Aliquam suscipit porta massa, non viverra odio. Proin aliquam malesuada nunc, non semper tortor tristique sagittis. Donec eleifend, arcu at pulvinar tincidunt, mauris turpis aliquam libero, et dapibus velit sapien at lorem. Ut varius tellus vitae placerat feugiat. Duis et pretium enim, ut sodales magna. Maecenas ac placerat diam. Etiam in risus fermentum, hendrerit nibh at, viverra mi. Morbi ullamcorper quam tellus, at ornare metus tincidunt vehicula.";


// Make your program count the number of words in the string
console.log(multiStr.split(/\s+/).length);

//Make your program count the number of times the latin word et appears

console.log(multiStr.match("et"));