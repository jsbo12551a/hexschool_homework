## day11 -  Express

1. 建立package.json
```
 npm init
```
2. 安裝 express，--save可自動寫入package.json
```
npm install express --save
```
完成
![image](https://user-images.githubusercontent.com/45085567/232812257-9877bb93-73c0-4cae-bcec-6536878b045a.png)

## day12 - 設計基本路由

路由定義結構
```
app.METHOD(PATH, HANDLER)

app 是 express 的實例。
METHOD 是 HTTP 要求方法。
PATH 是伺服器上的路徑。
HANDLER 是當路由相符時要執行的函數。
```

```
<!-- get -->
app.get('/', function (req, res) {
  res.send('Hello World!');
});

<!-- post -->
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

<!-- put -->
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

<!-- delete -->
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

