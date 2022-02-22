// function openPage() {
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("head_title").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "demo.html", true);
//   xhttp.send();
// }
// jquery
// $(document).ready(function () {
//   $("button").click(function () {
//     $.ajax({
//       url: "demo.html",
//       success: function (result) {
//         $("#head-title").html(result);
//       },
//     });
//   });
// });
// jquery
$(document).ready(function () {
  // ajaxComplete
  $(document).ajaxComplete(function () {
    alert(" AJAX request completes.");
  });
  // ajaxSend method
  $(document).ajaxSend(function () {
    alert("AJAX request is to sent");
  });
  // ajaxError
  $(document).ajaxError(function () {
    alert("AJAX request fails.");
    // console.log("AJAX request fails.");
  });
  // next button
  $(".next").click(function () {
    $.ajax({
      url: "next.html",
      success: function (result) {
        $("#response-text").html(result);
      },
    });
  });
  // previous button
  $(".previous").click(function () {
    $.ajax({
      url: "previous.html",
      success: function (result) {
        $("#response-text").html(result);
      },
    });
  });
  // ajaxComplete method
  $(".button_click").click(function () {
    $("#response-text").load("demo.txt");
  });
  // ajaxError method
  $(".req_fail").click(function () {
    $("#response-text").load("demo1.txt");
  });
  // ajaxSend method
  // $(document).ajaxSend(function () {
  //   alert("AJAX request is to sent");
  // });
  // $("button").click(function () {
  //   $(".text_change").load("demo.txt");
  // });
  // ajaxGet request
  // $("#get_user").click(function (event) {
  //   $.get(
  //     "demo.php",
  //     {
  //       username: "Rashmi",
  //     },

  //     function (data) {
  //       $("#user_display").html(data);
  //     }
  //   );
  //   console.log(event.username);
  // });
  $("#driver").click(function () {
    $.ajax({
      url: "assets/js/getDemo.php",
      data: { userName: "Rashmi" },
      success: function (data) {
        console.log(data);
        // Display the returned data in browser
        $("#stage").html(data);
      },
      error: function (errorThrown) {
        alert("error");
        console.log(errorThrown);
      },
    });
  });
});
