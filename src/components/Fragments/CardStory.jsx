import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import Button from '../Elements/Button/CostumButton'

const CardStory = (props) => {

    const { children } = props

    return (

        <Card className="mt-6 w-96 bg-gray-100 p-8 shadow-2xl ">
            {children}
        </Card>
    )
};

const Header = (props) => {

    const { image, alt } = props
    return (
        <CardHeader color="white" className="relative max-h-full">
            <img
                src={image}
                alt={alt}
            />
        </CardHeader>
    )
}

const Body = (props) => {

    const { title, desc, gambar, alt } = props
    return (
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
            </Typography>
            <img src={gambar} alt={alt} />
            <Typography>
                {desc}
            </Typography>
        </CardBody>
    )
}

const Footer = (props) => {
    const { text } = props
    return (
        <CardFooter className="pt-0">
            <Button classname="w-full bg-red-500  text-white">{text}</Button>
        </CardFooter>
    )
}

CardStory.Header = Header;
CardStory.Body = Body;
CardStory.Footer = Footer;

export default CardStory