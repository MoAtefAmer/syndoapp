

type HeadertextProps = {
    text: string;
    width?: string;
    addtionalStyle?: string;
}

export  function Headertext({text,width,addtionalStyle}: HeadertextProps) {
  return (
    <h1 className={`font-roboto font-roboto-900 text-[30px] 
    md:text-4xl lg:text-[50px] lg:leading-[58.59px] mb-4  ${width} ${addtionalStyle} 
     text-white`}>

        {text}

    </h1>
  )
}
