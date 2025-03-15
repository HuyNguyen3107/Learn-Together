const arr = [1, 2, 3, 4, 5];

Array.prototype.reduce2 = function (callback, initialValue) {
  const length = this.length;

  let accumulator;

  let startIndex;

  if (arguments.length > 1) {
    accumulator = initialValue;

    startIndex = 0;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumulator = this[0];

    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

function multiplication(total, sum) {
  return total + sum;
}

const result = arr.reduce2(multiplication, 0);
