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
            if (answer == this.trueAnswer) return true;
            else return false;
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
     let question1 = new Questions("Câu hỏi số 1:<br> Đâu là một ban nhạc Rock?" ,["A.Bức thư","B.Bức tượng","C.Bức tranh","D.Bức tường"],"D.Bức tường","200.000VNĐ");
     let question2 = new Questions("Câu hỏi số 2:<br> Loài chim nào sau đây có thể bắt chước được tiếng người" ,["A.Chích bông","B.Quạ","C.Vẹt","D.Họa mi"],"C.Vẹt","400.000VNĐ");
     let question3 = new Questions("Câu hỏi số 3:<br> Từ nào còn thiếu trong câu ca dao sau 'Đường vô xứ...quanh quanh.Non xanh nước biếc như tranh họa đồ?" ,["A.Thanh","B.Nghệ","C.Hoa","D.Đoài"],"B.Nghệ","600.000VNĐ");
     let question4 = new Questions("Câu hỏi số 4:<br> Đâu không phải loài động vật có sừng?" ,["A.Sư tử ","B.Tê giác ","C.Linh dương ","D.Tuần lộc "],"A.Sư tử ","1.000.000VNĐ");
     let question5 = new Questions("Câu hỏi số 5:<br> Đâu là tên một loại đàn cổ ở Tây Nguyên?" ,["A.Sỏi ","B.Đá ","C.Cát ","D.Đất"],"B.Đá ","2.000.000VNĐ");
     let question6 = new Questions("Câu hỏi số 6:<br> Cho đến nay từ tiếng Việt nào chưa xuất hiện trong tiếng Anh Oxford?" ,["A.Áo dài ","B.Phở ","C.Bánh mỳ ","D.Nem "],"D.Nem ","3.000.000VNĐ");
     let question7 = new Questions("Câu hỏi số 7:<br> Ca phẫu thuật tách rời thành công cặp  song sinh nào nằm trong 10 sự kiện KH-CN Việt Nam nổi bật năm 2020?" ,["A.Việt - Đức ","B.Cu - Cò ","C.Phi Long - Phi Phụng ","D. Trúc Nhi - Diệu Nhi"],"D. Trúc Nhi - Diệu Nhi","6.000.000VNĐ");
     let question8 = new Questions("Câu hỏi số 8:<br> Ngày 19/11 hàng năm là ngày gì?" ,["A.Ngày thế giới","B.Ngày Toilet thế giới ","C.Ngày quốc tế hạnh phúc ","D.Ngày môi trường thế giới"],"B.Ngày Toilet thế giới ","10.000.000VNĐ");
     let question9 = new Questions("Câu hỏi số 9:<br> Logo hiện tại của câu lạc bộ bóng đá nào sau đây là hình con sư tử?" ,["A.Chelsea ","B.Arsenal","C.Leverpool","D.Manchester United "],"A.Chelsea ","14.000.000VNĐ");
     let question10 = new Questions("Câu hỏi số 10:<br> Trong lễ Hiển Linh (Epiphany) 2019, tổng thống Nga Putin đã thực hiện nghi thức gì ?" ,["A.Đi lên than nóng ","B.Ngâm mình dưới hồ băng","C.Cưỡi ngựa đi săn","D.Câu cá trên băng "],"B.Ngâm mình dưới hồ băng","22.000.000VNĐ");
     let question11 = new Questions("Câu hỏi số 11:<br> Đài thiên văn ALMA được đặt tại quốc gia Nam Mỹ nào?" ,["A.Brazil ","B.Uruguay ","C.Argentina ","D.Chile"],"D.Chile","30.000.000VNĐ");
     let question12 = new Questions("Câu hỏi số 12:<br> Sazae-san là bộ phim dài nhất thế giới ở thể loại nào?" ,["A.Hoạt hình","B.Trinh thám ","C.Hành động ","D.Kinh dị "],"A.Hoạt hình","40.000.000VNĐ");
     let question13 = new Questions("Câu hỏi số 13:<br> Cựu phi hành gia nào là người duy nhất vừa bay vào vũ trụ vừa lặn xuống biển điểm sâu nhất đại dương thuộc rãnh địa Mariana?" ,["A.Bob Behnken ","B.Kate Rubins ","C.Kathy Sullivan ","D.Doug Hurley "],"C.Kathy Sullivan ","60.000.000VNĐ");
     let question14 = new Questions("Câu hỏi số 14:<br> Ngày 10/3 âm lịch hàng năm được chính thức quy định là ngày Quốc lễ Giỗ Tổ Hùng Vương vào triều đại nào trong lịch sử nước ta?" ,["A.Nhà Lý ","B.Nhà Hậu Lê","C.Nhà Nguyễn","D. Nhà Trần "],"C.Nhà Nguyễn","85.000.000VNĐ");
     let question15 = new Questions("Câu hỏi số 15:<br> Những vần thơ 'Trường Sơn chí lớn ông cha 'Cửu Long lòng mẹ bao la sóng trào' nằm trong tác phẩm nào của nhà thơ Lê Anh Xuân?" ,["A.Dáng đứng Việt Nam ","B.Nguyễn Văn Trỗi","C.Gửi miền Bắc","D.Hành quân giữa rừng xuân"],"B.Nguyễn Văn Trỗi","150.000.000VNĐ");

     let questions = [question1 ,question2 ,question3 ,question4 ,question5 ,question6 ,question7 ,question8 ,question9 ,question10 ,question11 ,question12 ,question13 ,question14 ,question15];
     let getQuestion = document.getElementById('question');

     function  next(index){
         index++;
         showQuestion(questions[index]);
     }
     function showQuestion(question_1){
         timeCount = 30;
         getQuestion.innerHTML = question_1.content;
         getQuestion.setAttribute("questionScreen",questions.indexOf(question_1));
         for (let i = 0; i< 4; i++){
             let aa = document.getElementById('answer_' + (i + 1));
             aa.innerHTML = question_1.answer[i];

         }
     }
     showQuestion(question1);
     let index = 0;
     function checkAnswer(id){
         let answer = document.getElementById(id).innerHTML;
         if (!confirm("Chốt chưa bạn ây ?")){
             return true;
         }
         if (questions[index].checkAnswer(answer)) {
             alert('Được cuả ló đấy!! Chính xác!');
             if (index === 14) {
                 alert("Đỉnh của chóp! Xin chúc mừng triệu phú mới nổi");
                 timeCount = 1;
                 reload();
             }
             next(index);
             index++;
             console.log(index);
             document.getElementById('result').innerHTML = "Tiền thưởng:"+"<br>" + (questions[index].money);
             timeCount = 30;
         } else {
             alert('Gà quá! Sai rồi bạn ạ!! Làm lại đê kk');
             reload();
         }
     }
     function reload(){
         location.replace("http://localhost:63342/case%20tudy%20md1/index.html?_ijt=912dmbih38td277862chkhf42q&_ij_reload=RELOAD_ON_SAVE");
     }
