// 今日の日付を取得
let today = new Date();

// 年、月、日をそれぞれ取得
let year = today.getFullYear();
let month = today.getMonth() + 1; // 月は0から始まるため、+1 する
let day = today.getDate();

// 日付を「YYYY年M月D日」の形式で表示
console.log(year + "年" + month + "月" + day + "日");
