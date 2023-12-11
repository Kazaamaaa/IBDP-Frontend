import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTokenRefresh from "./useToken";

export const GoldarAllData = () => {
    const [goldar, setGoldar] = useState([])
    const { token, axiosJWT, refreshToken} = useTokenRefresh()
  
    useEffect(() => {
      getGoldar();
      refreshToken();
    }, []); 

    const getGoldar = async () => {
        try {
          const response = await axios.get("https://upset-polo-shirt-ray.cyclic.app/goldar");
          setGoldar(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
    const handleDelete = async(goldarid) => {
      try {
          await axiosJWT.delete(`https://upset-polo-shirt-ray.cyclic.app/deletegoldar/${goldarid}`, {
              headers:{
                  "Authorization" : `Bearer ${token}`
              }
          })
          getGoldar()
      } catch (error) {
          console.log(error)
      }
    }

    const GoldarData = () => {
      return goldar.reduce((total, item) => total + item.jumlah_goldar, 0);
    };
  
      let counterid = 1;
      const datatabel = goldar.map((item) => {
      
        return {
          id: counterid++,
          type_goldar: item.type_goldar,
          jumlah_goldar: item.jumlah_goldar,
          updatedat: item.diperbarui_pada,
          action: "",
          item_id: item.id,
        };
      });

      const latestUpdatedAt = goldar.reduce((latestDate, item) => {
        const itemDate = new Date(item.updatedAt);
        return itemDate > latestDate ? itemDate : latestDate;
    }, new Date(0));
    
  
      const columns = [
      { name: "ID", selector: "id", sortable: true },
      { name: "Type Golongan", selector: "type", sortable: true },
      { name: "Jumlah", selector: "jumlah_goldar", sortable: true },
      { name: "Update At", selector: "updatedat", sortable: true },
      {
          name: "Action",
          selector: "action",
          sortable: true,
          cell: (row) => (
          <div>
              <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(row.item_id)} style={{ cursor: "pointer", marginRight: "10px" }} />
              <a href={`editgoldar/${row.item_id}`}><FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer" }} /></a>
          </div>
          ),
      },
      ];
  
      return {
          goldar,
          latestUpdatedAt,
          handleDelete,
          datatabel,
          columns,
          getGoldar,
          GoldarData
      }
  }


export const GoldarAddData = () => {
    const [type, setType] = useState("");
    const [jumlah, setJumlah] = useState("");
    const navigate = useNavigate();
    const { token, axiosJWT, refreshToken} = useTokenRefresh()
  
    useEffect(() => {
      refreshToken();
      handleSubmit();
    }, [])

    const handleTitleChange = (e) => {
      setType(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setJumlah(e.target.value);
    };
  
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("type_goldar", type)
      formData.append("jumlah_goldar", jumlah)
      try {
          const response = await axiosJWT.post("https://upset-polo-shirt-ray.cyclic.app/saveFeed", formData, {
              headers:{
                  "Authorization" : `Bearer ${token}`
              }
          })
          navigate('/goldarall')
          console.log("sukses", response)
      } catch {
          console.log("error", formData)
      }
    };
  
  return { type, jumlah, handleContentChange, handleTitleChange, handleSubmit };
};

export const GoldarEditData = () => {
    const [type, setType] = useState("");
    const [jumlah, setJumlah] = useState("");
    const navigate = useNavigate();
    const { token, axiosJWT, refreshToken} = useTokenRefresh()
    const {id} = useParams()
  
    const handleTitleChange = (e) => {
      setType(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setJumlah(e.target.value);
    };
  
    const getGoldarId = async() => {
      const response = await axios.get(`https://upset-polo-shirt-ray.cyclic.app/goldar/${id}`)
      setType(response.data.type_goldar)
      setJumlah(response.data.jumlah_goldar)
    
    }
    
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("type_goldar", type)
      formData.append("jumlah_goldar", jumlah)
      try {
          const response = await axiosJWT.patch(`https://upset-polo-shirt-ray.cyclic.app/editgoldar/${id}`, formData, {
              headers:{
                  "Authorization" : `Bearer ${token}`
              }
          })
          console.log("sukses", response)
          navigate('/goldarall')
      } catch {
          console.log("error", formData)
      }
    };
  
    useEffect(() => {
       getGoldarId();
       refreshToken();
    }, []);
  
    return {
      type,
      jumlah,
      handleContentChange,
      handleTitleChange,
      handleSubmit
    }
}