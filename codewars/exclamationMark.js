function remove (string) {
    return string.trim().split(" ").filter(item => item.length - item.split("").filter(char=>char != "!").join("").length != 1 ).join(" ");
}