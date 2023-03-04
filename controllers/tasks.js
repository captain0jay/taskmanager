const tasks = require('../models/task')
const asyncWrapper = require('../middleware/async')

const getalltasks = asyncWrapper(async (req, res)=>{
    const task = await tasks.find({})
    res.status(201).json({task})//({status: success, data: {task , nbHits: task.length} })
})

const createalltasks = asyncWrapper(async (req, res)=>{
    const task = await tasks.create(req.body)
    res.status(201).json({ task })
})

const gettasks = asyncWrapper(async (req, res)=>{
    const {id:taskID} = req.params
    const task = await tasks.findOne({_id:taskID})
    if(!tasks){
        return res.status(500).json({msg:`damn error in ${taskID}`})
    }
    res.status(201).json({task})
    //res.json({id: req.params.id})
})

const updatealltasks = asyncWrapper(async (req, res)=>{
    const {id:taskID} = req.params;
    const task = await tasks.findOneAndUpdate({_id:taskID},req.body,{
        new: true,
        runValidators: true
    })
    if(!tasks){
        return res.status(500).json({msg:`damn error in ${taskID}`})
    }
    res.status(201).json({task})
})

const deletealltasks = asyncWrapper(async (req, res)=>{
    const {id:taskID} = req.params;
    const task = await tasks.findOneAndDelete({_id:taskID})
        if(!tasks){
            return res.status(500).json({msg:`damn error in ${taskID}`})
        }
    res.status(201).json({task})
})

module.exports = {
    getalltasks,
    createalltasks,
    gettasks,
    updatealltasks,
    deletealltasks,
}