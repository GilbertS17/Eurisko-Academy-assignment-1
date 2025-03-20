function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) {
    return true;
  }
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }
  const firstKeys = Object.keys(obj1);
  const secondKeys = Object.keys(obj2);
  if (firstKeys.length !== secondKeys.length) {
    return false;
  }
  for (let i = 0; i < firstKeys.length; i++) {
    const key = firstKeys[i];
    if (secondKeys.indexOf(key) === -1 || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
