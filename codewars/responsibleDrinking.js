function hydrate(s) {
    let nums = [1,2,3,4,5,6,7,8,9];
    let sesAdding;
    let glasses = s.split("").filter(arg => nums.includes(+arg)).reduce( (sum, current) => +sum + +current);
    sesAdding = glasses>1 ? "es": "";
    return `${glasses} glass${sesAdding} of water`;
  }