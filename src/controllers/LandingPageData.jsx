import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import useTokenRefresh from "./useToken";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const LandingPageData = () => {
  const [landing, setLanding] = React.useState([]);
  const { refreshToken } = useTokenRefresh();

  useEffect(() => {
    getLanding();
    refreshToken();
  }, []);

  const getLanding = async () => {
    try {
      const response = await axios.get("http://localhost:3000/landing");
      setLanding(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let counterid = 1;
  const datatabel = landing.map((item) => ({
    id: counterid++,
    judul: item.judul,
    deskripsi: item.deskripsi,
    videoUrl: item.video_url,
    action: "",
  }));

  const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Judul", selector: "judul", sortable: true },
    { name: "Deskripsi", selector: "deskripsi", sortable: true },
    {
      name: "Video",
      selector: "videoUrl",
      sortable: true,
      cell: (row) => (
        <video width="320" height="240" controls>
          <source src={row.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      name: "Action",
      selector: "action",
      sortable: true,
      cell: (row) => (
        <div>
          <a href={`landingpageadmin/${row.id}`}>
            <FontAwesomeIcon
              icon={faEdit}
              style={{ cursor: "pointer" }}
            />
          </a>
        </div>
      ),
    },
  ];

  return { getLanding, landing, columns, datatabel };
};


export const LandinPageEditData = () => {
    const [title, setTitle] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();
    const { token, axiosJWT, refreshToken} = useTokenRefresh()
    const {id} = useParams()
  
    useEffect(() => {
      refreshToken();
    }, [])
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleContentChange = (e) => {
        setDeskripsi(e.target.value);
    };
  
    const handleImageChange = (e) => {
        setImagePreview(e.target.value);
    };
  
    const getLandinglId = async() => {
      const response = await axios.get(`http://localhost:3000/landing/${id}`)
      setTitle(response.data.judul)
      setDeskripsi(response.data.deskripsi)
      setImagePreview(response.data.video_url)
    }
  
  
    const handleSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append("judul", title)
      formData.append("deskripsi", deskripsi)
      formData.append("video_url", imagePreview)
      try {
          const response = await axiosJWT.patch(`http://localhost:3000/editlanding/${id}`, formData, {
              headers:{
                  "Authorization" : `Bearer ${token}`
              }
          })
          console.log("sukses", response)
          navigate('/landingpageadmin')
      } catch {
          console.log("error", formData)
      }
    };
  
    useEffect(() => {
       getLandinglId();
       handleSubmit();
    }, []);
  
    return {
      title,
      deskripsi,
      imagePreview,
      handleContentChange,
      handleImageChange,
      handleTitleChange,
      handleSubmit
    }
  }