export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  [...promises].forEach((object) => {
    if (Promise.resolve(object) !== object) {
      throw new Error('Not all elements are promises.');
    }
  });

  return new Promise((resolve, reject) => {
    let count = 0;
    promises.forEach((promise, index) => {
      promise.then(() => {
        if (index == promises.length - 1 && count == 0) {
          resolve();
        } else if (index == promises.length - 1 && count > 0) {
          reject();
        }
      }).catch(() => { count += 1; });
    });
  });
}
