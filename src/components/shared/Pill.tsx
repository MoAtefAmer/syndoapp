
type PillProps = {
    text: string;
    color: string;
    width: string;
    height: string;
    textColor: string;
    lineHeight: string;
    textSize: string;
    padding?: string;

}

export function Pill({ text, color, width, height, textColor, textSize, lineHeight,padding }: PillProps) {
    return (
        <div className={`${color} z-0 h-9 w-32 ${padding} ${width} ${height} ${textColor} text-center rounded-lg  
     font-roboto font-roboto-900 ${textSize} ${lineHeight}  `}>

            <p>
                {text.toUpperCase()}
            </p>
        </div>
    )
}
