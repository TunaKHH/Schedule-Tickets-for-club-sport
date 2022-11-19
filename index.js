// 正式要搶的場地
// 籃球全場 第一場	
const bookingUrl = 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=15&QTime=15&PT=2&D=2022/11/27'
// 籃球全場 第二場
const bookingUrl2 = 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=15&QTime=16&PT=2&D=2022/11/27'

// 測試用
// // 籃球全場 第一場	
// const bookingUrl = 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=15&QTime=7&PT=2&D=2022/11/23'
// // 籃球全場 第二場
// const bookingUrl2 = 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=15&QTime=6&PT=2&D=2022/11/23'

/** 訂場地 */
function orderPlace(bookingUrl) {
    postData(bookingUrl, {})
    .then(data => console.log(data)) // JSON from `response.json()` call
    .catch(error => console.error(error))
}
setInterval(()=>{
  // 如果現在時間是凌晨12點整就執行
  if(new Date().getHours() == 0 && new Date().getMinutes() == 0 && new Date().getSeconds() == 0){
    console.log('執行');
    orderPlace(bookingUrl);
    orderPlace(bookingUrl2);
  }else{
    console.log('現在時間不是凌晨12點整');
  }

},600)

function postData(url, data) {
  return fetch(url, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
}
