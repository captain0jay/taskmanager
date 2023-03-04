const errorhandlermiddleware = (req,res,next,err) => {
    return res.status(500).json({ msg:err })
}

module.exports = errorhandlermiddleware