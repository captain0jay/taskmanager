//we are doing this to remove constant use of one format used again and again in tasks.js in controller folder
//that used format is async,await(mongoose ka hai),try,catch

const asyncWrapper = (fn) => {
    return async(req,res,next) => {
        try{
            await fn(req,res,next)
        }
        catch(error){
            next(error)
        }
    }
}

module.exports = asyncWrapper