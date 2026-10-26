# Hanul — Tiếng Hàn mỗi ngày

Website tự học tiếng Hàn bằng tiếng Việt, dùng HTML/CSS/JavaScript tĩnh, không cần API, cơ sở dữ liệu hoặc gói trả phí.

## Sử dụng

Mở `dist/index.html` trực tiếp để học offline. Với bản ZIP, giải nén toàn bộ trước rồi mở `index.html` trong thư mục giải nén. Không mở riêng tệp HTML ngay bên trong ZIP.

Lộ trình gồm nền tảng, sơ cấp 1, sơ cấp 2, trung cấp, nâng cao. Bài học, ví dụ và câu hỏi tự biên soạn, không sao chép khóa học Edmicro và không phải đề TOPIK chính thức. Thư viện là phần học nền tảng có hệ thống, không đại diện toàn bộ kiến thức tiếng Hàn.

## Tính năng

- Bảng Hangul 19 phụ âm, 21 nguyên âm; ghép âm tiết tương tác.
- Bài học với giải thích tiếng Việt, ví dụ Hàn–Việt, ghi chú và bài luyện.
- 240 từ theo 12 chủ đề; tìm kiếm, lưu từ và thẻ ôn cách quãng.
- 8 hội thoại song ngữ, ẩn/hiện bản dịch và câu hỏi hiểu nội dung.
- Bài luyện sơ cấp, trung/cao cấp, tổng hợp, từ vựng và ôn câu sai. Có giờ, giải thích và lịch sử.
- 6 bài viết với hướng dẫn, mẫu và bản nháp tự lưu.
- Theo dõi tiến độ, mục tiêu, chuỗi ngày học; xuất và nhập bản sao JSON.
- Không có phí học, quảng cáo, khóa bài hoặc khóa API.

## Lưu tiến độ

Dữ liệu ở localStorage của trình duyệt, không tự đồng bộ giữa các thiết bị. Đổi trình duyệt, đổi đường dẫn hoặc xóa dữ liệu có thể làm mất tiến độ. Xuất JSON định kỳ ở mục Tiến độ. Nhập JSON sẽ tải bản sao dữ liệu hiện tại trước khi thay thế.

## Giọng đọc và Internet

Các chữ có trong audio-map.js dùng bản thu MP3 tích hợp trước, không cần giọng cài sẵn. Các câu dài và chữ chưa có bản thu dùng Web Speech với giọng ko-KR của hệ điều hành/trình duyệt. Nếu chưa có giọng Hàn, web sẽ mở hướng dẫn và liên kết Google Dịch để nghe khi bạn chủ động nhấn. Cài gói Korean text-to-speech trong cài đặt ngôn ngữ của thiết bị nếu cần. Chất lượng và khả năng chạy offline phụ thuộc giọng đã cài; một số giọng cần Internet. Chưa có nhận diện giọng nói/chấm phát âm hay chấm bài viết bằng AI. Font chữ online là tùy chọn, thiếu mạng sẽ dùng font hệ thống. Nội dung/bài tập không cần mạng; liên kết nguồn ngoài cần mạng.

Bản trực tuyến công khai qua GitHub Pages, không yêu cầu tài khoản để học. Tiến độ lưu trên từng trình duyệt; dùng xuất/nhập JSON để chuyển giữa điện thoại và máy tính.

## Phát triển và kiểm tra

`node preview.mjs` chạy server tại http://127.0.0.1:4173.

`node check.cjs` chạy kiểm tra cấu trúc dữ liệu, render các trang, ghép Hangul, lưu/khôi phục, dữ liệu nhập, chấm câu hỏi và lịch sử.

Nguồn tham khảo để học tiếp: https://www.iksi.or.kr/lms/main/curriculum.do ; https://www.niied.go.kr/web/NIIED/contents/niiedEng/eng_topikOverview ; https://krdict.korean.go.kr/vie ; https://www.topik.go.kr/
