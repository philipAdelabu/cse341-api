
export  function sendSuccess(res, result, message){
    res.json({
        success: true,
        message, 
        data: result,
    });

};

export function sendError(res, message, statusCode){
        res.status(statusCode).json({
        statusCode: res.statuCode,
        success: false,
        message, 
    })
};