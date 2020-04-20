import * as fb from './modules/db-logs.js'
import { firebaseConfig } from './modules/firebase-config.js'

fb.launchDb(firebaseConfig)

document.getElementById('button').addEventListener('click', (e) => {
  e.stopPropagation()
  fb.setData()
})
