# Taiwan_Camp

預計功能：  
1.在台灣地圖上顯示露營地，游標移到圖示上時顯示資訊，並可點入跳轉至另一頁面看詳細資訊  
2.可註冊會員，登入後可在各露營地留下評論  
  
預計工具：  
1.程式語言-JavaScript、CSS、Html  
2.網頁技術工具-Node.js、Mongoose、Express.js、JQuery、Bootstrap、AJAX  
3.資料庫-MongoDB  
4.測試工具-Postman  
  
  
********************

更新紀錄 2021/2/1  
  
使用套件：  
```npm i express monoogse ejs```  
  
製作進度(建立架構ing)：  
1.**app.js** 中使用**Mongoose**來連接MongoDB資料庫  
2.views資料夾中建立**home.ejs**來做為主頁面  
3.models資料夾中建立**campground.js**，其中**CampgroundSchema**為露營地的**詳細資訊**資料type
