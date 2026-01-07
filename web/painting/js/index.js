

//-BACK TO TOP--//



// create the back to top button
$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 400;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top, a.simple-back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

//-BACK TO TOP--//


// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});


/*QA*/

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;
  
  $(document).on('touchstart click', '.acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;
      
      var currIndex = $(this).index('.acc-btn'),
          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();
   
      $('.acc-btn h1').removeClass('selected');
      $(this).find('h1').addClass('selected');
      
      $('.acc-content').stop().animate({ height: 0 }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});




  // 表單
//縣市下拉式選單

  $(function() {
    var option = '<option value="0">請選擇縣市</option>';
    for( var key in CityCounty.cities ){
        option += '<option value="' + CityCounty.cities[key]['Id'] + ',' + CityCounty.cities[key]['Name'] + '">' + CityCounty.cities[key]['Name'] + '</option>';
    }
    $('#city').html(option);

    $('#city').change(function(){
        switchSiteSearchFormArea($(this).val());
    });
  });

  function switchSiteSearchFormArea(flag) {
    var option = '<option value="0">行政區</option>';
    var temp = flag.split(",");
    var cityID = temp[0];
    for( var key in CityCounty.cities ){
      if( CityCounty.cities[key]['Id'] == cityID ){
        for( var i in CityCounty.cities[key].Counties ){
            option += '<option value="' + CityCounty.cities[key].Counties[i]['Id'] + '">' + CityCounty.cities[key].Counties[i]['Name'] + '</option>';
        }
      }
    }
    $('#county').html(option);
    $('#county').hide().show();
  }
  // 資料送出
  function isNumber(str){
    var chk_result = true;

    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) < "0" || str.charAt(i) > "9")
        {
            chk_result = false;
            break;
        }
    }

    return chk_result;
  }

  function trim(){
    if (!this) return this;
  
    // 濾掉字串前後的空白
    for (var begin = 0; begin < this.length; begin++) {
      if (this.charAt(begin) != " ") break;
    }
    for (var end = this.length; end > 0; end--) {
      if (this.charAt(end - 1) != " ") break;
    }
  
    return this.slice(begin, end);
  }
  
  /**
  * 檢查欄位是否只包含空白字元
  * 此函式將在稍後宣告為 String Object's prototype method
  */
  function isEmpty()
  {
    if (!this) return true;
  
    for (var len = 0; len < this.length; len++) {
      if (this.charAt(len) != " ") return false;
    }
  
    return true;
  }
  
  // 將以上 trim 及 isEmpty 兩函式宣告為 String 的屬性
  String.prototype.trim = trim;
  String.prototype.isEmpty = isEmpty;


  function chkData(){
    var nameTrim = $('#name').val().trim();
    var mobileTrim = $('#mobile').val().trim();
    $('#name').val(nameTrim);
    $('#mobile').val(mobileTrim);
    if($("select[name='county']").val() == null || $("select[name='county']").val() == '0'){
      alert("【施作區域】欄位，為必填欄位！");
      return false;
    }
  
    if ($('#name').val().isEmpty()) {
      alert("【姓名】欄位，為必填欄位！");
      $('#name').focus();
      return false;
    }
    if ($('#mobile').val().isEmpty()) {
      alert("【電話】或【市內電話】欄位，未填或格式不正確。");
      $('#mobile').focus();
      return false;
    }
    if ('' != $('#mobile').val()) {
        if ( $('#mobile').val().length < 10) {
            alert("【電話】或【市內電話】欄位，未填或格式不正確。");
            $('#mobile').focus();
            return false;
        }
        if (!isNumber($('#mobile').val())) {
            alert("【電話】或【市內電話】欄位，未填或格式不正確。");
            $('#mobile').select();
            $('#mobile').focus();
            return false;
        }
    }
    if ($('#privacyBox:checkbox:checked').length <= 0) {
      alert("請確認您已閱讀並同意本站【服務條款】，謝謝！");
      return false;
    }   
    
    return true;
  }
  $('.submit').on('click',function(e){
    e.preventDefault();
    if(!chkData()) return false;
    var data = JSON.stringify({ 'CustomerName': $(':text[name="name"]').val(),
            'CustomerGender': '1',
            'CustomerMobile': $(':text[name="mobile"]').val(),
            'CustomerPhone1': '',
            'CustomerPhone2': '',
            'CustomerEmail': '',
            'ContactEarly': '', 'ContactLate': '',
            'IntroName': '',
            'IntroDepName': '',
            'PostalCode': $('select[name="county"]').val(),
            'HouseStatus': '4',
            'Note': '油漆專案來案，請與客戶聯繫後更新資料。', //'OO專案案來案，請與客戶聯繫後更新資料。'
            'ServiceItems': [],
            'TitleName':'刷出生活美學!刷油漆,油漆顏色,油漆種類,油漆工法|信義居家', //修成此專案的title
            'TitleUrl': 'https://living.sinyi.com.tw/events/painting/'   //修成此專案的網址命名
    });
    
    $("#submit").text('送出中....').attr('disabled',true);

    $.ajax({
      url: '/ajax_frm/submit',
      type:'POST',
      data: { 'msg' : data },
      dataType:'json',
      success: function(data) {
         if( data != null ){
            if( data.result == 0 ){                     
               alert('表單送出成功！');                    
               window.location='/frm/finish/' + data.error ;
            }else{
               alert( data.error );
            }
         }
      },
      error: function(data) {
         alert('web service connection failed!');
         $("#submit").text('確認送出 ▶').attr('disabled',false);
         console.log(data);
      }
    });
  });
