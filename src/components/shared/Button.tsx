import React from "react"
type ButtonProps = {
    width: string;
    height: string;
    text: string;
    onClick?: () => void;

}


export  function Button({ width, height, text, onClick }: ButtonProps) {
    return (
        <button className={`text-white bg-primary font-roboto font-roboto-900 w-36 h-10   mt-2 ${height} ${width}
         focus:outline-none hover:bg-blue-500 hover:shadow-lg hover:shadow-white rounded-lg text-base mb-3 
         transition duration-500`} 
         onClick={onClick}>
            {text}
            </button>
    )
}
