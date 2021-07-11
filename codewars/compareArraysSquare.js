// check if 2nd array has squared element of 1st
function comp(array1, array2) {

  if (array1 == null || array2 == null) {
    return false;
  }

  array1 = array1.map(item => item ** 2);

  if (array1.sort().join(" ") == array2.sort().join(" ")) {
    return true;
  }

  return false;

}