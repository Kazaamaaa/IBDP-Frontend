import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersGetData } from "./UsersGetData";
import useTokenRefresh from "./useToken";

export const StoriesAllData = () => {
    const [stories, setStories] = useState([]);
    const { users } = UsersGetData()
    const { token, refreshToken} = useTokenRefresh()
  
    useEffect(() => {
      getStories();
      refreshToken()
    }, []); 
  
    const getStories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/stories");
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const handleDelete = async(storiesid) => {
      try {
          await axios.delete(`http://localhost:3000/deletestories/${storiesid}`, {
              headers:{
                  "Content-Type": "multipart/form-data",
                  "Authorization" : `Bearer ${token}`
              }
          })
          getStories()
      } catch (error) {
          console.log(error)
      }
    }
  
    const StoriesData = () => {
      return stories.length;
    };

    let counterid = 1;
    const sortedStories = stories.sort((a, b) => {
      const dateA = new Date(a.dibuat_pada);
      const dateB = new Date(b.dibuat_pada);
      return dateB - dateA; 
    });
  
    const datatabel = sortedStories.map((item) => {
      const dataUser = users.find((userItem) => userItem.id === item.id_users);
  
      const updatedAt = new Date(item.dibuat_pada);
      const fotmatCreatedAt = new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(updatedAt);
  
      return {
        id: counterid++,
        title: item.judul,
        content: item.content,
        image: item.url,
        action: "",
        item_id: item.id,
        createdAt: fotmatCreatedAt,
        users: dataUser ? { name: dataUser.name, image: dataUser.url } : "null"
      };
    });
  
  
      const columns = [
      { name: "ID", selector: "id", sortable: true,  width: "120px" },
      { name: "Judul", selector: "title", sortable: true },
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
          </div>
          ),
      },
      ];
  
      return {
            stories,
          handleDelete,
          datatabel,
          columns,
          getStories,
          StoriesData
      }
  }

export const StoriesAddData = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);
    const [waktu, setWaktu] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const { token, refreshToken} = useTokenRefresh()
    useEffect(() => {
      refreshToken();
    }, []);
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };

    const handleTimeChange = (e) => {
      setWaktu(e.target.value);
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
      formData.append("dibuat_pada", waktu)
      try {
          const response = await axios.post("http://localhost:3000/addstories", formData, {
              headers:{
                  "Content-Type": "multipart/form-data",
                  "Authorization" : `Bearer ${token}`
              }
          })
          window.location.reload();
          console.log("sukses", response)
      } catch (error) {
          console.log("error", error, token)
      }
    };


  return { title, content, file, imagePreview, handleContentChange, handleTimeChange, handleImageChange, handleTitleChange, handleSubmit };
};


export const StoriesDetail = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [waktu, setWaktu] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [datastories, setDatastories] = useState([])
  const {  refreshToken} = useTokenRefresh()
  const { users } = UsersGetData()
  const {id} = useParams()

  useEffect(() => {
    refreshToken();
  }, []);

  const getStoriesId = async() => {
    const response = await axios.get(`http://localhost:3000/stories/${id}`)

    setTitle(response.data.judul)
    setContent(response.data.content)
    setFile(response.data.image)
    setImagePreview(response.data.url)
    setWaktu(response.data.dibuat_pada)
    if (Array.isArray(response.data)) {
      setDatastories(response.data)
    } else {
      setDatastories([response.data])
    }

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

    const datatabel = datastories.map((item) => {
    const dataUser = users.find((userItem) => userItem.id === item.id_users);

      return {
        users: dataUser? { name: dataUser.name, image: dataUser.url } : "null"
      }
    });
    const name = datatabel[0]?.users?.name;

return { title, content, file, imagePreview,formattedDate,name, getStoriesId};
};
