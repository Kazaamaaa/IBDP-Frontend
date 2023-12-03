import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import coment from "../../assets/img/coment.png"
import share from "../../assets/img/share.png"
import clock from "../../assets/img/clock.png"

const CardForum = (props) => {
    const { children } = props
    return (
        <>
            <Card className="max-w-[24rem] overflow-hidden rounded-none">
                {children}
            </Card>
        </>
    )
}

const Header = (props) => {
    const { image, alt } = props
    return (
        <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
        >
            <img
                src={image}
                alt={alt}
            />
        </CardHeader>
    )
}

const Body = (props) => {
    const { title, desc, category, images } = props
    return (
        <CardBody className="text-center" >
            <Typography variant="h5" color="blue-gray" className="flex text-white text-center justify-start rounded-md font-bold text-[14px] w-fit bg-red-400 border-solid mb-5">
                {category}
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-justify">
                {title}
            </Typography>
            <div className="flex items-center justify-start">
                <Avatar
                    size="sm"
                    variant="circular"
                    alt="tania andrew"
                    src={images}
                    className="border-2 border-white hover:z-10 mt-4"
                />
                <Typography className="font-normal mt-4 ml-5">January 10</Typography>
            </div>
            <Typography variant="small" color="gray" className="font-normal mt-5 text-justify">
                {desc}
            </Typography>


        </CardBody>
    )
}

const Footer = (props) => {

    const {tanggal } = props
    return (
        <CardFooter className="flex items-center justify-between">
            <div className="flex items-center">
                <Tooltip content="Natali Craig">
                    <Avatar
                        size="sm"
                        variant="circular"
                        alt="natali craig"
                        src={clock}
                        className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                <Typography className="font-normal ml-2">{tanggal}</Typography>
            </div>
            <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src={coment}
                className="border-2 border-white ml-20"
            />
            <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src={share}
                className="border-2 border-white hover:z-10"
            />
        </CardFooter>
    )
}

CardForum.Header = Header;
CardForum.Body = Body;
CardForum.Footer = Footer;
export default CardForum