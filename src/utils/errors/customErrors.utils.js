class CustomErrors {
    static createError({ name = "Error", cause, message, code = 1 }) {
      console.log( "desde el create errro de pindonga");
      console.log(message)
    const error = new Error(message);
      error.cause = cause;
      error.name = name;
      error.code = code;
  
      throw error;
    }
  }
  
  export default CustomErrors;