# 家庭記帳

## 介紹

給使用者的日常記帳

### 功能

- 查看所有的紀錄
- 逐一新增消費資訊
- 逐一修改消費資訊
- 逐一刪除目標紀錄
- 用類別排序所有的紀錄
- 會員登入

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入:

   ```bash
   cd restaurant_list
   ```
4. 再輸入 npm install，載入node_modules

   ```bash
   npm install
   ```
5. 新增.env檔案輸入環境參數，或是於本地新增:

   ```bash
   MONGODB_URI='Your MongoDB Account String'
   ```

6. 進入資料夾後，輸入'npm run seed' 載入種子資料:

   ```bash
   npm run seed
   ```

7. 若看見'mongodb connected'表示伺服器連線成功。若看見'done'表示種子資料載入成功。

8. 接著輸入'npm run dev'執行渲染畫面:

   ```bash
   npm run dev
   ```

9. 若看見"Express is listening on http://localhost:3000"
   則代表順利運行，打開瀏覽器進入到以下網址:

   ```bash
   http://localhost:3000
   ```

10. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 14.16.0
- Express 4.16.4
- Express-Handlebars 3.0.0
- Bootstrap 5.0.2
- Font-awesome 6.2.0
- body-parser 1.20.1
- method-override 3.0.0
- mongoose 5.0.7
- bcryptjs 2.4.3
- connect-flash 0.1.1
- express-session 1.17.1
- passport 0.4.1
- passport-facebook 3.0.0
- passport-local 1.0.0


