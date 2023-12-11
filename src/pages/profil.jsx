import { useState, useEffect } from 'react'
import Layout from '../components/Layouts/Layout'
import profile from '../assets/img/profile.png'
import line from '../assets/img/line.png'
import CustomButton from '../components/Elements/Button/CostumButton'
import useTokenRefresh from '../controllers/useToken'
import AlertPopup from './popupFormProfil'
import { UsersGetDataWithID, UsersReset } from '../controllers/UsersGetData'

const ProfilPage = () => {

  const {  refreshToken } = useTokenRefresh()
  const {usersData, getUsersWithID} = UsersGetDataWithID()
  const [isChangingPassword, setChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { handlesubmit, email, handleEmail } = UsersReset()

  useEffect(() => {
    refreshToken();
    getUsersWithID();
  }, [])

  const handlePasswordChangeClick = () => {
    setChangingPassword(true);
  };

  const handleCancelPasswordChange = () => {
    setChangingPassword(false);
    setNewPassword('');
  };

  const handleFloatingButtonClick = () => {
    setPopupVisible(true); 
  };

  const handleClosePopup = () => {
    setPopupVisible(false); 
  };

    return (
        <Layout>
            <div className="mt-20 m-10 rounded-2xl p-10">
                <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-10">
                    <div className="col-span-4 hidden md:flex flex-col justify-center items-center">
                        <img src={usersData.url} alt="donor" />
                    </div>
                    <div className="col-span-12 md:col-span-8 md:p-15 p-10 justify-center w-full h-full align-middle">
                        
                        <p className="text-justify text-black text-2xl mt-20">
                            “Setiap tetes darah yang kamu berikan adalah tanda cinta dan kepedulianmu terhadap sesama.
                            Mari berbagi kebaikan dengan donor darah dan berbagi pengalaman mu”
                        </p>
                    </div>
                    </div>
                </div>
            <div className="container mx-auto grid grid-cols-12 gap-10 w-max py-20">
                <div className="col-span-12 border border-solid border-gray-300 rounded-2xl p-10">
                    <div className="flex gap-20">
                        <div className="flex flex-col justify-start">
                            <div className="h-62 w-62 rounded-lg flex flex-col justify-center items-center gap-2">
                                <h3 className="font-bold text-xl " onClick={handleCancelPasswordChange}>Akun</h3>
                                <img src={line} alt="" width={200} />
                                <h3 className="font-bold text-xl" onClick={handlePasswordChangeClick}>
                                Ganti Sandi
                                </h3>
                                <img src={line} alt="" width={200} />
                            </div>
                        </div>
                        
                        {isChangingPassword ? (
                            <div className="col-span-12  flex flex-col justify-center gap-1">
                            <label htmlFor="email" className="block text-lg font-normal mb-2">
                            Masukkan Email:
                            </label>
                            <img src={line} alt="" className='col-span-12 text-xs' style={{ opacity: 0 }} />
                            <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmail}
                            className="border border-solid border-gray-300 rounded-md p-2 mb-4"
                            />
                            <div className="flex gap-4">
                            <CustomButton title="Send" onClick={handlesubmit} />
                            <CustomButton title="Cancel" onClick={handleCancelPasswordChange} />
                            </div>
                        </div>
                        ) : (
                            <div className="flex flex-col justify-center gap-1">
                            <div className='grid grid-cols-12 justify-center mx-auto mt-2'>
                                <img className='col-span-1 mt-1' src={usersData.url} width={80} height={100} alt="cara-1" />
                                <p className="text-lg font-normal col-span-10 ml-3">
                                    {usersData.name || 'null'}<br />
                                    {usersData.no_telp || 'null'}<br />
                                    {usersData.email || 'null'}
                                </p>
                                <CustomButton title="Ubah" onClick={handleFloatingButtonClick}></CustomButton>
                                <AlertPopup isVisible={isPopupVisible} onClose={handleClosePopup} />
                            </div>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                Tanggal Lahir
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                {usersData.tanggal_lahir || 'null'}
                                </p>
                                
                            </div>
                            <img src={line} alt="" className='col-span-12 text-xs'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                Jenis Kelamin
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                    {usersData.jk || 'null'}
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                    NIK
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                {usersData.nik || 'null'}
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                    Alamat
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                {usersData.alamat || 'null'}
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                            <div className='grid grid-cols-12 mt-2'>
                                <p className="text-lg font-normal col-span-3 ml-3">
                                    Nama Pengguna
                                </p>
                                <p className='text-lg font-normal col-span-9 ml-3 text-end'>
                                    {usersData.username || 'null'}
                                </p>
                            </div>
                            <img src={line} alt="" className='col-span-12'/>
                            
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProfilPage