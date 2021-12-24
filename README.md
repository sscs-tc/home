# SSCS_TC

## 更新流程
這是用 [React](https://reactjs.org/) 所製作的網頁，更新的流程是：
1. 更動 `json > data.json` 中的內容。
2. 將網頁重新compile。
3. 將網頁更新至網路上。

第一個步驟只要用一般內建文字編輯器、或一般用來寫程式的工具打開 data.json 並編輯即可，第二三步驟建議使用 terminal。

以下針對這三個步驟分別說明。

### 1. 更動 `src > json > data.json` 中的內容。
1. 複製以下模板：
```javascript
"post20220101":{
            "id": "POST20220101",
            "tag": "Technical Talks",
            "date":"2022/01/01",
            "imgurl": "",
            "title":"標題標題標題",
            "content":["內文第一段","內文第二段"],
            "link": "活動連結",
            "url": "https://drive.google.com/......."
            },
```
2. 貼上至原本檔案中的 `"posts": {`正後面。
3. 將貼上的內容更改成發文內容，說明如下：
```javascript
"post20220101":{
// 這是貼文id，將後面一串數字改為發文日期，可增加數字
            "id": "POST20220101",
            // 和上面貼文id一樣
            "tag": "Technical Talks",
            //這篇文所屬標籤，分別有：Technical Talks, Workshop, Press Conference, Awards
            "date":"2022/01/01",
            //貼文顯示的日期
            "imgurl": "",
            //如果這篇文有圖片的話，使用圖片連結，參見第4點 
            "title":"標題標題標題",
            "content":["內文第一段","內文第二段"],
            //這個array中，每一串雙引號中的字，用逗號分開，就會成為一段新的文字
            "link": "活動連結",
            "url": "https://drive.google.com/......."
            //分享檔案（如演講海報等）的分享連結。
            },
```

4. (optional) 新增文章圖片的方法：

- 使用 (imgur)[https://imgur.com/] ，不需登入即可上傳圖片。

- 取得圖片連結，如 `https://imgur.com/ETi8nGB`
    ![](https://imgur.com/UohoR9S.jpg)
    ![](https://imgur.com/jx8mTP9.jpg)

- 在連結後面要加上`.jpg`或`.png`（跟原本檔案一樣）


5. 在`data.json`的第二行，`index`那邊，加入剛剛那篇貼文的id。
例如原本是<br>
"index": ["post20210430", "post20210413","post20210201"......]
<br>
"index": [<mark>"post20220101"</mark>, "post20210430", "post20210413","post20210201"......]



到這邊即完成了新增文章的編輯動作。


