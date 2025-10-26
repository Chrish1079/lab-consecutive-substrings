function consecutiveSubstrings(string) {
  const substrings = [];
  // Loop through all possible starting positions
  for (let start = 0; start < string.length; start++) {
   // For each start, loop through all possible end positions
    for (let end = start + 1; end <= string.length; end++) {
      // Slice creates a substring from start to end (exclusive)
      substrings.push(string.slice(start, end));
    }
}
// Return the complete list of consecutive substrings
return substrings;
}

// --- Example Tests ---
if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


