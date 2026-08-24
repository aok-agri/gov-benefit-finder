console.log("政府補助推薦平台 JavaScript 已成功載入");

Promise.all([
  fetch("data/tags.json").then(response => response.json()),
  fetch("data/programs.json").then(response => response.json())
])
  .then(([tags, programs]) => {
    console.log(`已載入 ${tags.length} 個 Tags`);
    console.log(`已載入 ${programs.length} 筆補助`);

    const requiredFields = [
      "id",
      "title",
      "related_tags",
      "benefit_items"
    ];

    programs.forEach(program => {
      const missingFields = requiredFields.filter(
        field => !(field in program)
      );

      if (missingFields.length > 0) {
        console.warn(
          `資料缺少必要欄位：${program.id || "未知ID"}`,
          missingFields
        );
      } else {
        console.log(`Schema 檢查通過：${program.id}`);
      }
    });
  })
  .catch(error => {
    console.error("資料讀取失敗：", error);
  });
