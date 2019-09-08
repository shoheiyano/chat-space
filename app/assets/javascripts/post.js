$(function(){
  function buildMessage(message){
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var insertImage = '';
    if (message.image_url) {
      insertImage = `<img src="${message.image_url}">`;
    }
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
                  ${img}
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
      $("form")[0].reset();
    })
    .fail(function(){
      alert('エラー');
    })
  })
})