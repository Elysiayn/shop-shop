export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export function ibdPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {

  });
}
