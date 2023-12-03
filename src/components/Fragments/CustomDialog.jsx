import React from 'react';
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import CustomButton from '../Elements/Button/CostumButton';
import { Link } from 'react-router-dom';
import alertImg from '../../assets/alert.svg';

const CustomDialog = ({ title, variant }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <CustomButton variant={variant} size="sm" title={title} onClick={handleOpen}></CustomButton>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className='flex flex-col justify-center text-center text-black mx-auto font-extrabold'>
          <div className='bg-red-300 h-full flex items-center justify-center rounded-t-3xl' style={{height:'200px'}}>
            <img src={alertImg} alt="" className='h-24' />
          </div>
          <div className='flex-1 bg-white flex flex-col justify-center rounded-b-3xl h-full' style={{ height: '400px'}}>
            <p className='font-bold text-2xl mb-4 mt-20'>PERINGATAN!!</p>
            <p className='text-lg mb-8'>Anda belum memiliki akun</p>
            <Link to={'/login'}>
              <Button
                size="sm"
                variant='filled'
                onClick={handleOpen}
                className="text-white text-center rounded-full mb-10 w-28 font-bold text-[14px] h-12 hover:text-red-400 hover:bg-white bg-red-300 "
              >
                Login
              </Button>
            </Link>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default CustomDialog;
