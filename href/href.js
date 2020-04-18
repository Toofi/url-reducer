import * as fb from '../modules/db-logs.js'
import { firebaseConfig } from '../modules/firebase-config.js'

fb.launchDb(firebaseConfig)
fb.getData()
