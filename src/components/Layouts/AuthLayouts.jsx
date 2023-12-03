import daftar from '../../assets/img/daftar.svg';
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
  const { children, title, name, desc, type } = props;

  return (
    <>
      <div className="container mx-auto grid grid-cols-12 gap-2 w-full py-2">
        <div className={`col-span-12 md:col-span-6 md:p-15 p-10 justify-center w-full h-full align-middle ${type === 'register' ? '' : 'mt-9'}`}>
          <div className='flex justify-center items-center align-middle py-14 border-solid border-2 border-red-500 rounded-lg'>
            <div className='w-full max-w-xs'>
              <h1 className='text-xl font-bold mb-2 text-black'>{desc}</h1>
              <p className='font-medium text-slate-500 pb-2'>
                {name}
              </p>
              {children}

              <p className='text-sm mt-5 text-center'>
                {type === 'login' ? "Belum memiliki akun?" : "Sudah memiliki akun?"}
                {type === 'login' && (
                  <Link to="/register" className='font-bold text-bold'>Daftar</Link>
                )}
                {type === 'register' && (
                  <Link to="/login" className='font-bold text-bold'>Masuk</Link>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className={`col-span-12 md:col-span-6 md:p-15 p-10 justify-center w-full h-full align-middle ${type === 'register' ? 'mt-12' : ''}`}>
          <img src={daftar} alt="test" className='rounded-lg' />
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
