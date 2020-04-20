import * as fb from '../url-reducer/modules/db-logs.js'
import { firebaseConfig } from '../url-reducer/modules/firebase-config.js'

fb.launchDb(firebaseConfig)
fb.getData()
