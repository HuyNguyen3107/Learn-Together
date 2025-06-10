# Mô Tả Chi Tiết Ứng Dụng: MemoryMatch - Trò Chơi Lật Thẻ Ghép Cặp

## 1. Tổng Quan Ứng Dụng

**Tên ứng dụng:** MemoryMatch

**Mục tiêu:** Xây dựng trò chơi lật thẻ ghép cặp (memory card game) đơn giản với giao diện bắt mắt, cho phép người chơi lật các thẻ để tìm các cặp thẻ giống nhau, có tính điểm và xếp hạng.

**Quy mô:** Dự án cá nhân nhỏ, khoảng 7-10 components, 2-3 trang.

**Thời gian phát triển:** 1 tuần (5-7 ngày làm việc).

## 2. Đặc Điểm Kỹ Thuật

### Tech Stack

- **Framework:** React 18.x
- **State Management:** useState và useEffect
- **Styling:** CSS Modules hoặc Styled Components
- **Animations:** Framer Motion (nhẹ) hoặc CSS Transitions
- **Storage:** Local Storage (lưu điểm cao)
- **Build Tool:** Vite
- **Deployment:** Vercel hoặc Netlify

### Cấu Trúc Dự Án

```
src/
├── components/            # Components
│   ├── Card.jsx           # Component thẻ bài
│   ├── GameBoard.jsx      # Bảng trò chơi
│   ├── GameControls.jsx   # Controls (restart, level)
│   ├── Timer.jsx          # Đồng hồ đếm thời gian
│   ├── ScoreBoard.jsx     # Bảng điểm
│   ├── GameOver.jsx       # Màn hình kết thúc
│   └── Header.jsx         # Header trang
├── hooks/                 # Custom hooks
│   └── useGameLogic.js    # Logic trò chơi
├── assets/                # Hình ảnh cho thẻ
│   └── images/            # Thư mục hình ảnh
├── data/                  # Dữ liệu tĩnh
│   └── cards.js           # Thông tin các thẻ
├── pages/                 # Các trang
│   ├── GamePage.jsx       # Trang chơi game
│   └── HighScores.jsx     # Trang điểm cao
├── utils/                 # Hàm tiện ích
│   └── helpers.js         # Các hàm hỗ trợ
├── App.jsx                # Component chính
├── index.css              # Global styles
└── main.jsx               # Entry point
```

## 3. Luật Chơi & Tính Năng

### Luật Chơi Cơ Bản

- Người chơi bắt đầu với một bảng các thẻ úp
- Lật hai thẻ trong mỗi lượt
- Nếu hai thẻ giống nhau, chúng sẽ biến mất/vô hiệu hóa
- Nếu không khớp, chúng sẽ lật lại
- Trò chơi kết thúc khi tất cả các cặp đã được tìm thấy

### Tính Năng Chính

- **Bảng Trò Chơi:**
  - Bảng 4x4 (dễ), 6x4 (trung bình), hoặc 6x6 (khó)
  - Thẻ với hình ảnh/biểu tượng bắt mắt
  - Hiệu ứng lật thẻ
- **Hệ Thống Điểm:**
  - Tính điểm dựa trên thời gian và số lượt lật
  - Điểm thưởng cho việc tìm thấy các cặp liên tiếp
- **Chức Năng Trò Chơi:**
  - Đồng hồ đếm thời gian
  - Đếm số lượt đã chơi
  - Nút restart
  - Chọn độ khó
- **Lưu Trữ & Xếp Hạng:**
  - Lưu điểm cao vào localStorage
  - Hiển thị bảng xếp hạng đơn giản
- **Giao Diện:**
  - Thiết kế responsive
  - Hiệu ứng hoạt ảnh cho các thẻ
  - Phản hồi trực quan khi tìm thấy cặp (đúng/sai)

## 4. Chi Tiết Components

### Card

- Hiển thị một thẻ có hai mặt (úp/ngửa)
- Xử lý sự kiện click
- Animation lật thẻ
- Trạng thái: lật/chưa lật/đã ghép cặp

### GameBoard

- Render grid các thẻ
- Quản lý trạng thái của bảng
- Xử lý logic ghép cặp

### GameControls

- Nút restart game
- Chọn mức độ khó
- Nút pause (tùy chọn)

### Timer

- Đồng hồ đếm ngược hoặc đếm xuôi
- Định dạng thời gian mm:ss
- Tự động dừng khi game kết thúc

### ScoreBoard

- Hiển thị điểm hiện tại
- Hiển thị số lượt đã chơi
- Hiển thị số cặp đã tìm thấy

### GameOver

- Màn hình hiển thị khi game kết thúc
- Hiển thị điểm số và thời gian
- Form nhập tên để lưu điểm (tùy chọn)
- Nút chơi lại

## 5. State Management

- **Game State:** Trạng thái trò chơi (ready, playing, paused, over)
- **Cards State:** Mảng thẻ với thông tin (id, hình ảnh, trạng thái)
- **Selected Cards:** Thẻ đang được chọn trong lượt hiện tại
- **Moves:** Số lượt đã chơi
- **Time:** Thời gian đã chơi
- **Score:** Điểm số hiện tại

## 6. Game Logic

- **Khởi tạo trò chơi:**
  - Tạo mảng các cặp thẻ
  - Xáo trộn ngẫu nhiên
  - Đặt tất cả thẻ ở trạng thái úp
- **Xử lý lượt chơi:**
  - Khi lật thẻ đầu tiên: lưu thẻ vào state
  - Khi lật thẻ thứ hai: so sánh với thẻ đầu tiên
  - Nếu khớp: đánh dấu cả hai đã ghép cặp
  - Nếu không khớp: lật lại sau khoảng thời gian ngắn
- **Kết thúc trò chơi:**
  - Kiểm tra khi tất cả các cặp đã được tìm thấy
  - Tính điểm cuối cùng
  - Kiểm tra và cập nhật điểm cao

## 7. Kế Hoạch Phát Triển (1 tuần)

### Ngày 1: Thiết lập & Cấu trúc

- Khởi tạo dự án với Vite
- Cài đặt các thư viện cần thiết
- Tạo cấu trúc thư mục
- Thiết kế data model
- Thu thập/tạo assets (hình ảnh thẻ)

### Ngày 2-3: Core Components

- Xây dựng Card component với animation
- Xây dựng GameBoard với grid layout
- Phát triển logic cơ bản của trò chơi
- Xử lý lật thẻ và kiểm tra cặp

### Ngày 4-5: Game Features

- Thêm Timer và ScoreBoard
- Xây dựng GameControls
- Tạo màn hình GameOver
- Thêm các cấp độ khó khác nhau
- Phát triển hệ thống tính điểm

### Ngày 6: Polish & Storage

- Thêm hiệu ứng âm thanh đơn giản (tùy chọn)
- Cải thiện UI/UX và animations
- Thêm tính năng lưu điểm cao
- Tạo trang Highscores đơn giản

### Ngày 7: Hoàn thiện

- Testing trên các thiết bị
- Sửa lỗi và tối ưu hiệu suất
- Triển khai lên Vercel hoặc Netlify
- Tạo file README

## 8. Giao Diện Người Dùng

- Thiết kế vui nhộn, màu sắc tươi sáng
- Theme cụ thể (động vật, hoạt hình, emoji, v.v.)
- Responsive trên mobile và desktop
- Hiệu ứng 3D cho việc lật thẻ
- Phản hồi trực quan cho mỗi hành động

## 9. Tính Năng Mở Rộng (Nếu Có Thời Gian)

- Thêm hiệu ứng âm thanh
- Thêm chế độ thời gian (time attack)
- Thêm chế độ multiplayer đơn giản (chia lượt chơi)
- Thêm các theme khác nhau cho thẻ
- Thêm hệ thống achievement đơn giản
- Tích hợp với Firebase để lưu điểm cao online
