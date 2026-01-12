class Apierror extends Error{
    constructor(
        statusCode, 
        errors= [], 
        stack="", 
        message="something went Wrong"
    ){
        this.statusCode = statusCode
        super(message)
        this.message = message
        this.errors = errors
        this.data = null
        this.success = false
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export {Apierror}