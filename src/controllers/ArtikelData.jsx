import useTokenRefresh from "./useToken";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

export const ArtikelAddData = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();
    const { token, refreshToken} = useTokenRefresh()

    useEffect(() => {
      refreshToken()
    }, [])
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
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
      formData.append("file", file)
      formData.append("judul", title)
      formData.append("content", content)
      try {
          const response = await axios.post("https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/addartikel", formData, {
              headers:{
                  "Content-Type": "multipart/form-data",
                  "Authorization" : `Bearer ${token}`
              }
          })
          navigate('/allartikel')
          console.log("sukses", response)
      } catch(error) {
          console.log("error", error)
      }
    };
  


  return { title, content, file, imagePreview, handleContentChange, handleImageChange, handleTitleChange, handleSubmit };
};


export const ArtikelAllData = () => {
  const [artikel, setArtikel] = useState([]);
  const { token, refreshToken} = useTokenRefresh()

  useEffect(() => {
    getArtikel();
    refreshToken();
  }, []); 

  const getArtikel = async () => {
    try {
      const response = await axios.get("https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/artikel");
      setArtikel(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async(artikelId) => {
    try {
        await axios.delete(`https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/deleteartikel/${artikelId}`, {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization" : `Bearer ${token}`
            }
        })
        getArtikel()
    } catch (error) {
        console.log(error)
    }
  }

  const ArtikelData = () => {
    return artikel.length;
  };

    let counterid = 1;
    const datatabel = artikel.map((item) => ({
    id: counterid++,
    title: item.judul,
    content: item.content,
    image: item.url,
    action: "",
    item_id: item.id,
    }));

    const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Judul", selector: "title", sortable: true },
    { name: "Content", selector: "content", sortable: true },
    {
        name: "Image",
        selector: "image",
        sortable: true,
        cell: (row) => <img src={row.image} alt="Article" style={{ width: "50px", height: "50px" }} />,
    },
    {
        name: "Action",
        selector: "action",
        sortable: true,
        cell: (row) => (
        <div>
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(row.item_id)} style={{ cursor: "pointer", marginRight: "10px" }} />
            <a href={`editartikel/${row.item_id}`}><FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer" }} /></a>
        </div>
        ),
    },
    ];

    return {
        artikel,
        token,
        handleDelete,
        datatabel,
        columns,
        getArtikel,
        ArtikelData
    }
}

export const ArtikelEditData = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const { token, refreshToken} = useTokenRefresh()
  const {id} = useParams()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setFile(image);

    const previewURL = URL.createObjectURL(image);
    setImagePreview(previewURL);
  };

  const getArtikelId = async() => {
    const response = await axios.get(`https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/artikel/${id}`)
    setTitle(response.data.judul)
    setContent(response.data.content)
    setFile(response.data.image)
    setImagePreview(response.data.url)
  }


  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("judul", title)
    formData.append("content", content)
    try {
        const response = await axios.patch(`https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/editartikel/${id}`, formData, {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization" : `Bearer ${token}`
            }
        })
        console.log("sukses", response)
        navigate('/allartikel')
    } catch {
        console.log("error", formData)
    }
  };

  useEffect(() => {
   getArtikelId();
   refreshToken()
  }, []);

  return {
    title,
    content,
    imagePreview,
    handleContentChange,
    handleImageChange,
    handleTitleChange,
    handleSubmit
  }
}


export const ArtikelDetail = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [waktu, setWaktu] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const {  refreshToken} = useTokenRefresh()
  const {id} = useParams()


  useEffect(() => {
    refreshToken()
  }, [])
  const getArtikelId = async() => {
    const response = await axios.get(`https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/artikel/${id}`)

    setTitle(response.data.judul)
    setContent(response.data.content)
    setFile(response.data.image)
    setImagePreview(response.data.url)
    setWaktu(response.data.dibuat_pada)
  }

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString)
    const year = date.getFullYear()
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const day = ("0" + date.getDate()).slice(-2)
  
    const formattedDate = `${day}-${month}-${year}`
    return formattedDate;
  };
  
  const formattedDate = formatDate(waktu);


return { title, content, file, imagePreview,formattedDate, getArtikelId};
};
