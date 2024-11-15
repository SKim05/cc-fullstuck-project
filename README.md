# (仮称)アプリ

# アプリの起動
```cd backend``` 
```npm start```

```cd ../frontend```
```npm run dev```

# バックエンドのテストの起動
```npm test```


# DBの構成
## books
- id
- volume
- subtitle
- url

## comments
- id
- volume
- username
- text
- good

## DBの削除
npx knex migrate:down 20241115062211_create_books_table.js
npx knex migrate:down 20241114234440_create_comments_table.js


## DBのマイグレーション
//npx knex migrate:make create_books_table
//npx knex migrate:make create_comments_table
npm run migrate

## DBのseedの適用
//npx knex seed:make initial_todos --timestamp-filename-prefix
npm run seed