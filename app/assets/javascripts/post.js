$(function(){
  function buildMessage(message){
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var insertImage = '';
    if (message.image_url) {
      insertImage = `<img src="${message.image_url}">`;
    }
    var html = `<div class="message" data-message-id="${message.id}"> 
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

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){ //groups/id/messagesにいると時に下記の処理をする
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';//追加するHTMLの入れ物を作る
        messages.forEach(function (message) {//配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
          insertHTML = buildMessage(message); //メッセージが入ったHTMLを取得
          $('.messages').append(insertHTML);//メッセージを追加
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');　//自動更新で一番下に行くように記述
    })
    .fail(function() {
      alert('自動更新できま専務');
    });
  }
  };
  setInterval(reloadMessages, 5000);

})