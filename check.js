const textConfig = {
    text1: "Xin chào bạn nha!",
    text2: "Thích thì chơi không thích thì chơi",
    text3: "Một con vịt xoè ra mấy cái cánh?",
    text4: "Oki baibai",
    text5: "Hỏi khùng hỏi điên không rảnh để trả lời!",
    text6: "Thì là 2 cánh chứ sao nữa ",
    text7: "Yeah, đúng rùi, bạn giỏi quá điii",
    text8: "Siu quá rùi nèee",
    text9: "Giờ thì tạm biệt bạn nhaa",
  };
  $(document).ready(function () {
    setTimeout(function () {
      firstQuestion();
    }, 20);
  
    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#c4").html(textConfig.text5);
    $("#c2").html(textConfig.text6);
  
    function firstQuestion() {
      $(".content").hide();
      Swal.fire({
        title: textConfig.text1,
        text: textConfig.text2,
        imageUrl: "https://i.pinimg.com/550x/bf/0b/a2/bf0ba2802733bc3b36c545e7c1d6c4a4.jpg",
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/iput-bg.jpg")',
      }).then(function () {
        $(".content").show(200);
      });
    }
  
    // function dịch chuyển button
    function switchButton() {
      var audio = new Audio("quec.mp3");
      audio.play();
      var leftNo = $("#c4").css("left");
      var topNO = $("#c4").css("top");
      var leftY = $("#c2").css("left");
      var topY = $("#2").css("top");
      $("#c4").css("left", leftY);
      $("#c4").css("top", topY);
      $("#c2").css("left", leftNo);
      $("#c2").css("top", topNO);
    }
    function moveButton() {
      var audio = new Audio("quec.mp3");
      audio.play();
      if (screen.width <= 600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
      } else {
        var x = Math.random() * 500;
        var y = Math.random() * 500;
      }
      var left = x + "px";
      var top = y + "px";
      $("#c4").css("left", left);
      $("#c4").css("top", top);
    }
  
    var n = 0;
    $("#c4").mousemove(function () {
      if (n < 1) switchButton();
      if (n > 1) moveButton();
      n++;
    });
    $("#c4").click(() => {
      if (screen.width >= 900) switchButton();
    });

    // 2 khung hồi đáp
    $("#c2").click(function () {
      var audio = new Audio("quecx2.mp3");
      audio.play();
      Swal.fire({
        title: textConfig.text7,
        width: 900,
        padding: "3em",
        confirmButtonColor: "#ffe699",
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            width: 900,
            confirmButtonText: textConfig.text4,
            title: textConfig.text8, 
            text: textConfig.text9,
            confirmButtonColor: "#e699ff",
          });
        }
      });
    });
  });
  
  