const checkAPI = (req,res,next) => {
    try {
        if(req.query.apiKey != 2020) {
            res.status(401).json({message : 'Invaild API KEY !'})
        } else {
            next();
        }
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

module.exports = checkAPI;