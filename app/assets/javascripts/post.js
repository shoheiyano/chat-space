$(function(){
  function buildMessage(message){
    var html = `<div class="message">
                  <div class="message__upper-info">
                  <div class="message__upper-info__talker">
                  ${message.user_name}
                  </div>
                  <div class="message__upper-info__date">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message__text">
                  <p class="lower-message__content">
                  ${message.content}
                  </p>
                  <p class="lower-message__image">
                  ${message.image}
                  </p>
                  
                  </div>
                  </div>`
    return html;

  }



  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.messages').append(html);
      $('#message_content').val('')
      $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, 1000);
      $(".form__submit").prop("disabled", false);
    })
    .fail(function(){
      alert('エラー');
    })
  })
})