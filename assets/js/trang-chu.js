$(function () {
  // carosel
  $(".carousel").carousel({
    interval: 4000,
  });
  // modal
  var modal = document.getElementsByClassName("modal")[0];
  var modalBox = document.getElementsByClassName("modal-box")[0];

  var open = document.getElementsByClassName("openModal")[0];
  var close = document.getElementsByClassName("closeModal")[0];

  open.onclick = function () {
    modal.style.display = "block";
  };

  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  // timer
  initTimer();
  function initTimer() {
    if ($(".timer").length) {
      // Uncomment line below and replace date
      // var target_date = new Date("Dec 7, 2017").getTime();

      // comment lines below
      var date = new Date();
      date.setDate(date.getDate() + 3);
      var target_date = date.getTime();
      //----------------------------------------

      // variables for time units
      var days, hours, minutes, seconds;

      var d = $("#day");
      var h = $("#hour");
      var m = $("#minute");
      var s = $("#second");

      setInterval(function () {
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // display result
        d.text(days);
        h.text(hours);
        m.text(minutes);
        s.text(seconds);
      }, 1000);
    }
  }
});
