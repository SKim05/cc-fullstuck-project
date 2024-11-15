const { setupExpressServer } = require("../server");
// We know about chai...
const chai = require("chai");
// ...with chai-http we can add matchers for making http requests!
const chaiHttp = require("chai-http");
// ... we need to tell chai to use chaiHttp though. It is a middleware
chai.use(chaiHttp);
// this enables us to use .should assertions instead of expecct. Personal Preference
chai.should();

// Another reason we separated creating our server from starting it
const app = setupExpressServer();

describe("The express server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("GET /teapot", () => {
    describe("GET /teapot - modifying status", () => {
      it("should return status 418", async () => {
        const res = await request.get("/teapot");
        res.should.have.status(418);
      });
    });

    describe("GET /api/books - modifying status", () => {
      it("本の情報を取得に成功し、かつ0番目の値が一致", async () => {
        const expect = {"id":1,"volume":"1","subtitle":"桜木君","intro":"中学3年間で50人の女の子にふられた桜木花道。高校生となった彼は、ふと声をかけてきた女の子・赤木晴子に性懲りもなく一目惚れ。その「バスケットはお好きですか?」との問いに花道は…!?","url":"https://ndlsearch.ndl.go.jp/thumbnail/9784088716114.jpg"}
        const res = await request.get("/api/books");
        res.status.should.equal(200);
        res.body[0].should.deep.equal(expect);
      });
      it("本の情報を取得に成功し、かつ返却値の要素数が一致", async () => {
        const expect = 31;
        const res = await request.get("/api/books");
        res.status.should.equal(200);
        res.body.length.should.deep.equal(expect);
      });
    });

    describe("GET /api/:volume/comments - returning comments", () => {
      it("選んだ本のコメント一覧が返ってくる'", async () => {
        const expect = [
          {"id":2,"volume":"2","username":"匿名さん2","text":"素晴らしい","good":"22"}
        ]
        const res = await request.get("/api/2/comments");
        res.body.should.deep.equal(expect);
      });
    });
  });
});
