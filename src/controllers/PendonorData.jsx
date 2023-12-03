import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoldarAllData } from "./GolonganDarahData";
import useTokenRefresh from "./useToken";

export const PendonorAllData = () => {
    const [pendonor, setPendonor] = useState([]);
    const { goldar } = GoldarAllData()
    const { token, axiosJWT, refreshToken} = useTokenRefresh()
  
    useEffect(() => {
      getPendonor();
      refreshToken();
    }, []); 
  
    const getPendonor = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pendonor");
        setPendonor(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleDelete = async(pendonorid) => {
      try {
          await axiosJWT.delete(`http://localhost:3000/deletependonor/${pendonorid}`, {
              headers:{
                  "Authorization" : `Bearer ${token}`
              }
          })
          getPendonor()
      } catch (error) {
          console.log(error)
      }
    }

    const countTotalData = () => {
      return pendonor.length;
    };
  
      let counterid = 1;
      const datatabel = pendonor.map((item) => {
        const golonganDarah = goldar.find((goldarItem) => goldarItem.id === item.id_goldar);
        const typeGoldar = golonganDarah ? golonganDarah.type_goldar : '';
        return {
            id: counterid++,
            nama: item.nama,
            alamat: item.alamat,
            kelurahan: item.kelurahan,
            kecamatan: item.kecamatan,
            jenkel: item.jenkel,
            tempat_lahir: item.tempat_lahir,
            tanggal_lahir: item.tanggal_lahir,
            pekerjaan: item.pekerjaan,
            nama_ibu_kandung: item.nama_ibu_kandung,
            status_pernikahan: item.status_pernikahan,
            reshus: item.reshus,
            no_hp: item.no_hp,
            goldar: typeGoldar,
            action: "",
            item_id: item.id,
            }
        });
  
      const columns = [
      { name: "ID", selector: "id", sortable: true },
      { name: "Nama", selector: "nama", sortable: true },
      { name: "Alamat", selector: "alamat", sortable: true },
      { name: "kelurahan", selector: "kelurahan", sortable: true },
      { name: "kecamatan", selector: "kecamatan", sortable: true },
      { name: "jenkel", selector: "jenkel", sortable: true },
      { name: "tempat_lahir", selector: "tempat_lahir", sortable: true },
      { name: "tanggal_lahir", selector: "tanggal_lahir", sortable: true },
      { name: "pekerjaan", selector: "pekerjaan", sortable: true },
      { name: "nama_ibu_kandung", selector: "nama_ibu_kandung", sortable: true },
      { name: "status_pernikahan", selector: "status_pernikahan", sortable: true },
      { name: "reshus", selector: "reshus", sortable: true },
      { name: "no_hp", selector: "no_hp", sortable: true },
      { name: "goldar", selector: "goldar", sortable: true },

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
        pendonor,
          handleDelete,
          datatabel,
          columns,
          getPendonor,
          countTotalData
      }
  }

 