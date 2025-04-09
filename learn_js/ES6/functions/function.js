// Export

// Export default: chỉ sử dụng được 1 lần trong 1 file.
// Export <name>: có thể có nhiều

function getMessage() {
  return "Hello world";
}

export const getTotal = (a, b) => a + b;

export const sayHi = () => {
  console.log("Hi");
};

export default getMessage;
