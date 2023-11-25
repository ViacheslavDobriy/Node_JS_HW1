const http = require("http");
let counterMain = 0;
let counterAbout = 0;

function visitPage(counter) {
  return ++counter;
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    counterMain = visitPage(counterMain);
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      `<h1>Добро пожаловать на мой сайт!</h1><a href="/about">Ссылка на страницу About</a><p>Эта страница была посещена ${counterMain} раз</p>`
    );
  } else if (req.url === "/about") {
    counterAbout = visitPage(counterAbout);
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      `<h1>Обо мне!</h1><a href="/">Ссылка на главную страницу</a><p>Эта страница была посещена ${counterAbout} раз</p>`
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(`<h1>Страница не найдена!</h1>`);
  }
});

const port = "3000";

server.listen(port);
