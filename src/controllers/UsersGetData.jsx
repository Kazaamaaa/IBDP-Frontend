import useTokenRefresh from "./useToken";
import { useEffect, useState } from "react";
import axios from "axios";

export const UsersGetData = () => {
  const [users, setUsers] = useState([]);
  const { refreshToken, token} = useTokenRefresh()

  useEffect(() => {
    getUsers();
  }, [])
  const getUsers = async () => {
    try {
      const response = await axios.get("https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  let counterid = 1;
    const dataTabeluser = users.map((item) => ({
    id: counterid++,
    name: item.name,
    username: item.username,
    noTelp: item.no_telp,
    jk: item.jk,
    alamat: item.alamat,
    image: item.url,
    action: "",
    }));

    const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Nama Lengkap", selector: "name", sortable: true },
    { name: "Username", selector: "username", sortable: true },
    { name: "NO Telepon", selector: "noTelp", sortable: true },
    { name: "Jenis Kelamin", selector: "jk", sortable: true },
    { name: "Alamat", selector: "alamat", sortable: true },
    {
        name: "Image",
        selector: "image",
        sortable: true,
        cell: (row) => <img src={row.image} alt="Article" style={{ width: "50px", height: "50px" }} />,
    },
    ];


  return { getUsers, users, columns, dataTabeluser };
};

export const UsersGetDataWithID = () => {
  const [usersData, setData] = useState([]);
  const { refreshToken, token, data} = useTokenRefresh()
  const [datarole, setdatarole] = useState('')

  useEffect(() => {
     getUsersWithID()
  }, [])
  
  const getUsersWithID = async () => {
    
    try {
      const response = await axios.get(`https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/me/${data.userId}`);
      setData(response.data);
      setdatarole(response.data.role)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  return { getUsersWithID, usersData, datarole };
};


export const UsersReset = () => {
  const { refreshToken } = useTokenRefresh()
  const [email, setEmail] = useState('')

  useEffect(() => {
     handlesubmit()
  }, [])

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handlesubmit = async () => {
    const formData = new FormData()
    formData.append("email", email)
    try {
      await axios.post(`https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/reset-password`, formData);

      await axios.delete('https://0468-2001-448a-40a7-1aa5-1138-a03b-a329-a0ae.ngrok-free.app/logout');
      window.location.reload()
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  return { handlesubmit, email, handleEmail };
};