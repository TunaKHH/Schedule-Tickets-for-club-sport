// 正式要搶的場地
// 籃球全場 第一場	
const bookingUrl = 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=15&QTime=15&PT=2&D=2022/11/27'
// 籃球全場 第二場
const bookingUrl2 = 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=15&QTime=16&PT=2&D=2022/11/27'

const urlBase = {
  '羽球': 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&PT=1',
  '籃球': 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&PT=2&QPid=15',
}
// 羽球場 羽東四
// https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=7&QTime=6&PT=1&D=2022/11/25
// 羽球場 羽東三
// https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=6&QTime=6&PT=1&D=2022/11/25

// 籃球測試用
// // 籃球全場 第一場	
// const bookingUrl = 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=15&QTime=7&PT=2&D=2022/11/23'
// // 籃球全場 第二場
// const bookingUrl2 = 'https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=15&QTime=6&PT=2&D=2022/11/23'

entry();
/** 進入點 */
function entry() {
  try {
    // 詢問要訂羽球還是籃球
    const sportType = prompt('場地要訂羽球還是籃球? (1:羽球 2:籃球)');
    // 驗證sportType是否為1或2
    verifySportTypeBy(sportType);
    // 設定預約日期
    const orderDate = getOrderDate();
    // 驗證預約日期格式是否正確且不為過去日期
    verifyOrderDateBy(orderDate);
    // 詢問預約的時間
    const orderTime = getOrderTime();
    // 詢問預約的時間2
    const orderTime2 = getOrderTime();
    // 驗證預約時間格式是否正確
    verifyOrderTimeBy(orderTime);

    // 訂場地
    if (sportType === '1') {
      // 提示目前羽球場地不支援預約
      alert('目前羽球場地不支援預約');
      return;
      // TODO: 羽球需要給場地編號
      // 羽球
      generateOrderUrlBy({
        sportType:'羽球',
        urlBase: urlBase['羽球'],
        orderDate: orderDate,
        orderTime:orderTime
      });
      // 訂場地
      orderPlace(orderUrl);
    }
    if (sportType === '2') { // 籃球
      const orderUrl = generateOrderUrlBy({
        sportType:'籃球',
        urlBase: urlBase['羽球'],
        orderDate: orderDate,
        orderTime:orderTime
      });
      // 訂場地
      orderPlace(orderUrl);
    }
  } catch (error) {
    console.error(error);
    alert('設定失敗, 請重新設定');
    entry();
  }
}

/** 生成預約用的網址 */
function generateOrderUrlBy({sportType, urlBase, orderDate, orderTime}) {
  // 設定預約日期
  const url = `${urlBase}&PT=${sportType}&D=${orderDate}&QTime=${orderTime}`;
  return url;
}

// 取得要預約的時間
function getOrderTime() {
  const orderTime = prompt('請輸入要預約的時間2 (範圍:7~23, 範例: 15)');
  return orderTime;
}

// 取得要預約的日期
function getOrderDate() {
  // 預設為隔天日期
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = prompt('請輸入搶場地日期(格式:2022/11/25) ', tomorrow.toLocaleDateString()) ;
  return defaultDate;
}

/** 驗證預約時間格式是否正確 */
function verifyOrderTimeBy(orderTime) {
  // 驗證預約時間格式是否正確
  if (orderTime < 7 || orderTime > 23) {
    alert('請輸入7~23之間的數字');
    throw new Error('預約時間格式錯誤');
  }
}

/** 驗證sportType是否為1或2 */
function verifySportTypeBy(sportType) {
  if (sportType !== '1' && sportType !== '2') {
    alert('請輸入1或2');
    throw new Error('請輸入1或2');
  }
}

/** 驗證預約日期格式是否正確且不為過去日期 */
function verifyOrderDateBy(date) {
  const dateReg = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
  if (!dateReg.test(date)) {
    alert('日期格式錯誤');
    throw new Error('日期格式錯誤');
  }
  const now = new Date();
  const orderDate = new Date(date);
  if (orderDate < now) {
    alert('日期不可為過去日期');
    throw new Error('日期不可為過去日期');
  }
}

/** 訂場地 */
function orderPlace(orderUrl) {
    postData(orderUrl, {})
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
