
  // 表單
//縣市下拉式選單

  $(function() {
    var option = '<option value="0">請選擇縣市</option>';
    for( var key in CityCounty.cities ){
        option += '<option value="' + CityCounty.cities[key]['Id'] + ',' + CityCounty.cities[key]['Name'] + '">' + CityCounty.cities[key]['Name'] + '</option>';
    }
    $('#city,#city-ar,#city-upright-wm,#city-rollerwmtype,#city-otherwmtype,#city-singl-ac,#city-windowair-ac,#city-hiddenair-ac,#city-watercooledair-ac,#city-ceiling-ac,#city-other-ac,#city-dm,#city-sc,#city-wp,#city-dmc,#city-hc').html(option);

    $('#city,#city-ar,#city-upright-wm,#city-rollerwmtype,#city-otherwmtype,#city-singl-ac,#city-windowair-ac,#city-hiddenair-ac,#city-watercooledair-ac,#city-ceiling-ac,#city-other-ac,#city-dm,#city-sc,#city-wp,#city-dmc,#city-hc').change(function(){
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
    $('#county,#county-ar,#county-upright-wm,#county-rollerwmtype,#county-otherwmtype,#county-singl-ac,#county-windowair-ac,#county-hiddenair-ac,#county-watercooledair-ac,#county-city-ceiling-ac,#county-other-ac,#county-dm,#county-sc,#county-wp,#county-dmc,#county-hc').html(option);
    $('#county,#county-ar,#county-upright-wm,#county-rollerwmtype,#county-otherwmtype,#county-singl-ac,#county-windowair-ac,#county-hiddenair-ac,#county-watercooledair-ac,#county-city-ceiling-ac,#county-other-ac,#county-dm,#county-sc,#county-wp,#county-dmc,#county-hc').hide().show();
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
            'Note': $('textarea[name="Note"]').val(),
            'ServiceItems': [],
            'TitleName':'居家清潔:家事服務,洗衣機清洗,冷氣機清洗,水管,石材,除塵蟎|信義居家',
            'TitleUrl': 'https://living.sinyi.com.tw/events/clean-reserve-form/' 
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
               window.location='events/clean-reserve-form/finish/' + data.error ;
            }else{
               alert( data.error );
            }
         }
      },
      error: function(data) {
         alert('web service connection failed!');
         $("#submit").text('確認送出▶').attr('disabled',false);
         console.log(data);
      }
    });
  });
