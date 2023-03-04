const express = require('express')
const router = express.Router()

const { getalltasks,createalltasks,gettasks,updatealltasks,deletealltasks} = require('../controllers/tasks')

router.route('/').get(getalltasks).post(createalltasks)
router.route('/:id').get(gettasks).patch(updatealltasks).delete(deletealltasks)

module.exports = router