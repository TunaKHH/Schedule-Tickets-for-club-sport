# 搶

## 登入

![](/uploads/upload_a997dd15ee1e38d25b02ba82960d03fb.png)

| key          | type       | 備註   |
| ------------ | ---------- | ------ |
| loginid      | ==String== | 身分證 |
| loginpw      | ==String== | 密碼   |
| Captcha_text | ==Number== | 驗證碼 |

## cookie 認證

header
cookie  ASP.NET_SessionId=bdnsoyvcmdbxtl4eluo2f400

## 搶票

:::info
==以下範例==

==範例2022/10/2(日)， 羽西8， 時段6:00~7:00==

https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=11&QTime=6&PT=1&D=2022/10/02

> 您的預約單為515220929032 預約2022/10/2(日)， 羽西8， 時段6:00~7:00。

| key      | content       | 備註                    |
|:-------- | ------------- | ----------------------- |
| module   | net_booking   |                         |
| files    | booking_place |                         |
| StepFlag | 25            |                         |
| QPid     | 11            |                         |
| QTime    | 6             | 球場時間 6:00~7:00 => 6 |
| PT       | 1             |                         |
| D        | 2022/10/02    | 日期                    |

:::

:::info
==範例2022/10/2(日)， 羽西8， 時段7:00~8:00==

https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=11&QTime=7&PT=1&D=2022/10/02

您的預約單為515220929028 預約2022/10/2(日)， 羽西8， 時段7:00~8:00。

| key      | content       | 備註                    |
|:-------- | ------------- | ----------------------- |
| module   | net_booking   |                         |
| files    | booking_place |                         |
| StepFlag | 25            |                         |
| QPid     | 11            |                         |
| QTime    | 7             | 球場時間 7:00~8:00 => 7 |
| PT       | 1             |                         |
| D        | 2022/10/02    | 日期                    |

:::

:::info
==範例2022/10/5(三)， 羽西8， 時段8:00~9:00==

https://bwd.xuanen.com.tw/wd16.aspx?module=net_booking&files=booking_place&StepFlag=25&QPid=11&QTime=8&PT=1&D=2022/10/05

您的預約單為515220929031 預約2022/10/5(三)， 羽西8， 時段8:00~9:00。

| key      | content       | 備註                    |
|:-------- | ------------- | ----------------------- |
| module   | net_booking   |                         |
| files    | booking_place |                         |
| StepFlag | 25            |                         |
| QPid     | 11            |                         |
| QTime    | 8             | 球場時間 8:00~9:00 => 8 |
| PT       | 1             |                         |
| D        | 2022/10/05    | 日期                    |

:::