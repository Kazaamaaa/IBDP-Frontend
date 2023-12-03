import { Button } from "@material-tailwind/react"

const CustomButton = (props) => {

  const { onClick, variant, title, size } = props

  return variant == "outlined" ? (
    <Button
      size={size}
      onClick={onClick}
      className="text-red-300 bg-white rounded-full font-bold text-[14px] w-full h-10 hover:text-white hover:bg-red-400  !border !border-gray-300 border-solid"
    >
      {title}
    </Button>
  ) : (
    <Button
      size={size}
      onClick={onClick}
      className="text-white text-center rounded-lg font-bold w-full text-[14px] h-12 hover:text-red-400 hover:bg-white bg-red-300 "
    >
      {title}
    </Button>
  )
}

export default CustomButton