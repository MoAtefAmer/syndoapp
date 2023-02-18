

type CompanylogoProps = {
    img: string;
}

export  function Companylogo({img}:CompanylogoProps) {
  return (
    <img alt="companylogo" className=" w-[96px] h-[96px] lg:min-w-[80px]
     object-cover object-center rounded" src={img?img:'https://dummyimage.com/400x400'}/>
  )
}
