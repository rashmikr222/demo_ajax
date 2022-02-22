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
  // $(document).ajaxComplete(function () {
  //   alert(" AJAX request completes.");
  // });
  // // ajaxSend method
  // $(document).ajaxSend(function () {
  //   alert("AJAX request is to sent");
  // });
  // // ajaxError
  // $(document).ajaxError(function () {
  //   alert("AJAX request fails.");
  //   // console.log("AJAX request fails.");
  // });
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
  // $(".req_fail").click(function () {
  //   $("#response-text").load("demo1.txt");
  // });
  // ajaxSend method
  $(document).ajaxSend(function () {
    alert("AJAX request is to sent");
  });
  $(".req_send").click(function () {
    $(".text_change").load("change-txt.txt");
  });

  $("#driver").click(function () {
    $.ajax({
      url: "assets/php/getDemo.php",
      // method: "GET",
      data: { userName: "Rashmi" },
      success: function (data) {
        // Display the returned data in browser
        $("#stage").html(data);
        console.log(data);
      },
      error: function (errorThrown) {
        alert("error");
        console.log(errorThrown);
      },
    });
  });
  // get method
  $("#get_button").click(function () {
    // alert("Hello world!");
    $.get({
      url: "assets/php/getDemo1.php",
      success: function (data) {
        $("#get_title").html(data);
      },
    });
  });
  // display date and time
  $("#get_date").click(function () {
    // alert("date and time");
    $.get({
      url: "assets/php/demo.php",
      method: "GET",
      success: function (data) {
        $("#display_date").html(data);
      },
    });
  });
  // post method
  $("#page_button").click(function () {
    // alert("Hello world");
    $.post({
      url: "assets/php/postDemo.php",
      data: {
        fName: "Rashmi",
        lname: "K R",
      },
      // success: function (data) {
      //   $("#page_title").html(data);
      // },
      success: function (data) {
        document.getElementById("page_title").innerHTML = data;
        document.getElementById("page_button").innerHTML = "data passed";
      },
    });
  });
});
