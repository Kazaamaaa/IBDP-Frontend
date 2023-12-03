import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTokenRefresh from "./useToken";

export const LokasiAllData = () => {
    const [lokasi, setLokasi] = useState([])
    const { token, axiosJWT, refreshToken} = useTokenRefresh()
  
    useEffect(() => {
      getLokasi();
      refreshToken;
    }, []); 

    const getLokasi = async () => {
        try {
          const response = await axios.get("http://localhost:3000/lokasi");
          setLokasi(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
    const handleDelete = async(lokasiid) => {
      try {
          await axiosJWT.delete(`http://localhost:3000/deletelokasi/${lokasiid}`, {
              headers:{
                  "Authorization" : `Bearer ${token}`
              }
          })
          getLokasi()
      } catch (error) {
          console.log(error)
      }
    }
  
      let counterid = 1;
      const datatabel = lokasi.map((item) => {
        const updatedAt = new Date(item.tanggal_dan_waktu_buka);
        // const bukaat = new Time(item.waktu_buka)
        // const tutupat = new Time(item.waktu_tutup)
      
        const formattedUpdatedAt = new Intl.DateTimeFormat("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(updatedAt);

        // const formatbukatime = new Intl.DateTimeFormat("id-ID", {
        //   hour: "numeric",
        //   minute: "numeric",
        //   second: "numeric",
        // }).format(bukaat)
        // const formattutuptime = new Intl.DateTimeFormat("id-ID", {
        //   hour: "numeric",
        //   minute: "numeric",
        //   second: "numeric",
        // }).format(tutupat)
      
        return {
          id: counterid++,
          nama: item.nama_tempat,
          tempat: item.tempat,
          tanggalwaktubuka: formattedUpdatedAt,
          waktubuka: item.waktu_buka,
          waktututup: item.waktu_tutup,
          image: item.url,
          action: "",
          item_id: item.id,
        };
      });
      
  
      const columns = [
      { name: "ID", selector: "id", sortable: true },
      { name: "Nama Tempat", selector: "nama", sortable: true },
      { name: "Tempat", selector: "tempat", sortable: true },
      { name: "Waktu Buka", selector: "tanggalwaktubuka", sortable: true },
      {
        name: "Image",
        selector: "image",
        sortable: true,
        cell: (row) => <img src={row.image} alt="Lokasi" style={{ width: "50px", height: "50px" }} />,
    },
      {
          name: "Action",
          selector: "action",
          sortable: true,
          cell: (row) => (
          <div>
              <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(row.item_id)} style={{ cursor: "pointer", marginRight: "10px" }} />
              <a href={`lokasiedit/${row.item_id}`}><FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer" }} /></a>
          </div>
          ),
      },
      ];
  
      return {
        lokasi,
          handleDelete,
          datatabel,
          columns,
          getLokasi
      }
  }


export const LokasiAddData = () => {
    const [nama, setNama] = useState("");
    const [tempat, setTempat] = useState("");
    const [waktu, setWaktu] = useState("");
    const [waktubuka, setWaktubuka] = useState("");
    const [waktutup, setWaktutup] = useState("");
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();
    const { token, refreshToken} = useTokenRefresh()
  
    useEffect(() => {
      refreshToken();
    }, [])
    const handleTitleChange = (e) => {
      setNama(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setTempat(e.target.value);
    };

    const handleTimeChange = (e) => {
      setWaktu(e.target.value);
    };
    const handleTimeBukaChange = (e) => {
      setWaktubuka(e.target.value);
    };

    const handleTimeTutupChange = (e) => {
      setWaktutup(e.target.value);
    };

    const handleImageChange = (e) => {
      const image = e.target.files[0];
      setFile(image);
  
      const previewURL = URL.createObjectURL(image);
      setImagePreview(previewURL);
    };
  
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("nama_tempat", nama)
      formData.append("tempat", tempat)
      formData.append("file", file)
      formData.append("tanggal_dan_waktu_buka", waktu)
      formData.append("waktu_buka", waktubuka)
      formData.append("waktu_tutup", waktutup)
      try {
          const response = await axios.post("http://localhost:3000/addlokasi", formData, {
              headers:{
                "Content-Type": "multipart/form-data",
                  "Authorization" : `Bearer ${token}`
              }
          })
          navigate('/lokasiall')
          console.log("sukses", response)
      } catch(error) {
          console.log("error", error)
      }
    };
  


  return { nama, tempat, imagePreview, waktu,waktubuka, waktutup, handleTimeBukaChange, handleTimeTutupChange, handleContentChange, handleTimeChange,handleImageChange, handleTitleChange, handleSubmit };
};

export const LokasiEditData = () => {
  const [nama, setNama] = useState("");
  const [tempat, setTempat] = useState("");
  const [waktu, setWaktu] = useState("");
  const [waktubuka, setWaktubuka] = useState("");
  const [waktutup, setWaktutup] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const { token, refreshToken} = useTokenRefresh()
  const {id} = useParams()

  useEffect(() => {
    refreshToken();
    getLokasiId();
  }, [])
  const handleTitleChange = (e) => {
    setNama(e.target.value);
  };

  const handleContentChange = (e) => {
    setTempat(e.target.value);
  };

  const handleTimeChange = (e) => {
    setWaktu(e.target.value);
  };

  const handleTimeBukaChange = (e) => {
    setWaktubuka(e.target.value);
  };

  const handleTimeTutupChange = (e) => {
    setWaktutup(e.target.value);
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setFile(image);

    const previewURL = URL.createObjectURL(image);
    setImagePreview(previewURL);
  };

  
    const getLokasiId = async() => {
      const response = await axios.get(`http://localhost:3000/lokasi/${id}`)
      setNama(response.data.nama_tempat)
      setTempat(response.data.tempat)
      setFile(response.data.image)
      setImagePreview(response.data.url)
      setWaktu(response.data.tanggal_dan_waktu_buka)
      setWaktubuka(response.data.waktu_buka)
      setWaktutup(response.data.waktu_tutup)
    }
    
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("nama_tempat", nama)
      formData.append("tempat", tempat)
      formData.append("file", file)
      formData.append("tanggal_dan_waktu_buka", waktu)
      formData.append("waktu_buka", waktubuka)
      formData.append("waktu_tutup", waktutup)
      try {
          const response = await axios.patch(`http://localhost:3000/editlokasi/${id}`, formData, {
              headers:{
                "Content-Type": "multipart/form-data",
                  "Authorization" : `Bearer ${token}`
              }
          })
          console.log("sukses", response)
          navigate('/lokasiall')
      } catch(error) {
          console.log("error", error)
      }
    };

    return { nama, tempat, imagePreview, waktu,waktubuka,waktutup,handleTimeBukaChange, handleTimeTutupChange, handleContentChange, handleTimeChange,handleImageChange, handleTitleChange, handleSubmit };

}