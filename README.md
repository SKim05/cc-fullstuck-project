# 書籍感想共有掲示板アプリ

## アプリの詳細
- このアプリでは書籍の巻ごとに掲示板があり、書籍全体ではなく巻ごとにユーザの感想を共有することができます。
- このアプリでは書籍のサムネイルの取得に国立国会図書館サーチが提供する書影APIを利用しています。
- 投稿は即時反映されます。

# アプリの起動(セットアップ)
1. フロントエンド
- ```./frontend```直下で以下のコマンドを実行

    - ```npm start```

2. バックエンド(APIサーバ)
- ```./backend```直下で以下のコマンドを実行

    - ```npm run dev```

## バックエンドのテストの起動
```npm start```


# リソース
## DBの構成
### books
- id(pk, String)
- volume(String)
- subtitle(Strig)
- url(Strig)

### comments
- id(pk, String)
- volume(Strig)
- username(Strig)
- text(Strig)
- good(Strig)

## DBの削除
```npx knex migrate:down xxx.js```
```npx knex migrate:down xxx.js```


## DBのマイグレーション
```npx knex migrate:make create_xxx_table```

```npx knex migrate:make create_xxx_table```

```npm run migrate```

## DBのseedの適用
```npx knex seed:make initial_xxx --timestamp-filename-prefix```

```npm run seed```

# 将来の計画
1. コメントの「削除」「返信」機能の実装
2. いいね機能の実装
    - 現在はとりあえず```comments```の```good```はStringにしているが、将来的には数値にしたい
3. 書籍の情報(DBの```books```)をAPI経由(Google Book APIを想定)で取得したい
    - レンダリング時に毎回呼び出すことになるのでここは要検討