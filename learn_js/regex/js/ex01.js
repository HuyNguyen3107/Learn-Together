// Regex (Regular Expression): Biểu thức chính quy
// -> Biểu thức xử lý chuỗi nâng cao
// -> Xuất hiện ở hầu hết toàn bộ ngôn ngữ lập trình

// 3 tác dụng chính:
// - So khớp
// - Cắt chuỗi
// - Thay thế

// Cấu trúc của regex:

// const pattern = /regex/modifier

// Các ký tự cở bản

// - string-> Khớp chuỗi nằm trong chuỗi cần kiểm tra

// const pattern = /abcd/gi;

// console.log("abcdefjgn3efiabCd".match(pattern));

// console.log("abcdefabcd".replace(pattern, "888"));

// - ^ (đầu biểu thức) -> Khớp biểu thức nằm ở đầu chuỗi

// - $ (cuối biểu thức) -> Khớp biểu thức nằm ở cuối chuỗi

// [A-Z] -> Khớp chuỗi chữ hoa

// [a-z] -> Khớp chuỗi chữ thường

// [0-9] -> Khớp số

// [charlist] (ví dụ [abcd]) => Khớp danh sách các ký tự

// => Các biểu thức nằm trong cặp ngoặc [] sẽ kết hợp theo hình thức HOẶC.

// Ví dụ: [A-Za-z0-9@] -> Chữ hoa hoặc chữ thường hoặc số hoặc ký tự @

// const pattern = /^[^a-zA-Z]+$/;

// console.log(pattern.test("0"));

// console.log("abcdefjgn3efiabCd".match(pattern));

// console.log("abcdefabcd".replace(pattern, "888"));

// Khớp độ dài: Các biểu thức trong Regex mặc định là 1 ký tự

// {min, max} -> Độ dài từ min đến max
// {min,} -> >= min
// {value} -> độ dài cố định value

// Các ký hiệu viết tắt liên quan đến độ dài

// + -> {1,}
// * -> {0,}
// ? -> {0,1}

// Các ký hiệu viết tắt khác

// \d -> Đại diện cho số
// \D -> không phải là số
// \w -> Đại diện cho chữ hoa, chữ thường, số và dấu gạch dưới
// \W -> Ngược lại của \w
// \s -> Khoảng trắng
// \S -> Không phải khoảng trắng

// Phủ định, hoặc
// ^ -> Phủ định
// | -> Hoặc

// Viết hàm kiểm tra xem chuỗi được đưa vào có phải
// là số điện thoạt Việt Nam hợp lệ hay không

// const pattern = /^(0|\+84)\d{9}$/;

// console.log(pattern.test("0987604321"));
