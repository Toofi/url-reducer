/* eslint-disable no-undef */
import * as hg from './hex-gen.js'

export function launchDb (firebaseConfig) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}

export function setData () {
  const hexCode = hg.hexGen()
  firebase.database().ref('urls/' + hexCode).set({
    url: document.getElementById('urlValue').value,
    code: hexCode,
    timestamp: Date.now()
  })
  document.getElementById('shrinkedUrl').innerHTML = '127.0.0.1:5500/href/?' + hexCode
}

export function getData () {
  const url = window.location.href
  const param = url.split('?')
  console.log(param[1])
  return firebase.database().ref('/urls/' + param[1]).once('value').then(function (snapshot) {
    const urlToRedirect = (snapshot.val() && snapshot.val().url) || 'Anonymous'
    document.location.href = urlToRedirect
  })
}
