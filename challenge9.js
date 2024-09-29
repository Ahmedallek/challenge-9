function getChange(totalChange, denominations) {
    // Sort the denominations in descending order
    denominations.sort((a, b) => b - a);
    
    const changeResult = {};
    let remainingChange = totalChange;
    
    // Iterate over each denomination
    for (let denom of denominations) {
      if (remainingChange >= denom) {
        // Calculate how many times the denomination fits into the remaining change
        const count = Math.floor(remainingChange / denom);
        changeResult[denom] = count;
        // Subtract the corresponding amount from the remaining change
        remainingChange -= count * denom;
      }
    }
    
    // If remainingChange is not zero, it means exact change cannot be made
    if (remainingChange > 0) {
      return "Cannot make exact change";
    }
    
    return changeResult;
  }
  
  // Example usage:
  const totalChange = 47;
  const denominations = [1, 5, 10, 20];
  
  console.log(getChange(totalChange, denominations));
  // Output: { 20: 2, 5: 1, 1: 2 }
  