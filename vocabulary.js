/* Nội dung luyện tập tự biên soạn bằng tiếng Việt; không phải đề thi TOPIK chính thức. */
window.VOCAB = (() => {
  const groups = [
    ['Gia đình & con người', `
가족|gia đình|우리 가족은 네 명이에요.|Gia đình tôi có bốn người.
부모님|bố mẹ (kính ngữ)|부모님은 베트남에 사세요.|Bố mẹ tôi sống ở Việt Nam.
아버지|bố|아버지는 요리를 잘하세요.|Bố tôi nấu ăn giỏi.
어머니|mẹ|어머니와 같이 시장에 가요.|Tôi đi chợ cùng mẹ.
형|anh trai (nam gọi)|저는 형이 한 명 있어요.|Tôi có một anh trai (người nói là nam).
오빠|anh trai (nữ gọi)|오빠는 대학생이에요.|Anh trai tôi là sinh viên (người nói là nữ).
누나|chị gái (nam gọi)|누나는 병원에서 일해요.|Chị gái tôi làm việc ở bệnh viện (người nói là nam).
언니|chị gái (nữ gọi)|언니하고 영화를 봐요.|Tôi xem phim cùng chị gái (người nói là nữ).
동생|em|동생은 아직 학생이에요.|Em tôi vẫn còn là học sinh.
할아버지|ông|할아버지께 전화를 드려요.|Tôi gọi điện cho ông.
할머니|bà|할머니는 꽃을 좋아하세요.|Bà tôi thích hoa.
남편|chồng|남편과 저녁을 먹어요.|Tôi ăn tối cùng chồng.
아내|vợ|아내는 한국어를 배워요.|Vợ tôi học tiếng Hàn.
아이|trẻ em, đứa trẻ|아이가 공원에서 놀아요.|Đứa trẻ chơi ở công viên.
아들|con trai|아들은 올해 일곱 살이에요.|Con trai tôi năm nay bảy tuổi.
딸|con gái|딸이 그림을 그리고 있어요.|Con gái tôi đang vẽ tranh.
친구|bạn bè|주말에 친구를 만나요.|Tôi gặp bạn vào cuối tuần.
이웃|hàng xóm|이웃이 아주 친절해요.|Hàng xóm rất thân thiện.
이름|tên|이름이 뭐예요?|Bạn tên là gì?
나이|tuổi|나이가 어떻게 되세요?|Anh/chị bao nhiêu tuổi? (lịch sự)
`],
    ['Đời sống & nhà cửa', `
집|nhà|우리 집은 학교에서 가까워요.|Nhà tôi gần trường.
방|phòng|방을 깨끗하게 청소해요.|Tôi dọn phòng sạch sẽ.
거실|phòng khách|거실에서 텔레비전을 봐요.|Tôi xem ti vi ở phòng khách.
부엌|bếp|부엌에서 점심을 만들어요.|Tôi làm bữa trưa trong bếp.
화장실|nhà vệ sinh|화장실이 어디에 있어요?|Nhà vệ sinh ở đâu?
침대|giường|침대 옆에 책상이 있어요.|Có bàn học cạnh giường.
책상|bàn học, bàn làm việc|책상 위에 공책이 있어요.|Có quyển vở trên bàn.
의자|ghế|이 의자는 편해요.|Chiếc ghế này thoải mái.
문|cửa|문을 닫아 주세요.|Xin hãy đóng cửa.
창문|cửa sổ|창문을 열어도 돼요?|Tôi mở cửa sổ được không?
냉장고|tủ lạnh|우유를 냉장고에 넣어요.|Tôi cho sữa vào tủ lạnh.
세탁기|máy giặt|세탁기로 옷을 빨아요.|Tôi giặt quần áo bằng máy giặt.
에어컨|máy điều hòa|더워서 에어컨을 켜요.|Vì nóng nên tôi bật điều hòa.
전등|đèn điện|자기 전에 전등을 꺼요.|Tôi tắt đèn trước khi ngủ.
열쇠|chìa khóa|가방에서 열쇠를 찾아요.|Tôi tìm chìa khóa trong túi.
우산|ô, dù|비가 와서 우산을 가져가요.|Vì trời mưa nên tôi mang ô theo.
휴대폰|điện thoại di động|휴대폰을 충전해야 해요.|Tôi phải sạc điện thoại.
수건|khăn|깨끗한 수건을 사용하세요.|Hãy dùng khăn sạch.
거울|gương|외출하기 전에 거울을 봐요.|Tôi soi gương trước khi ra ngoài.
쓰레기|rác|쓰레기를 분리해서 버려요.|Tôi phân loại rác rồi bỏ đi.
`],
    ['Ăn uống', `
밥|cơm; bữa ăn|아침에 밥을 먹었어요.|Tôi đã ăn cơm vào buổi sáng.
물|nước|물을 한 잔 마셔요.|Tôi uống một cốc nước.
차|trà|따뜻한 차를 마시고 싶어요.|Tôi muốn uống trà ấm.
커피|cà phê|커피에 설탕을 넣지 않아요.|Tôi không cho đường vào cà phê.
우유|sữa|아침마다 우유를 마셔요.|Sáng nào tôi cũng uống sữa.
빵|bánh mì|이 빵은 부드러워요.|Bánh mì này mềm.
과일|trái cây|식사 후에 과일을 먹어요.|Tôi ăn trái cây sau bữa ăn.
사과|táo|사과 두 개를 샀어요.|Tôi đã mua hai quả táo.
바나나|chuối|바나나를 하나 먹었어요.|Tôi đã ăn một quả chuối.
채소|rau củ|건강을 위해 채소를 많이 먹어요.|Tôi ăn nhiều rau củ để giữ sức khỏe.
고기|thịt|고기를 잘 익혀서 드세요.|Hãy ăn thịt được nấu chín kỹ.
생선|cá (dùng làm thực phẩm)|저녁에 생선을 구워요.|Tôi nướng cá vào bữa tối.
달걀|trứng|달걀을 두 개 삶아요.|Tôi luộc hai quả trứng.
김치|kim chi|김치가 조금 매워요.|Kim chi hơi cay.
국|canh|국이 뜨거우니까 조심하세요.|Canh nóng nên hãy cẩn thận.
국수|mì, bún dạng sợi|점심으로 국수를 먹어요.|Tôi ăn mì vào bữa trưa.
식당|nhà hàng, quán ăn|학교 앞 식당에서 만나요.|Chúng ta gặp nhau tại quán ăn trước trường nhé.
메뉴|thực đơn; món trong thực đơn|메뉴를 보고 음식을 골라요.|Tôi xem thực đơn rồi chọn món ăn.
주문|việc gọi món, đặt hàng|주문을 바꾸고 싶어요.|Tôi muốn đổi món đã gọi.
계산|việc thanh toán; tính toán|계산은 제가 할게요.|Để tôi thanh toán nhé.
`],
    ['Thời gian & thời tiết', `
오늘|hôm nay|오늘은 월요일이에요.|Hôm nay là thứ Hai.
어제|hôm qua|어제 도서관에 갔어요.|Hôm qua tôi đã đến thư viện.
내일|ngày mai|내일 다시 만나요.|Hẹn gặp lại ngày mai.
아침|buổi sáng; bữa sáng|아침 여섯 시에 일어나요.|Tôi thức dậy lúc sáu giờ sáng.
점심|buổi trưa; bữa trưa|점심은 열두 시에 먹어요.|Tôi ăn trưa lúc mười hai giờ.
저녁|buổi tối; bữa tối|저녁에는 집에서 쉬어요.|Buổi tối tôi nghỉ ngơi ở nhà.
주말|cuối tuần|주말에 등산을 해요.|Tôi leo núi vào cuối tuần.
시간|thời gian; giờ|지금 시간이 있어요?|Bây giờ bạn có thời gian không?
분|phút|십 분만 기다려 주세요.|Xin hãy đợi mười phút thôi.
달|tháng; mặt trăng|다음 달에 여행을 가요.|Tôi đi du lịch vào tháng sau.
계절|mùa|가장 좋아하는 계절은 봄이에요.|Mùa tôi thích nhất là mùa xuân.
봄|mùa xuân|봄에는 꽃이 피어요.|Hoa nở vào mùa xuân.
여름|mùa hè|여름에는 날씨가 더워요.|Thời tiết nóng vào mùa hè.
가을|mùa thu|가을에는 하늘이 맑아요.|Bầu trời quang đãng vào mùa thu.
겨울|mùa đông|겨울에는 따뜻하게 입으세요.|Hãy mặc ấm vào mùa đông.
날씨|thời tiết|오늘 날씨가 어때요?|Hôm nay thời tiết thế nào?
비|mưa|오후에 비가 올 거예요.|Chiều nay trời sẽ mưa.
눈|tuyết; mắt|밖에 눈이 많이 내려요.|Ngoài trời tuyết rơi nhiều.
바람|gió|바람이 세게 불어요.|Gió thổi mạnh.
기온|nhiệt độ không khí|내일은 기온이 내려갈 거예요.|Ngày mai nhiệt độ sẽ giảm.
`],
    ['Học tập', `
학교|trường học|학교까지 걸어서 가요.|Tôi đi bộ đến trường.
학생|học sinh, sinh viên|저는 베트남 학생이에요.|Tôi là học sinh/sinh viên Việt Nam.
선생님|giáo viên (kính ngữ)|선생님께 질문을 해요.|Tôi hỏi giáo viên một câu hỏi.
수업|giờ học, buổi học|수업은 아홉 시에 시작해요.|Buổi học bắt đầu lúc chín giờ.
책|sách|매일 한국어 책을 읽어요.|Hằng ngày tôi đọc sách tiếng Hàn.
공책|vở|공책에 새 단어를 써요.|Tôi viết từ mới vào vở.
연필|bút chì|연필로 이름을 쓰세요.|Hãy viết tên bằng bút chì.
지우개|cục tẩy|지우개를 빌려도 돼요?|Tôi mượn cục tẩy được không?
숙제|bài tập về nhà|숙제를 다 했어요.|Tôi đã làm xong bài tập về nhà.
시험|kỳ thi; bài thi|다음 주에 시험이 있어요.|Tuần sau có kỳ thi.
문제|câu hỏi, bài tập; vấn đề|이 문제를 같이 풀어요.|Chúng ta cùng giải câu này nhé.
답|đáp án, câu trả lời|답을 확인해 보세요.|Hãy kiểm tra đáp án.
질문|câu hỏi; việc hỏi|질문이 있으면 손을 드세요.|Nếu có câu hỏi, hãy giơ tay.
도서관|thư viện|도서관에서는 조용히 하세요.|Hãy giữ yên lặng trong thư viện.
단어|từ vựng|하루에 단어 다섯 개를 외워요.|Mỗi ngày tôi học thuộc năm từ.
문법|ngữ pháp|문법을 예문과 함께 공부해요.|Tôi học ngữ pháp cùng câu ví dụ.
발음|phát âm|발음을 듣고 따라 해 보세요.|Hãy nghe phát âm rồi thử đọc theo.
복습|việc ôn tập|잠들기 전에 복습을 해요.|Tôi ôn tập trước khi ngủ.
예습|việc chuẩn bị bài trước|내일 수업을 위해 예습을 해요.|Tôi chuẩn bị bài trước cho buổi học ngày mai.
성적|điểm số, kết quả học tập|꾸준히 공부해서 성적이 올랐어요.|Nhờ học đều đặn nên điểm số đã tăng.
`],
    ['Công việc', `
회사|công ty|저는 작은 회사에서 일해요.|Tôi làm việc ở một công ty nhỏ.
직원|nhân viên|직원에게 안내를 부탁했어요.|Tôi đã nhờ nhân viên hướng dẫn.
동료|đồng nghiệp|동료와 점심을 먹어요.|Tôi ăn trưa cùng đồng nghiệp.
사장님|giám đốc, chủ (kính ngữ)|사장님은 지금 회의 중이세요.|Giám đốc hiện đang họp.
회의|cuộc họp|회의는 오후 두 시에 있어요.|Cuộc họp diễn ra lúc hai giờ chiều.
업무|công việc, nghiệp vụ|오늘 업무를 정리해요.|Tôi sắp xếp công việc hôm nay.
출근|việc đi làm|출근 시간에는 길이 막혀요.|Đường bị tắc vào giờ đi làm.
퇴근|việc tan làm|퇴근 후에 운동을 해요.|Tôi tập thể dục sau khi tan làm.
월급|lương tháng|이번 달 월급을 받았어요.|Tôi đã nhận lương tháng này.
휴가|kỳ nghỉ phép|다음 주에 휴가를 내려고 해요.|Tôi định xin nghỉ phép vào tuần sau.
면접|phỏng vấn|내일 면접을 보러 가요.|Ngày mai tôi đi phỏng vấn.
이력서|sơ yếu lý lịch, CV|이력서를 이메일로 보냈어요.|Tôi đã gửi CV qua thư điện tử.
경력|kinh nghiệm làm việc|이 일을 한 경력이 삼 년이에요.|Tôi có ba năm kinh nghiệm làm công việc này.
지원|việc ứng tuyển; hỗ trợ|지원 동기를 설명해 주세요.|Xin hãy giải thích lý do ứng tuyển.
계약|hợp đồng, việc ký kết|계약 내용을 꼼꼼히 읽어요.|Tôi đọc kỹ nội dung hợp đồng.
마감|hạn chót, việc kết thúc|보고서 마감은 금요일이에요.|Hạn nộp báo cáo là thứ Sáu.
보고서|báo cáo|보고서를 작성하고 있어요.|Tôi đang soạn báo cáo.
자료|tài liệu, dữ liệu|회의 자료를 준비해 주세요.|Xin hãy chuẩn bị tài liệu cuộc họp.
일정|lịch trình|일정이 바뀌면 알려 주세요.|Nếu lịch trình thay đổi, hãy báo cho tôi.
책임|trách nhiệm|맡은 일에 책임을 져야 해요.|Cần chịu trách nhiệm với việc mình đảm nhận.
`],
    ['Di chuyển & du lịch', `
버스|xe buýt|버스를 타고 학교에 가요.|Tôi đi xe buýt đến trường.
지하철|tàu điện ngầm|지하철이 버스보다 빨라요.|Tàu điện ngầm nhanh hơn xe buýt.
택시|taxi|짐이 많아서 택시를 탔어요.|Vì nhiều hành lý nên tôi đã đi taxi.
기차|tàu hỏa|기차표를 미리 예매했어요.|Tôi đã đặt trước vé tàu.
비행기|máy bay|비행기로 세 시간 걸려요.|Đi máy bay mất ba giờ.
자전거|xe đạp|공원에서 자전거를 타요.|Tôi đạp xe trong công viên.
정류장|trạm xe buýt|다음 정류장에서 내려요.|Tôi xuống ở trạm tiếp theo.
역|ga, trạm tàu|역 앞에서 기다릴게요.|Tôi sẽ đợi trước ga.
공항|sân bay|공항에 두 시간 전에 도착했어요.|Tôi đã đến sân bay trước hai giờ.
표|vé; bảng biểu|표 두 장 주세요.|Cho tôi hai vé.
여권|hộ chiếu|여권을 안전한 곳에 보관하세요.|Hãy cất hộ chiếu ở nơi an toàn.
여행|du lịch, chuyến đi|여행 계획을 세우고 있어요.|Tôi đang lên kế hoạch du lịch.
지도|bản đồ|지도를 보고 길을 찾아요.|Tôi xem bản đồ để tìm đường.
길|đường|길을 잃어서 도움을 요청했어요.|Tôi bị lạc nên đã nhờ giúp đỡ.
오른쪽|bên phải|은행은 오른쪽에 있어요.|Ngân hàng ở bên phải.
왼쪽|bên trái|왼쪽으로 가세요.|Hãy đi sang bên trái.
호텔|khách sạn|호텔에 짐을 맡겼어요.|Tôi đã gửi hành lý ở khách sạn.
예약|việc đặt trước|예약을 확인하고 싶어요.|Tôi muốn xác nhận thông tin đặt trước.
짐|hành lý, đồ đạc|짐이 너무 무거워요.|Hành lý quá nặng.
관광지|điểm tham quan|이곳은 유명한 관광지예요.|Nơi này là điểm tham quan nổi tiếng.
`],
    ['Sức khỏe', `
몸|cơ thể|몸을 따뜻하게 하세요.|Hãy giữ ấm cơ thể.
머리|đầu; tóc|머리가 아파서 좀 쉬었어요.|Vì đau đầu nên tôi đã nghỉ một chút.
얼굴|khuôn mặt|찬물로 얼굴을 씻어요.|Tôi rửa mặt bằng nước lạnh.
손|tay|식사 전에 손을 씻어요.|Tôi rửa tay trước bữa ăn.
발|bàn chân|새 신발 때문에 발이 아파요.|Tôi đau chân vì đôi giày mới.
배|bụng; thuyền; quả lê|배가 아파서 병원에 갔어요.|Vì đau bụng nên tôi đã đi bệnh viện.
목|cổ; họng|목이 아파서 말을 하기 힘들어요.|Tôi đau họng nên khó nói.
병원|bệnh viện, cơ sở khám bệnh|병원에 진료 예약을 했어요.|Tôi đã đặt lịch khám ở bệnh viện.
약국|hiệu thuốc|약국에서 약을 샀어요.|Tôi đã mua thuốc tại hiệu thuốc.
의사|bác sĩ|의사에게 증상을 설명했어요.|Tôi đã giải thích triệu chứng cho bác sĩ.
간호사|điều dưỡng|간호사가 체온을 쟀어요.|Điều dưỡng đã đo nhiệt độ cơ thể.
약|thuốc|약을 먹기 전에 설명을 읽으세요.|Hãy đọc hướng dẫn trước khi uống thuốc.
감기|cảm lạnh|감기에 걸려서 집에서 쉬어요.|Tôi bị cảm lạnh nên nghỉ ở nhà.
열|sốt; nhiệt|열이 나서 체온을 쟀어요.|Tôi bị sốt nên đã đo thân nhiệt.
기침|ho|밤에 기침이 심해요.|Ban đêm tôi ho nhiều.
증상|triệu chứng|언제부터 증상이 있었어요?|Bạn có triệu chứng từ khi nào?
운동|thể dục, vận động|매일 삼십 분씩 운동해요.|Mỗi ngày tôi tập thể dục ba mươi phút.
건강|sức khỏe|건강을 위해 충분히 자요.|Tôi ngủ đủ để giữ sức khỏe.
휴식|sự nghỉ ngơi|일하는 중에도 휴식이 필요해요.|Ngay cả khi làm việc cũng cần nghỉ ngơi.
스트레스|căng thẳng|음악을 들으면 스트레스가 풀려요.|Khi nghe nhạc, tôi thấy bớt căng thẳng.
`],
    ['Mua sắm & tài chính', `
가게|cửa hàng|가게는 아홉 시에 열어요.|Cửa hàng mở cửa lúc chín giờ.
시장|chợ|시장에서 신선한 채소를 사요.|Tôi mua rau tươi ở chợ.
마트|siêu thị|퇴근길에 마트에 들러요.|Tôi ghé siêu thị trên đường tan làm.
가격|giá cả|이 가방의 가격은 얼마예요?|Chiếc túi này giá bao nhiêu?
돈|tiền|여행을 가려고 돈을 모아요.|Tôi tiết kiệm tiền để đi du lịch.
현금|tiền mặt|현금으로 계산할게요.|Tôi sẽ thanh toán bằng tiền mặt.
카드|thẻ|카드로 결제할 수 있어요?|Tôi có thể thanh toán bằng thẻ không?
영수증|hóa đơn, biên lai|영수증을 주세요.|Xin cho tôi biên lai.
할인|giảm giá|오늘은 이 옷을 할인해요.|Hôm nay chiếc áo này được giảm giá.
교환|việc đổi hàng; trao đổi|크기가 작아서 교환하고 싶어요.|Vì kích cỡ nhỏ nên tôi muốn đổi hàng.
환불|việc hoàn tiền|환불이 가능한가요?|Có thể hoàn tiền không?
크기|kích cỡ|좀 더 큰 크기가 있어요?|Có kích cỡ lớn hơn một chút không?
색깔|màu sắc|어떤 색깔을 좋아하세요?|Bạn thích màu nào?
옷|quần áo|겨울옷을 정리해요.|Tôi sắp xếp quần áo mùa đông.
신발|giày, dép|이 신발을 신어 봐도 돼요?|Tôi đi thử đôi giày này được không?
가방|túi, cặp|가방 안에 지갑이 있어요.|Có ví tiền trong túi.
은행|ngân hàng|은행에서 계좌를 만들었어요.|Tôi đã mở tài khoản tại ngân hàng.
계좌|tài khoản ngân hàng|계좌 번호를 확인하세요.|Hãy kiểm tra số tài khoản.
저축|việc tiết kiệm tiền|매달 조금씩 저축을 해요.|Mỗi tháng tôi tiết kiệm một ít tiền.
생활비|chi phí sinh hoạt|이번 달 생활비가 늘었어요.|Chi phí sinh hoạt tháng này đã tăng.
`],
    ['Cảm xúc & quan hệ', `
기쁨|niềm vui|작은 일에서도 기쁨을 찾아요.|Tôi tìm niềm vui cả trong những việc nhỏ.
슬픔|nỗi buồn|친구와 이야기하며 슬픔을 나눠요.|Tôi chia sẻ nỗi buồn khi nói chuyện với bạn.
걱정|nỗi lo|너무 걱정하지 마세요.|Đừng lo lắng quá.
행복|hạnh phúc|가족과 함께하는 시간이 행복을 줘요.|Thời gian ở bên gia đình mang lại hạnh phúc.
사랑|tình yêu|사랑을 말과 행동으로 표현해요.|Tôi thể hiện tình yêu bằng lời nói và hành động.
관심|sự quan tâm; hứng thú|한국 문화에 관심이 많아요.|Tôi rất quan tâm đến văn hóa Hàn Quốc.
기분|tâm trạng|오늘은 기분이 좋아요.|Hôm nay tâm trạng tôi tốt.
약속|cuộc hẹn; lời hứa|세 시에 친구와 약속이 있어요.|Tôi có hẹn với bạn lúc ba giờ.
초대|lời mời; việc mời|생일 파티에 초대해 줘서 고마워요.|Cảm ơn bạn đã mời tôi đến tiệc sinh nhật.
선물|quà tặng|친구에게 작은 선물을 줬어요.|Tôi đã tặng bạn một món quà nhỏ.
축하|sự chúc mừng|졸업을 진심으로 축하해요.|Tôi chân thành chúc mừng bạn tốt nghiệp.
감사|sự biết ơn|도와주신 분께 감사를 전해요.|Tôi gửi lời cảm ơn đến người đã giúp mình.
사과하다|xin lỗi|약속에 늦어서 사과했어요.|Tôi đã xin lỗi vì đến cuộc hẹn muộn.
믿다|tin tưởng|저는 친구의 말을 믿어요.|Tôi tin lời bạn.
이해하다|hiểu|서로의 입장을 이해하려고 노력해요.|Chúng tôi cố gắng hiểu lập trường của nhau.
존중하다|tôn trọng|다른 사람의 의견을 존중해요.|Tôi tôn trọng ý kiến của người khác.
친절하다|thân thiện, tử tế|이 가게 직원은 친절해요.|Nhân viên cửa hàng này tử tế.
외롭다|cô đơn|혼자 살면 가끔 외로워요.|Khi sống một mình, thỉnh thoảng tôi thấy cô đơn.
기대하다|mong đợi|새 학기를 기대하고 있어요.|Tôi đang mong đợi học kỳ mới.
갈등|mâu thuẫn, xung đột|대화를 통해 갈등을 해결해요.|Chúng tôi giải quyết mâu thuẫn bằng đối thoại.
`],
    ['Xã hội & môi trường', `
사회|xã hội|사회 문제에 관심을 가져요.|Tôi quan tâm đến các vấn đề xã hội.
문화|văn hóa|서로 다른 문화를 배워요.|Chúng tôi học các nền văn hóa khác nhau.
전통|truyền thống|전통을 다음 세대에 전해요.|Chúng ta truyền lại truyền thống cho thế hệ sau.
환경|môi trường|환경을 보호하는 일이 중요해요.|Việc bảo vệ môi trường rất quan trọng.
오염|sự ô nhiễm|대기 오염을 줄여야 해요.|Cần giảm ô nhiễm không khí.
재활용|việc tái chế|재활용이 가능한 물건을 모아요.|Tôi gom các đồ vật có thể tái chế.
에너지|năng lượng|에너지를 아끼려고 전등을 꺼요.|Tôi tắt đèn để tiết kiệm năng lượng.
기후|khí hậu|기후 변화가 생활에 영향을 줘요.|Biến đổi khí hậu ảnh hưởng đến cuộc sống.
인구|dân số|이 도시의 인구가 늘고 있어요.|Dân số của thành phố này đang tăng.
교육|giáo dục|교육의 기회를 넓혀야 해요.|Cần mở rộng cơ hội giáo dục.
경제|kinh tế|경제 뉴스를 매일 읽어요.|Tôi đọc tin kinh tế mỗi ngày.
기술|công nghệ; kỹ thuật|새로운 기술이 생활을 바꿔요.|Công nghệ mới thay đổi cuộc sống.
정보|thông tin|정보가 정확한지 확인하세요.|Hãy kiểm tra xem thông tin có chính xác không.
인터넷|Internet|인터넷으로 필요한 정보를 찾아요.|Tôi tìm thông tin cần thiết qua Internet.
개인정보|thông tin cá nhân|개인정보를 함부로 공개하지 마세요.|Đừng tùy tiện công khai thông tin cá nhân.
봉사|hoạt động phục vụ, tình nguyện|주말마다 봉사 활동을 해요.|Cuối tuần nào tôi cũng làm hoạt động tình nguyện.
정책|chính sách|새 정책의 효과를 살펴봐요.|Chúng ta xem xét hiệu quả của chính sách mới.
원인|nguyên nhân|문제의 원인을 먼저 찾아요.|Trước tiên hãy tìm nguyên nhân của vấn đề.
결과|kết quả|조사 결과를 표로 정리했어요.|Tôi đã trình bày kết quả khảo sát bằng bảng.
해결|việc giải quyết|문제 해결을 위해 함께 노력해요.|Chúng ta cùng cố gắng để giải quyết vấn đề.
`],
    ['Động từ & diễn đạt', `
가다|đi|지금 도서관에 가요.|Bây giờ tôi đi đến thư viện.
오다|đến|친구가 우리 집에 와요.|Bạn đến nhà tôi.
먹다|ăn|천천히 먹으세요.|Hãy ăn chậm.
마시다|uống|운동 후에 물을 마셔요.|Tôi uống nước sau khi tập thể dục.
보다|xem, nhìn|주말에 영화를 봐요.|Tôi xem phim vào cuối tuần.
듣다|nghe|한국어 방송을 들어요.|Tôi nghe chương trình phát thanh tiếng Hàn.
읽다|đọc|잠들기 전에 책을 읽어요.|Tôi đọc sách trước khi ngủ.
쓰다|viết; dùng|매일 짧은 일기를 써요.|Mỗi ngày tôi viết nhật ký ngắn.
말하다|nói|조금 천천히 말해 주세요.|Xin hãy nói chậm hơn một chút.
배우다|học (tiếp nhận kiến thức)|친구에게 한국 요리를 배워요.|Tôi học nấu món Hàn từ bạn.
공부하다|học, học bài|하루에 삼십 분씩 공부해요.|Mỗi ngày tôi học ba mươi phút.
일하다|làm việc|저는 월요일부터 금요일까지 일해요.|Tôi làm việc từ thứ Hai đến thứ Sáu.
쉬다|nghỉ ngơi|피곤하면 잠깐 쉬세요.|Nếu mệt, hãy nghỉ một lát.
자다|ngủ|보통 밤 열한 시에 자요.|Tôi thường ngủ lúc mười một giờ đêm.
일어나다|thức dậy; đứng dậy|아침 일찍 일어나요.|Tôi thức dậy sớm vào buổi sáng.
만들다|làm, tạo ra|주말에 직접 빵을 만들어요.|Cuối tuần tôi tự làm bánh mì.
찾다|tìm; tìm thấy|잃어버린 지갑을 찾았어요.|Tôi đã tìm thấy chiếc ví bị mất.
기다리다|chờ đợi|여기에서 잠깐 기다리세요.|Hãy chờ ở đây một lát.
필요하다|cần thiết|도움이 필요하면 말씀하세요.|Nếu cần giúp đỡ, hãy nói nhé.
가능하다|có thể, khả thi|온라인으로 예약이 가능해요.|Có thể đặt chỗ trực tuyến.
`]
  ];
  return groups.flatMap(([topic, rows]) => rows.trim().split('\n').map(row => {
    const [ko, vi, example, translation] = row.split('|');
    return { ko, vi, topic, example, translation };
  })).map((entry, i) => ({ id: `v${String(i + 1).padStart(3, '0')}`, ...entry }));
})();

window.DIALOGUES = [
  {
    id: 'd01', title: 'Lần đầu làm quen', level: 'Sơ cấp',
    lines: [
      { speaker: 'A', ko: '안녕하세요? 저는 민수예요. 이름이 뭐예요?', vi: 'Xin chào. Tôi là Minsu. Bạn tên là gì?' },
      { speaker: 'B', ko: '안녕하세요? 저는 린이에요. 베트남 사람이에요.', vi: 'Xin chào. Tôi là Linh. Tôi là người Việt Nam.' },
      { speaker: 'A', ko: '만나서 반가워요. 한국어를 공부해요?', vi: 'Rất vui được gặp bạn. Bạn học tiếng Hàn à?' },
      { speaker: 'B', ko: '네, 매일 저녁에 공부해요.', vi: 'Vâng, tôi học vào mỗi buổi tối.' }
    ],
    questions: [
      { q: 'Linh đến từ đâu?', options: ['Việt Nam', 'Hàn Quốc', 'Nhật Bản', 'Trung Quốc'], answer: 0, explain: '린 nói 베트남 사람이에요: Tôi là người Việt Nam.' },
      { q: 'Linh học tiếng Hàn khi nào?', options: ['Mỗi sáng', 'Chỉ cuối tuần', 'Mỗi buổi tối', 'Mỗi buổi trưa'], answer: 2, explain: '매일 저녁에 có nghĩa là mỗi buổi tối.' }
    ]
  },
  {
    id: 'd02', title: 'Gọi món ở quán ăn', level: 'Sơ cấp',
    lines: [
      { speaker: 'A', ko: '어서 오세요. 몇 분이세요?', vi: 'Xin chào quý khách. Quý khách có mấy người ạ?' },
      { speaker: 'B', ko: '두 명이에요. 비빔밥 두 개 주세요.', vi: 'Hai người ạ. Cho chúng tôi hai phần cơm trộn.' },
      { speaker: 'A', ko: '음료도 주문하시겠어요?', vi: 'Quý khách có muốn gọi đồ uống không ạ?' },
      { speaker: 'B', ko: '아니요. 물만 주세요. 그리고 덜 맵게 해 주세요.', vi: 'Không ạ. Chỉ cho chúng tôi nước lọc. Và hãy làm bớt cay giúp tôi.' },
      { speaker: 'A', ko: '네, 알겠습니다. 잠시만 기다려 주세요.', vi: 'Vâng, tôi hiểu rồi. Xin quý khách đợi một lát.' }
    ],
    questions: [
      { q: 'Khách gọi món gì?', options: ['Hai phần mì', 'Một phần cơm trộn', 'Hai phần cơm trộn', 'Hai cốc cà phê'], answer: 2, explain: '비빔밥 두 개 là hai phần cơm trộn.' },
      { q: 'Khách yêu cầu món ăn như thế nào?', options: ['Cay hơn', 'Ít cay hơn', 'Lạnh hơn', 'Không có cơm'], answer: 1, explain: '덜 맵게 해 주세요 là hãy làm bớt cay.' }
    ]
  },
  {
    id: 'd03', title: 'Hỏi đường đến thư viện', level: 'Sơ cấp',
    lines: [
      { speaker: 'A', ko: '실례합니다. 도서관에 어떻게 가요?', vi: 'Xin lỗi làm phiền. Tôi đi đến thư viện như thế nào?' },
      { speaker: 'B', ko: '이 길로 쭉 가세요. 은행 앞에서 오른쪽으로 가세요.', vi: 'Hãy đi thẳng theo đường này. Rẽ phải ở phía trước ngân hàng.' },
      { speaker: 'A', ko: '걸어서 얼마나 걸려요?', vi: 'Đi bộ mất bao lâu?' },
      { speaker: 'B', ko: '십 분쯤 걸려요. 도서관은 공원 옆에 있어요.', vi: 'Mất khoảng mười phút. Thư viện nằm cạnh công viên.' },
      { speaker: 'A', ko: '알겠습니다. 감사합니다.', vi: 'Tôi hiểu rồi. Cảm ơn bạn.' }
    ],
    questions: [
      { q: 'Cần rẽ phải ở đâu?', options: ['Trước bệnh viện', 'Sau trường học', 'Trong công viên', 'Trước ngân hàng'], answer: 3, explain: '은행 앞에서 오른쪽으로 가세요: Rẽ phải ở trước ngân hàng.' },
      { q: 'Đi bộ đến thư viện mất khoảng bao lâu?', options: ['5 phút', '10 phút', '20 phút', '30 phút'], answer: 1, explain: '십 분쯤 걸려요 nghĩa là mất khoảng mười phút.' }
    ]
  },
  {
    id: 'd04', title: 'Hẹn học cùng nhau', level: 'Sơ cấp',
    lines: [
      { speaker: 'A', ko: '토요일에 같이 한국어를 공부할까요?', vi: 'Thứ Bảy chúng ta cùng học tiếng Hàn nhé?' },
      { speaker: 'B', ko: '좋아요. 몇 시에 만날까요?', vi: 'Được đấy. Chúng ta gặp nhau lúc mấy giờ?' },
      { speaker: 'A', ko: '오후 두 시는 어때요?', vi: 'Hai giờ chiều thì thế nào?' },
      { speaker: 'B', ko: '두 시에는 약속이 있어요. 세 시에 만나요.', vi: 'Hai giờ tôi có hẹn rồi. Chúng ta gặp lúc ba giờ nhé.' },
      { speaker: 'A', ko: '그럼 세 시에 도서관 앞에서 만나요.', vi: 'Vậy gặp nhau lúc ba giờ trước thư viện nhé.' }
    ],
    questions: [
      { q: 'Cuối cùng họ hẹn gặp lúc mấy giờ?', options: ['2 giờ sáng', '2 giờ chiều', '3 giờ chiều', '4 giờ chiều'], answer: 2, explain: 'Đề xuất lúc 2 giờ được đổi thành 세 시: 3 giờ chiều theo ngữ cảnh.' },
      { q: 'Họ gặp nhau ở đâu?', options: ['Trước thư viện', 'Trong quán ăn', 'Trước ngân hàng', 'Tại nhà'], answer: 0, explain: '도서관 앞에서: ở trước thư viện.' }
    ]
  },
  {
    id: 'd05', title: 'Đổi một chiếc áo', level: 'Sơ cấp',
    lines: [
      { speaker: 'A', ko: '어제 산 옷을 교환하고 싶어요.', vi: 'Tôi muốn đổi chiếc áo đã mua hôm qua.' },
      { speaker: 'B', ko: '어떤 점이 불편하세요?', vi: 'Có điểm nào khiến anh/chị không thoải mái ạ?' },
      { speaker: 'A', ko: '크기가 조금 작아요. 더 큰 것이 있어요?', vi: 'Kích cỡ hơi nhỏ. Có chiếc nào lớn hơn không?' },
      { speaker: 'B', ko: '네, 있어요. 영수증을 가지고 오셨어요?', vi: 'Vâng, có ạ. Anh/chị có mang biên lai đến không?' },
      { speaker: 'A', ko: '네, 여기 있어요. 같은 색깔로 주세요.', vi: 'Vâng, ở đây ạ. Cho tôi cùng màu nhé.' }
    ],
    questions: [
      { q: 'Vì sao khách muốn đổi áo?', options: ['Màu không đẹp', 'Áo hơi nhỏ', 'Áo quá đắt', 'Áo bị rách'], answer: 1, explain: '크기가 조금 작아요: Kích cỡ hơi nhỏ.' },
      { q: 'Khách muốn chiếc áo mới có màu như thế nào?', options: ['Màu đỏ', 'Màu đen', 'Màu khác', 'Cùng màu chiếc cũ'], answer: 3, explain: '같은 색깔로 주세요: Cho tôi cùng màu.' }
    ]
  },
  {
    id: 'd06', title: 'Đổi lịch họp', level: 'Trung cấp',
    lines: [
      { speaker: 'A', ko: '내일 오전 회의를 오후로 옮길 수 있을까요?', vi: 'Có thể chuyển cuộc họp sáng mai sang buổi chiều không?' },
      { speaker: 'B', ko: '무슨 일이 있으세요?', vi: 'Có việc gì vậy ạ?' },
      { speaker: 'A', ko: '오전에 고객을 만나야 해서요. 오후 세 시는 괜찮으세요?', vi: 'Vì buổi sáng tôi phải gặp khách hàng. Ba giờ chiều có tiện không ạ?' },
      { speaker: 'B', ko: '네, 괜찮습니다. 다른 직원들에게도 알려 드릴게요.', vi: 'Vâng, được ạ. Tôi sẽ thông báo cho các nhân viên khác nữa.' },
      { speaker: 'A', ko: '감사합니다. 회의 자료는 오늘 안으로 보내겠습니다.', vi: 'Cảm ơn. Tôi sẽ gửi tài liệu họp trong hôm nay.' }
    ],
    questions: [
      { q: 'Lý do xin đổi lịch họp là gì?', options: ['Phải gặp khách hàng buổi sáng', 'Chưa soạn báo cáo', 'Đi nghỉ phép', 'Bị ốm'], answer: 0, explain: '오전에 고객을 만나야 해서요: Vì phải gặp khách hàng vào buổi sáng.' },
      { q: 'Tài liệu họp sẽ được gửi khi nào?', options: ['Sáng mai', 'Sau cuộc họp', 'Trong hôm nay', 'Tuần sau'], answer: 2, explain: '오늘 안으로 nghĩa là trong phạm vi ngày hôm nay.' }
    ]
  },
  {
    id: 'd07', title: 'Một thói quen vì môi trường', level: 'Trung cấp',
    lines: [
      { speaker: 'A', ko: '요즘 커피를 살 때마다 개인 컵을 가지고 가요.', vi: 'Dạo này mỗi khi mua cà phê, tôi đều mang cốc cá nhân.' },
      { speaker: 'B', ko: '좋은 습관이네요. 불편하지는 않아요?', vi: 'Đó là thói quen tốt đấy. Có bất tiện không?' },
      { speaker: 'A', ko: '처음에는 자주 잊어버렸는데 이제는 익숙해졌어요.', vi: 'Ban đầu tôi hay quên, nhưng bây giờ đã quen rồi.' },
      { speaker: 'B', ko: '저도 일회용 컵 사용을 줄이고 싶어요.', vi: 'Tôi cũng muốn giảm dùng cốc một lần.' },
      { speaker: 'A', ko: '가방 옆에 컵을 두면 잊지 않고 챙길 수 있어요.', vi: 'Nếu để cốc cạnh túi, bạn có thể nhớ mang theo mà không quên.' }
    ],
    questions: [
      { q: 'Ban đầu A gặp khó khăn gì?', options: ['Không thích cà phê', 'Cốc quá nhỏ', 'Không có cửa hàng', 'Thường quên mang cốc'], answer: 3, explain: '처음에는 자주 잊어버렸는데: Ban đầu thường hay quên.' },
      { q: 'A đề nghị cách nào để nhớ mang cốc?', options: ['Để cốc cạnh túi', 'Mua cà phê ít hơn', 'Để cốc ở công ty', 'Dùng cốc giấy'], answer: 0, explain: '가방 옆에 컵을 두면: Nếu để cốc cạnh túi.' }
    ]
  },
  {
    id: 'd08', title: 'Tìm cách học bền vững', level: 'Trung cấp',
    lines: [
      { speaker: 'A', ko: '단어를 많이 외워도 금방 잊어버려서 고민이에요.', vi: 'Tôi băn khoăn vì dù học thuộc nhiều từ nhưng lại quên rất nhanh.' },
      { speaker: 'B', ko: '단어만 외우기보다는 짧은 문장을 만들어 보는 게 어때요?', vi: 'Thay vì chỉ học thuộc từ, bạn thử đặt câu ngắn thì sao?' },
      { speaker: 'A', ko: '좋은 생각이에요. 복습은 얼마나 자주 해야 할까요?', vi: 'Ý hay đấy. Nên ôn tập thường xuyên đến mức nào?' },
      { speaker: 'B', ko: '하루 뒤에 다시 보고, 며칠 뒤에 한 번 더 확인해 보세요.', vi: 'Hãy xem lại sau một ngày, rồi kiểm tra thêm một lần sau vài ngày.' },
      { speaker: 'A', ko: '그럼 오늘 배운 단어로 일기를 써 봐야겠어요.', vi: 'Vậy tôi sẽ thử viết nhật ký bằng những từ học hôm nay.' },
      { speaker: 'B', ko: '네, 한꺼번에 많이 하기보다 조금씩 꾸준히 해 보세요.', vi: 'Vâng, hãy thử học một ít đều đặn thay vì học thật nhiều trong một lần.' }
    ],
    questions: [
      { q: 'B khuyên A làm gì với từ vựng?', options: ['Chỉ đọc nghĩa tiếng Việt', 'Đặt câu ngắn', 'Học hết từ điển', 'Ngừng ôn tập'], answer: 1, explain: '짧은 문장을 만들어 보다: thử tạo các câu ngắn.' },
      { q: 'A quyết định thử làm gì?', options: ['Viết nhật ký với từ mới', 'Đi du lịch', 'Mua giáo trình', 'Đăng ký thi ngay'], answer: 0, explain: '오늘 배운 단어로 일기를 써 보다: thử viết nhật ký bằng từ học hôm nay.' }
    ]
  }
];

window.WRITING = [
  {
    id: 'w01', title: 'Tin nhắn xin đến muộn', level: 'Sơ cấp',
    prompt: 'Bạn hẹn bạn mình lúc 3 giờ ở thư viện nhưng xe buýt đến muộn. Hãy viết một tin nhắn 3–4 câu: xin lỗi, nêu lý do, báo sẽ đến muộn 10 phút và nhờ bạn đợi. Đây là bài luyện tự biên soạn.',
    guide: ['Dùng 미안해요 hoặc 늦어서 미안해요 để xin lỗi.', 'Nối lý do bằng -아/어서; nói số phút với số Hán Hàn: 십 분.', 'Giữ đuôi câu lịch sự -아요/어요 nhất quán.'],
    sample: '늦어서 미안해요. 버스가 늦게 와서 십 분쯤 늦을 것 같아요. 도서관 앞에서 조금만 기다려 주세요. 곧 갈게요.',
    translation: 'Xin lỗi vì đến muộn. Vì xe buýt đến muộn nên có lẽ tôi sẽ muộn khoảng mười phút. Hãy đợi tôi một chút trước thư viện nhé. Tôi sẽ đến ngay.'
  },
  {
    id: 'w02', title: 'Tự giới thiệu bản thân', level: 'Sơ cấp',
    prompt: 'Viết 5–6 câu giới thiệu tên, quê quán, nghề nghiệp, sở thích và lý do học tiếng Hàn. Bạn có thể dùng thông tin tưởng tượng khi luyện tập.',
    guide: ['Giới thiệu danh từ bằng 이에요/예요: 학생이에요, 린이에요.', 'Nêu sở thích bằng -는 것을 좋아해요 hoặc danh từ + 을/를 좋아해요.', 'Nêu mục đích bằng -(으)려고 hoặc lý do bằng -아/어서; không cần viết câu dài.'],
    sample: '안녕하세요? 저는 린이에요. 베트남 하노이에서 왔어요. 지금은 회사에 다녀요. 주말에는 음악을 듣고 책을 읽어요. 한국 드라마를 좋아해서 한국어를 배워요. 앞으로 한국 친구들과 이야기하고 싶어요.',
    translation: 'Xin chào. Tôi là Linh. Tôi đến từ Hà Nội, Việt Nam. Hiện tại tôi đi làm ở công ty. Cuối tuần tôi nghe nhạc và đọc sách. Vì thích phim Hàn nên tôi học tiếng Hàn. Sau này tôi muốn nói chuyện với những người bạn Hàn Quốc.'
  },
  {
    id: 'w03', title: 'Một ngày cuối tuần đáng nhớ', level: 'Sơ cấp',
    prompt: 'Kể một ngày cuối tuần trong khoảng 6–8 câu. Nêu bạn đi đâu, cùng ai, làm gì, thời tiết ra sao và cảm nghĩ. Đây là bài luyện viết đoạn văn, không phải câu hỏi thi chính thức.',
    guide: ['Dùng thì quá khứ -았/었어요 cho các việc đã xảy ra.', 'Sắp xếp trình tự với 먼저, 그리고, 그 후에.', 'Kết đoạn bằng một cảm nhận cụ thể, chẳng hạn 즐거웠어요 hoặc 다시 가고 싶어요.'],
    sample: '지난 토요일에 친구와 공원에 갔어요. 날씨가 맑고 바람도 시원했어요. 먼저 공원 안을 천천히 걸었어요. 그리고 나무 아래에서 김밥을 먹었어요. 친구가 사진을 많이 찍어 줬어요. 오후에는 근처 카페에서 이야기를 했어요. 오랜만에 친구를 만나서 정말 즐거웠어요. 다음 달에도 같이 가고 싶어요.',
    translation: 'Thứ Bảy tuần trước tôi đi công viên cùng bạn. Trời quang và gió cũng mát. Trước tiên chúng tôi đi bộ chậm rãi trong công viên. Sau đó chúng tôi ăn kimbap dưới gốc cây. Bạn đã chụp nhiều ảnh cho tôi. Buổi chiều chúng tôi trò chuyện ở quán cà phê gần đó. Lâu rồi mới gặp bạn nên tôi rất vui. Tháng sau tôi cũng muốn cùng bạn đến đó.'
  },
  {
    id: 'w04', title: 'Email hỏi thông tin lớp học', level: 'Trung cấp',
    prompt: 'Viết email lịch sự cho một trung tâm để hỏi về lớp tiếng Hàn buổi tối: hỏi ngày học, thời gian và cách đăng ký. Nêu rằng bạn đi làm ban ngày. Khoảng 6–8 câu; không cần gửi email thật.',
    guide: ['Mở đầu bằng 안녕하세요 và giới thiệu mục đích 연락드립니다.', 'Dùng -는지 알고 싶습니다 hoặc -(으)ㄹ 수 있는지 để hỏi gián tiếp.', 'Kết thúc bằng 확인 부탁드립니다 và 감사합니다; dùng văn phong -습니다 nhất quán.'],
    sample: '안녕하세요. 한국어 저녁 수업에 대해 문의드립니다. 저는 낮에 회사에서 일하기 때문에 저녁에 공부하고 싶습니다. 수업은 일주일에 며칠 진행되는지 알고 싶습니다. 수업 시작 시간과 종료 시간도 알려 주시면 감사하겠습니다. 또한 온라인으로 신청할 수 있는지 궁금합니다. 확인 부탁드립니다. 감사합니다.',
    translation: 'Xin chào. Tôi liên hệ để hỏi về lớp tiếng Hàn buổi tối. Vì ban ngày tôi làm việc ở công ty nên tôi muốn học vào buổi tối. Tôi muốn biết lớp học diễn ra mấy ngày một tuần. Tôi sẽ rất biết ơn nếu được thông báo giờ bắt đầu và kết thúc. Ngoài ra, tôi muốn biết có thể đăng ký trực tuyến không. Kính nhờ kiểm tra giúp. Xin cảm ơn.'
  },
  {
    id: 'w05', title: 'Mô tả số liệu khảo sát giả định', level: 'Trung cấp',
    prompt: 'Dữ liệu luyện tập GIẢ ĐỊNH: khảo sát 100 người học về phương pháp học tiếng Hàn chính: năm 2020 — sách giấy 50%, video 30%, ứng dụng 20%; năm 2025 — sách giấy 30%, video 25%, ứng dụng 45%. Hãy viết một đoạn văn nêu chủ đề, so sánh hai năm và xu hướng nổi bật. Không suy ra nguyên nhân như một kết luận đã được khảo sát xác nhận.',
    guide: ['Mở đoạn: 한국어 학습 방법에 대한 가상 조사 결과이다. Nói rõ đây là khảo sát giả định.', 'Mô tả tăng/giảm bằng -에서 -로 늘었다/줄었다. Từ 20% lên 45% là tăng 25 điểm phần trăm, không phải 25%.', 'Chỉ dùng 이 자료만으로 원인을 알 수는 없다 khi muốn nhắc giới hạn; tránh bịa nguyên nhân từ số liệu.'],
    sample: '이 자료는 100명을 대상으로 한 한국어 학습 방법에 대한 가상 조사 결과이다. 2020년에는 종이책이 50%로 가장 높았고, 동영상은 30%, 앱은 20%였다. 반면 2025년에는 앱이 45%로 가장 높았다. 앱의 비율은 25퍼센트포인트 증가한 반면, 종이책은 50%에서 30%로 감소했다. 동영상도 30%에서 25%로 소폭 줄었다. 전반적으로 앱을 주로 이용하는 비율이 높아졌음을 알 수 있다. 다만 이 자료만으로 변화의 원인을 알 수는 없다.',
    translation: 'Tài liệu này là kết quả khảo sát giả định về phương pháp học tiếng Hàn của 100 người. Năm 2020, sách giấy cao nhất với 50%, video là 30%, ứng dụng là 20%. Trái lại, năm 2025 ứng dụng cao nhất với 45%. Tỷ lệ ứng dụng tăng 25 điểm phần trăm, trong khi sách giấy giảm từ 50% xuống 30%. Video cũng giảm nhẹ từ 30% xuống 25%. Nhìn chung có thể thấy tỷ lệ chủ yếu dùng ứng dụng tăng lên. Tuy nhiên, chỉ từ dữ liệu này thì không thể biết nguyên nhân của thay đổi.'
  },
  {
    id: 'w06', title: 'Dàn ý nghị luận: học trực tuyến', level: 'Nâng cao',
    prompt: 'Viết bài nghị luận về lợi ích, khó khăn và cách học trực tuyến hiệu quả. Gợi ý dàn ý 4 đoạn: mở bài; lợi ích; hạn chế và giải pháp; kết luận. Bài mẫu dưới đây là mẫu ngắn để học cấu trúc, không phải bài thi TOPIK hoàn chỉnh và không có chấm điểm AI.',
    guide: ['Mở bài đặt vấn đề, chốt phạm vi; dùng -다고 볼 수 있다 hoặc -는 경향이 있다 khi cần mức độ nhận định phù hợp.', 'Mỗi đoạn thân bài có một luận điểm, giải thích và ví dụ cụ thể. Liên kết bằng 반면, 따라서, 예를 들어.', 'Kết luận tổng hợp quan điểm và điều kiện để áp dụng; giữ văn viết -다, không trộn với -요.'],
    sample: '온라인 학습은 시간과 장소의 제약을 줄여 준다는 점에서 유용한 학습 방식이다. 그러나 학습 효과를 높이려면 장점뿐 아니라 한계도 살펴볼 필요가 있다.\n\n우선 온라인 학습은 자신의 일정에 맞추어 공부할 수 있다는 장점이 있다. 예를 들어 직장인은 퇴근 후 짧은 강의를 들을 수 있고, 이해하지 못한 부분을 반복해서 확인할 수도 있다.\n\n반면 혼자 공부하면 집중력을 유지하기 어렵고 질문에 대한 답을 바로 얻지 못할 수 있다. 따라서 매주 구체적인 목표를 세우고 학습 시간을 정해 두는 것이 좋다. 다른 학습자와 정기적으로 의견을 나누는 것도 도움이 된다.\n\n결국 온라인 학습의 효과는 자료의 양보다 학습 방법과 지속성에 달려 있다. 자신의 상황에 맞는 계획을 세우고 꾸준히 실천한다면 온라인 학습을 효과적으로 활용할 수 있을 것이다.',
    translation: 'Học trực tuyến là phương thức hữu ích vì giảm giới hạn về thời gian và địa điểm. Tuy nhiên, để nâng cao hiệu quả cần xem xét cả ưu điểm lẫn hạn chế.\n\nTrước hết, ưu điểm là có thể học theo lịch trình của mình. Chẳng hạn người đi làm có thể nghe bài giảng ngắn sau giờ làm và xem lại nhiều lần phần chưa hiểu.\n\nTrái lại, khi học một mình có thể khó duy trì tập trung và không nhận được trả lời ngay cho câu hỏi. Vì vậy, nên đặt mục tiêu cụ thể từng tuần và ấn định thời gian học. Việc định kỳ trao đổi ý kiến với người học khác cũng có ích.\n\nCuối cùng, hiệu quả học trực tuyến phụ thuộc vào phương pháp và tính bền bỉ hơn là lượng tài liệu. Nếu lập kế hoạch phù hợp với hoàn cảnh và thực hành đều đặn, chúng ta có thể sử dụng việc học trực tuyến hiệu quả.'
  }
];
