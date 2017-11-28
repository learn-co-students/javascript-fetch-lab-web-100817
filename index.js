const token = "89e3d354acf5804bff9eaca5807b1e03946a514b"
const repo = 'learn-co-curriculum/javascript-fetch-lab'
const myRepo = 'rjmascolo/javascript-fetch-lab'

function getIssues() {
  url = `https://api.github.com/repos/${myRepo}/issues`
  fetch(url).then(resp => resp.json()).then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
  const issues = document.getElementById('issues')
  let ul = document.createElement('ul')
  json.forEach(post => {
    ul.innerHTML += `<li>${post.title} ${post.body}</li>`
  })
  issues.append(ul)
}

function createIssue() {
  url = `https://api.github.com/repos/${myRepo}/issues`

  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  fetch(url, {
  method: 'post',
  body: JSON.stringify({title: title, body: body}),
  headers: {
    Authorization: `token ${token}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json));
  getIssues();
}

function showResults(json) {
  console.log(json)
  const results = document.getElementById('results')
  results.append(json.id)
}

function forkRepo() {
  //use fetch to fork it!
  url = `https://api.github.com/repos/${repo}/forks`
  fetch(url, {
  method: 'post',
  headers: {
    Authorization: `token ${token}`
    }
  }).then(resp => resp.json()).then(json => showResults(json));
  }

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ""
}
