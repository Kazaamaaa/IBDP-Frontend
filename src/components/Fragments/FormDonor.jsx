import { useEffect, useState } from 'react'
import {
  Card,
  Checkbox,
  Typography,
  Select,
  Option,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";
import InputForm from '../Elements/Input';
import CustomButton from '../Elements/Button/CostumButton';
import img from '../../assets/img/circle.svg'
import { GoldarAllData } from '../../controllers/GolonganDarahData';
import useTokenRefresh from '../../controllers/useToken';
import axios from 'axios';

const FormDonor = () => {
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const {goldar} = GoldarAllData()
  const [nama, setNama] = useState("");
    const [alamat, setalamat] = useState("");
    const [kelurahan, setkelurahan] = useState("");
    const [kecamatan, setkecamatan] = useState("");
    const [jenkel, setjenkel] = useState("");
    const [tempat_lahir, settempat_lahir] = useState("");
    const [tanggal_lahir, settanggal_lahir] = useState("");
    const [pekerjaan, setpekerjaan] = useState("");
    const [nama_ibu_kandung, setnama_ibu_kandung] = useState("");
    const [status_pernikahan, setstatus_pernikahan] = useState("");
    const [golonganDarah, setGolongandarah] = useState("");
    const [reshus, setreshus] = useState("");
    const [no_hp, setno_hp] = useState("");
    const { token, refreshToken} = useTokenRefresh()

    useEffect(() => {
      refreshToken()
    }, [])

    const handleNameChange = (e) => {
      setNama(e.target.value);
    };
  
    const handleAlamatChange = (e) => {
      setalamat(e.target.value);
    };

    const handleKelurahanChange = (e) => {
      setkelurahan(e.target.value);
    };

    const handleKecamatanChange = (e) => {
      setkecamatan(e.target.value);
    };

    const handleJKChange = (value) => {
      if (jenkel === value) {
        setjenkel('');
      } else {
        setjenkel(value);
      }
    };

    const handleTempatLahirChange = (e) => {
      settempat_lahir(e.target.value);
    };

    const handleTanggalLahirChange = (e) => {
      settanggal_lahir(e.target.value);
    };

    const handlePekerjaanChange = (e) => {
      setpekerjaan(e.target.value);
    };

    const handleIbuChange = (e) => {
      setnama_ibu_kandung(e.target.value);
    };

    const handlePernikahanChange = (value) => {
      if (status_pernikahan === value) {
        setstatus_pernikahan('');
      } else {
        setstatus_pernikahan(value);
      }
    };

    const handleGolonganDarahChange = (value) => {
      setGolongandarah(value);
    };

    const handleRhesusChange = (value) => {
      setreshus(value);
    };
  
    const handleNoChange = (e) => {
      setno_hp(e.target.value);
    };
    
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("nama", nama)
      formData.append("alamat", alamat)
      formData.append("kelurahan", kelurahan)
      formData.append("kecamatan", kecamatan)
      formData.append("jenkel", jenkel)
      formData.append("tempat_lahir", tempat_lahir)
      formData.append("tanggal_lahir", tanggal_lahir)
      formData.append("pekerjaan", pekerjaan)
      formData.append("nama_ibu_kandung", nama_ibu_kandung)
      formData.append("status_pernikahan", status_pernikahan)
      formData.append("id_goldar", golonganDarah)
      formData.append("reshus", reshus)
      formData.append("no_hp", no_hp)
      try {
          const response = await axios.post("http://localhost:3000/addpendonor", formData, {
              headers:{
                  "Authorization" : `Bearer ${token}`
              }
          })
          setOpenSuccessDialog(true);
          // window.location.reload()
          console.log("sukses", response)
      } catch (error) {
          console.log(`error ni ${error}`)
      }
    };

    const handleok = () =>{
      window.location.reload()
    }

  return (
    <Card color="transparent" shadow={false} >
      <div className='flex justify-center'>
        <Typography variant="h4" color="blue-gray">
          DATA PENDONOR
        </Typography>
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-2xl sm:w-96">
        <div className="flex flex-col gap-2">
          <InputForm label="Nama Lengkap" variant="outlined" value={nama} type="text" onChange={handleNameChange} />
          <InputForm label="Alamat" variant="outlined" value={alamat} type="text" onChange={handleAlamatChange} />
          <InputForm label="Kelurahan" variant="outlined" value={kelurahan} type="text" onChange={handleKelurahanChange} />
          <InputForm label="Kecamatan" variant="outlined" value={kecamatan} type="text" onChange={handleKecamatanChange} />
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
          <InputForm label="Tempat Lahir" variant="outlined" value={tempat_lahir} type="text" onChange={handleTempatLahirChange} />
          <InputForm label="Tanggal Lahir" variant="outlined" type="date" value={tanggal_lahir} onChange={handleTanggalLahirChange} />
          <InputForm label="Pekerjaan" variant="outlined" type="text" value={pekerjaan} onChange={handlePekerjaanChange} />
          <InputForm label="Nama Ibu Kandung" variant="outlined" type="text" value={nama_ibu_kandung} onChange={handleIbuChange} />
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              checked={status_pernikahan === 'belum'}
              onChange={() => handlePernikahanChange('belum')}
            />
            <Typography
              variant="small"
              color="gray"
              className="flex items-start font-normal"
            >
              Belum Menikah
            </Typography>
            <input
              type="checkbox"
              checked={status_pernikahan === 'sudah'}
              onChange={() => handlePernikahanChange('sudah')}
            />
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              Sudah Menikah
            </Typography>
          </div>
          <div className='mb-4'>
            <Select label="Golongan Darah" value={golonganDarah} onChange={handleGolonganDarahChange}>
              {goldar.map((item) => (
                <Option key={item.id} value={item.id}>
                 {item.type_goldar || item.type_goldar}
                </Option>
              ))}
            </Select>
            
          </div>

          <div className='mb-4'>
            <Select label="Rhesus" value={reshus} onChange={handleRhesusChange}>
              <Option value="">Pilih Reshus</Option>
              <Option value="positif">Reshus Positif</Option>
              <Option value="negatif">Reshus Negatif</Option>
            </Select>
          </div>


          <InputForm label="No Telepon" variant="outlined" type="number" value={no_hp} onChange={handleNoChange} />
        </div>

        <CustomButton variant="filled" size="sm" title="Kirim Formulir" onClick={handleSubmit}></CustomButton>

        <Dialog
        open={openSuccessDialog}
        handler={() => setOpenSuccessDialog(!openSuccessDialog)}
        className='bg-white rounded-xl'
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogBody className='flex flex-col justify-center text-center text-black p-32 mx-auto font-extrabold gap-4'>
          <span><img src={img} alt="" /></span><br />
          <h1 className='font-extrabold'>Selamat!!</h1>
          <p>Data Anda Berhasil Dikirim!!</p>
          <CustomButton variant="filled" size="sm" title="Ok" onClick={handleok} />
        </DialogBody>
      </Dialog>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-start font-normal"
              required
            >
              Valid
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <p className='text-red-200 text-sm'>*Pastikan Data Yang Anda Kirimkan Benar</p>
      </form>
    </Card>
  );
}

export default FormDonor