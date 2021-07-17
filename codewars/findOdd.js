function findOdd(arr) {

  if (arr.length == 1) {
    return arr[0];
  }

  let counter = 1;

  arr.sort((a, b) => a - b);

  console.log(arr);

  for (let i = 0; i < arr.length - 1; i++) {


    if (arr[i] == arr[i + 1]) {
      counter++;
      continue;
    }

    if (counter % 2 == 1) {
      return arr[i];
    }

    if (i == arr.length - 2) {
      return arr[arr.length - 1]
    }

    counter = 1;

  }

  return false;
}