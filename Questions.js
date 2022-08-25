class Questions{
    content;
    answer;
    trueAnswer;
    money;
    constructor(content,answer,trueAnswer,money) {
        this.content = content;
        this.answer = answer;
        this.trueAnswer = trueAnswer;
        this.money = money;
    }
    checkAnswer(answer){
        return answer === this.trueAnswer
    }
}
     let timeCount;
     let message;

     let timeID = setInterval(function(){
         document.getElementById('timeCountDown').innerHTML = timeCount + "giây";
         timeCount--;
         countdown();
     }, 1000);

     function countdown() {
         let styles = document.getElementById('styleTime');
         let styleTime = document.getElementById('timeCountDown');
         if (timeCount < 0) {
             clearInterval(timeID);
             message = window.alert('Hết giờ!');
             reload()
         }
         if (timeCount < 5) {
             styles.style.color = 'red';
             styleTime.style.color = 'red';
         }
     }
     let question1 = new Questions("câu 1: Đâu là một ban nhạc Rock?" ,["A.Bức thư","B.Bức tượng","C.Bức tranh","D.Bức tường"],"D.Bức tường","200.000VNĐ");
     let question2 = new Questions("câu 2: Loài chim nào sau đây có thể bắt chước được tiếng người" ,["A.Chích bông","B.Quạ","C.Vẹt","D.Họa mi"],"C.Vẹt","400.000VNĐ");
     let question3 = new Questions("câu 3: Từ nào cong thiếu trong câu ca dao sau 'Đường vô xứ...quanh quanh.Non xanh nước biếc như tranh họa đồ?" ,["A.Thanh","B.Nghệ","C.Hoa","D.Đoài"],"B.Nghệ","600.000VNĐ");
     let question4 = new Questions("câu 4: Đâu không phải loài động vật có sừng?" ,["A.Sư tử ","B.Tê giác ","C.Linh dương ","D.Tuần lộc "],"A.Sư tử ","1.000.000VNĐ");
     let question5 = new Questions("câu 5: Đâu là tên một loại đàn cổ ở Tây Nguyên?" ,["A.Sỏi ","B.Đá ","C.Cát ","D.Đất"],"B.Đá ","2.000.000VNĐ");
     let question6 = new Questions("câu 6: Cho đến nay từ tiếng Việt nào chưa xuất hiện trong tiếng Anh Oxford?" ,["A.Áo dài ","B.Phở ","C.Bánh mỳ ","D.Nem "],"D.Nem ","3.000.000VNĐ");
     let question7 = new Questions("câu 7: Ca phẫu thuật tách rời thành công cặp  song sinh nào nằm trong 10 sự kiện KH-CN Việt Nam nổi bật năm 2020?" ,["A.Việt - Đức ","B.Cu - Cò ","C.Phi Long - Phi Phụng ","D. Trúc Nhi - Diệu Nhi"],"D. Trúc Nhi - Diệu Nhi","6.000.000VNĐ");
     let question8 = new Questions("câu 8: Ngày 19/11 hàng năm là ngày gì?" ,["A.Ngày thế giới","B.Ngày Toilet thế giới ","C.Ngày quốc tế hạnh phúc ","D.Ngày môi trường thế giới"],"B.Ngày Toilet thế giới ","10.000.000VNĐ");
     let question9 = new Questions("câu 9: Logo hiện tại của câu lạc bộ bóng đá nào sau đây là hình con sư tử?" ,["A.Chelsea ","B.Arsenal","C.Leverpool","D.Manchester United "],"A.Chelsea ","14.000.000VNĐ");
     let question10 = new Questions("câu 10: Trong lễ Hiển Linh (Epiphany) 2019, tổng thống Nga Putin đã thực hiện nghi thức gì ?" ,["A.Đi lên than nóng ","B.Ngâm mình dưới hồ băng","C.Cưỡi ngựa đi săn","D.Câu cá trên băng "],"B.Ngâm mình dưới hồ băng","22.000.000VNĐ");
     let question11 = new Questions("câu 11: Đài thiên văn ALMA được đặt tại quốc gia Nam Mỹ nào?" ,["A.Brazil ","B.Uruguay ","C.Argentina ","D.Chile"],"D.Chile","30.000.000VNĐ");
     let question12 = new Questions("câu 12: Sazae-san là bộ phim dài nhất thế giới ở thể loại nào?" ,["A.Hoạt hình","B.Trinh thám ","C.Hành động ","D.Kinh dị "],"A.Hoạt hình","40.000.000VNĐ");
     let question13 = new Questions("câu 13: Cựu phi hành gia nào là người duy nhất vừa bay vào vũ trụ vừa lặn xuống biển điểm sâu nhất đại dương thuộc rãnh địa Mariana?" ,["A.Bob Behnken ","B.Kate Rubins ","C.Kathy Sullivan ","D.Doug Hurley "],"C.Kathy Sullivan ","60.000.000VNĐ");
     let question14 = new Questions("câu 14: Ngày 10/3 âm lịch hàng năm được chính thức quy định là ngày Quốc lễ Giỗ Tổ Hùng Vương vào triều đại nào trong lịch sử nước ta?" ,["A.Nhà Lý ","B.Nhà Hậu Lê","C.Nhà Nguyễn","D. Nhà Trần "],"C.Nhà Nguyễn","85.000.000VNĐ");
     let question15 = new Questions("câu 15: Những vần thơ 'Trường Sơn chí lớn ông cha 'Cửu Long lòng mẹ bao la sóng trào' nằm trong tác phẩm nào của nhà thơ Lê Anh Xuân?" ,["A.Dáng đứng Việt Nam ","B.Nguyễn Văn Trỗi","C.Gửi miền Bắc","D.Hành quân giữa rừng xuân"],"B.Nguyễn Văn Trỗi","150.000.000VNĐ");

     let questions = [question1 ,question2 ,question3 ,question4 ,question5 ,question6 ,question7 ,question8 ,question9 ,question10 ,question11 ,question12 ,question13 ,question14 ,question15];
     let getQuestion = document.getElementById('question');
     showQuestion(question1);

     function  next(index){
         index++;
         showQuestion(questions[index]);
     }
     function showQuestion(question_1){
         timeCount = 30;
         getQuestion.innerHTML = question_1.content;
         getQuestion.setAttribute("questionScreen",questions.indexOf(question_1));
         for (let i = 0; i< 4; i++){
             let getaswId = document.getElementById('answer_' + (i + 1));
             getaswId.innerHTML = question_1.answer[i];

         }
     }
     showQuestion(question1);
     let index = 0;
     function checkAnswer(id){
         let answer = document.getElementById(id).innerHTML;
         // let getQuestionId = document.getElementById('question');
         if (!confirm("Chốt chưa bạn ây ?")){
             return true;
         }
         if (questions[index].checkAnswer(answer)) {
             alert('Được cuả ló đấy!! Chính xác!');
             if (index === 14) {
                 alert("Đỉnh của chóp! Xin chúc mừng tiệu phú mới nổi");
                 timeCount = 1;
                 reload();
             }
             next(index);
             index++;
             console.log(index);
             document.getElementById('result').innerHTML = "Tiền thưởng là:" + (questions[index].money);
             timeCount = 30;
         } else {
             alert('Gà quá! Sai rồi chú ạ!! Mần lại đê kk');
             reload();
         }
     }
     function reload(){
         location.replace("http://localhost:63342/case%20tudy%20md1/Ai_la_trieu_phu.html?_ijt=7u4f4blpbf60cta8lmdve29i2u&_ij_reload=RELOAD_ON_SAVE");
     }
