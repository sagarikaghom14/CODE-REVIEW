const aiService=require("../services/ai.service")


module.exports.getReview =async (Req,res)=>{

    const code = Req.body.code;

    if(!code){
        return res.status(400).send("Code is required");
    }

    const response = await aiService(code);

    res.send(response);
}