import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import useTokenRefresh from "../controllers/useToken";

// eslint-disable-next-line react/prop-types, no-unused-vars
const PopupFormProfil = ({ isVisible, onClose }) => {
    const [nama, setNama] = useState("");
    const [alamat, setalamat] = useState("");
    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [jenkel, setjenkel] = useState("");
    const [no_telp, setno_telp] = useState("");
    const [nik, setnik] = useState("");
    const [tanggal_lahir, settanggal_lahir] = useState("");
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const { token, axiosJWT, refreshToken, data} = useTokenRefresh()
    useEffect(() => {
      refreshToken(); 
    }, []);

    const handleNameChange = (e) => {
      setNama(e.target.value);
    };
  
    const handleAlamatChange = (e) => {
      setalamat(e.target.value);
    };
  
    const handleemailChange = (e) => {
      setemail(e.target.value);
    };
  
    const handleusernameChange = (e) => {
      setusername(e.target.value);
    };
  
    const handleJKChange = (value) => {
      if (jenkel === value) {
        setjenkel('');
      } else {
        setjenkel(value);
      }
    };
  
    const handleNIKChange = (e) => {
      setnik(e.target.value);
    };
  
    const handleTanggalLahirChange = (e) => {
      settanggal_lahir(e.target.value);
    };
    const handleNoLahirChange = (e) => {
      setno_telp(e.target.value);
    };
  
    const handleImageChange = (e) => {
      const image = e.target.files[0];
      setFile(image);
  
      const previewURL = URL.createObjectURL(image);
      setImagePreview(previewURL);
    };

    useEffect(() => {
      getId()
    }, [])

    const getId = async() => {
      const response = await axios.get(`http://localhost:3000/me/${data.userId}`)
      setNama(response.data.name)
      setusername(response.data.username)
      setFile(response.data.image)
      setImagePreview(response.data.url)
      setno_telp(response.data.no_telp)
      setalamat(response.data.alamat)
      settanggal_lahir(response.data.tanggal_lahir)
      setjenkel(response.data.jk)
      setnik(response.data.nik)
      setemail(response.data.email)
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("name", nama)
      formData.append("username", username)
      formData.append("email", email)
      formData.append("no_telp", no_telp)
      formData.append("alamat", alamat)
      formData.append("tanggal_lahir", tanggal_lahir)
      formData.append("jk", jenkel)
      formData.append("nik", nik)
      formData.append("file", file)
      try {
          const response = await axios.patch(`http://localhost:3000/editUsers/${data.userId}`, formData, {
              headers:{
                  "Content-Type": "multipart/form-data",
                  "Authorization" : `Bearer ${token}`
              }
          })
          console.log("sukses", response)
          window.location.reload()
      } catch(error) {
          console.log("error", error)
      }
    };

    return isVisible ? (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg w-screen max-w-3xl"> 
          <div className="flex justify-end mb-2">
            <button onClick={onClose} className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="font-bold text-lg">Lengkapi Profil Anda</p>
      <div className=" flex">
          <div className="w-1/2 pr-4">
          <form className="flex flex-col" onSubmit={(event) => event.preventDefault()}>
            <div className="flex flex-col pt-3">
              <label htmlFor="nama">Nama Lengkap</label>
              <input
                type="text"
                id="nama"
                value={nama}
                onChange={handleNameChange}
                required
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleusernameChange}
                readOnly
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="flex flex-col pt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleemailChange}
                required
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-3">
              <label htmlFor="no_telp">NO Telepon</label>
              <input
                type="number"
                id="no_telp"
                value={no_telp}
                onChange={handleNoLahirChange}
                required
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>


            <div className="flex flex-col pt-3">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="alamat"
                value={alamat}
                onChange={handleAlamatChange}
                required
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            
          </form>
         </div>
          
         <div className="w-1/2 pl-4">
          <form className="flex flex-col" onSubmit={(event) => event.preventDefault()}>
          
          <div className="flex flex-col pt-3">
              <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
              <input
                type="date"
                id="tanggal_lahir"
                value={tanggal_lahir}
                onChange={handleTanggalLahirChange}
                required
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              checked={jenkel === 'male'}
              onChange={() => handleJKChange('male')}
            />
            <Typography
              variant="small"
              color="gray"
              className="flex items-start font-normal"
            >
              Laki-Laki
            </Typography>
            <input
              type="checkbox"
              checked={jenkel === 'female'}
              onChange={() => handleJKChange('female')}
            />
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Perempuan
            </Typography>
          </div>

          <div className="flex flex-col pt-3">
              <label htmlFor="nik">NIK</label>
              <input
                type="number"
                id="nik"
                value={nik}
                onChange={handleNIKChange}
                required
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-3">
              <label htmlFor="file">Foto</label>
              <input type="file" id="file" onChange={handleImageChange} name="file" className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="mt-2 rounded-md h-14 w-20"
                  style={{ maxHeight: "200px" }}
                />
              )}
            </div>
  
            <input
              type="submit"
              value="Kirim"
              onClick={handleSubmit}
              className="bg-red-700 rounded-xl text-white font-bold text-lg hover:bg-gray-700 p-2 mt-3"
            />
          </form>
        </div>
            
          
        </div>
        <hr className="my-2 border-t border-gray-300" />
          <div className="flex justify-end">
            <button onClick={onClose} className="text-red-500 font-semibold">
              Close
            </button>
          </div>
      </div>
      </div>
    ) : null;
  };
  
  export default PopupFormProfil;
  