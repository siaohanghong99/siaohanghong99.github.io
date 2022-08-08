window.addEventListener('load', () => {

  let liffID = '1657358806-qypVO7rz';
    let originUrl = window.location.origin;
    let appID = 'OAKS_LOGON_SSO';

  triggerLIFF();

  // 執行範例裡的所有功能
  function triggerLIFF() {

    liff.init({
        liffId: liffID
    }).then(() => {
        let isInClient, isLoggedIn;

        language = liff.getLanguage(); // String。引用 LIFF SDK 的頁面，頁面中的 lang 值
        version = liff.getVersion(); // String。LIFF SDK 的版本
        isInClient = liff.isInClient(); // Boolean。回傳是否由 LINE App 存取
        isLoggedIn = liff.isLoggedIn(); // Boolean。使用者是否登入 LINE 帳號。true 時，可呼叫需要 Access Token 的 API
        if (!isLoggedIn) {
            alert('Not Login');
        }else{
            window.location.href = originUrl+'/index_line_auth.php?app_id='+encodeURIComponent(appID)+'&accessToken='+encodeURIComponent(liff.getAccessToken());
        }
    }).catch(error => {
        console.log(error);
    });

  }

})