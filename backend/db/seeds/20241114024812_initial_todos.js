exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { volume: '1', subtitle: 'test1', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716114.jpg' }, 
    { volume: '2', subtitle: 'test2', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716121.jpg'  }, 
    { volume: '3', subtitle: 'test3', url: 'https://ndlsearch.ndl.go.jp/thumbnail/9784088716138.jpg'  }])
}