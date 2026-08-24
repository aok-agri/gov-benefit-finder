console.log("政府補助推薦平台 JavaScript 已成功載入");

fetch("data/test.json")
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
  })
  .catch(error => {
    console.error("JSON 讀取失敗：", error);
  });
