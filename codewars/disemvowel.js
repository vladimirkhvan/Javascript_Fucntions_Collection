function disemvowel(str) {
    let vowels = "aeiou".split("");

    return str.split("").filter(item => !vowels.includes(item.toLowerCase())).join("");
}