let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // Преобразуем каждый URL в промис, возвращённый fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all будет ожидать выполнения всех промисов
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));