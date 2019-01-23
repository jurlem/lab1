
var hacker1 = "Donald";
console.log("The driver name is " + hacker1);

var hacker2 = prompt("What is the navigater name?");
console.log("The navigator name is " + hacker2);

var driverLength = hacker1.length;
console.log(driverLength);
var naviLength = hacker2.length;
console.log(naviLength);

if(driverLength > naviLength){
  console.log("The Driver has the longest name, it has "  +driverLength + " characters");
} else if (driverLength < naviLength){
  console.log("Yo, navigator got the longest name, it has " + naviLength+ " characters");
} else {
  console.log("wow, you both got equally long names, " +naviLength + " characters!!");
}


// Loops Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
var name= hacker1.toUpperCase();
console.log(name);
var nameSpace="";

for(var i=0; i<name.length; i++) {
  nameSpace += (name[i] + " ");
}
console.log(nameSpace);

//Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
// .split() makes a string to an array
//.reverse() reverses the content of an array
//.join()  join the elements of an array into a string
hackerRev= hacker2.split("");

console.log(hackerRev)
rev = hackerRev.reverse();
console.log(rev);
final= rev.join("");
console.log(final);

var lexi= "";
lexi= hacker1.localeCompare(hacker2);
console.log(lexi)
// pos if 1 is alf bigger, neg if is smaller


if(lexi < 0) {
  console.log("The driver's name goes first");
} else if (lexi > 0) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both got the same name?")
}
