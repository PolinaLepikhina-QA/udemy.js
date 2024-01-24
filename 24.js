const lines = 5;
let result = "";
let space = "\s\s\s\s\s\s";
console.log(space);

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < i; j++) {
		result += "**";
	}
	result += "*";
	result += "\n";
}

console.log(result);