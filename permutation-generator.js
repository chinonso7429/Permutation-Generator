** start of script.js **

function permuteString(str) {
  if (str.length === 0) return [""];       // Fix for empty string case
  if (str.length === 1) return [str];      // Base case

  const result = new Set(); // Use a Set to avoid duplicate permutations

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);

    for (let perm of permuteString(remaining)) {  // Recursion here
      result.add(char + perm); // Set will automatically handle duplicates
    }
  }

  return Array.from(result);
}



** end of script.js **

