
type ButtonProps = {
    width: string;
    height: string;
    text: string;
    onClick?: () => void;

}


export default function Button({ width, height, text, onClick }: ButtonProps) {
    return (
        <button className={` text-white bg-primary font-roboto font-roboto-900 h-[${height}px] w-[${width}px] mt-2
         focus:outline-none hover:bg-blue-500 hover:shadow-lg hover:shadow-white rounded-lg text-base mb-3 transition duration-500`} onClick={onClick} >{text}</button>
    )
}
