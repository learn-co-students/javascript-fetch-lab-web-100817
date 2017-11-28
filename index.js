function getIssues() {
  const repo = 'jcstorms1/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'get',
    headers: {Authorization: `token ${getToken()}`}})
    .then(res => res.json())
    .then(json => showResults(json))
}

function showIssues(json) {
}

function createIssue() {
  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value

  const repo = 'jcstorms1/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`},
    body: JSON.stringify({ title: title, body: body })
  })
    .then(res => res.json())
    .then(showIssues)
}

function showResults(json) {
  let box = document.querySelector('#results')
  debugger
  let newHTML = `
  <ul>
    <li> <a target= '_blank' href='${json.html_url}'> ${json.name} </a> </li>
  </ul>`
  box.innerHTML += newHTML
}


function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`}})
    .then(res => res.json())
    .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
