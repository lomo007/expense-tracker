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
   ```bash
   git clone https://github.com/lomo007/expense-tracker.git
   ```
3. 在本地開啟之後，透過終端機進入資料夾，輸入:
   ```bash
   cd expense-tracker
   ```
4. 輸入 npm install，載入node_modules
   ```bash
   npm install
   ```

5. 在expense-tracker資料夾下新增.env檔案，在檔案內新增環境參數，或是於本地新增:
   ```bash
   MONGODB_URI=      #Your MongoDB Account String
   SESSION_SECRET=    #自訂義 eg:ThisIsHisSecret
   PORT=3000
   FACEBOOK_ID=       #FACEBOOK_ID=Meta for developers 應用程式編號
   FACEBOOK_SECRET=    #FACEBOOK_SECRET=Meta for developers 應用程式密鑰
   FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callba
   ```

6. 載入種子資料。終端機出現'mongodb connected'表示伺服器連線成功。'...done'表示種子資料載入成功。
   ```bash
   npm run seed
   ```

7. 執行渲染畫面:
   ```bash
   npm run dev
   ```

8. 終端機出現"Express is listening on http://localhost:3000" 則代表順利運行，打開瀏覽器到以下網址:
   ```bash
   http://localhost:3000
   ```

9. 暫停使用
   ```bash
   ctrl + c
   ```

10. 測試帳號
   ```bash
   "name": "廣志",
   "email": "user1@example.com",      
   "password": "12345678"
   
   "name": "小新",
   "email": "user2@example.com",
   "password": "12345678"
   ```

## 開發工具

- Node.js 12.12.0
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