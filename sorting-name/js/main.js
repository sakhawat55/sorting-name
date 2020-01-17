$(document).ready(function () {
  $('.names span').draggable({
    revert: 'invalid', helper: function () {
      return "<span>" + $(this).text() + "</span>";
    }
  });
  $('.boys').droppable({
    accept: '[data-value="boy"]', drop: function (event, ui) {

      $('.boys-con').append(ui.draggable);
    }
  });

  $('.girls').droppable({
    accept: '[data-value="girl"]', drop: function (event, ui) {

      $('.girls-con').append(ui.draggable);
    }
  });
});