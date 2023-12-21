import LayoutAdmin from "../components/LayoutAdmin";
import DataTable from "react-data-table-component";
import { UsersGetData } from "../../../controllers/UsersGetData";
import useTokenRefresh from "../../../controllers/useToken";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UsersAll = () => {
  const { dataTabeluser, columns} = UsersGetData()
  const navigate = useNavigate()
  const { refreshToken, data} = useTokenRefresh()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshToken();
  }, []);

  useEffect(() => {
    if (data && data.role !== undefined) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data.role !== 'admin') {
    return navigate('/');
    } else {
      return (
        <LayoutAdmin>
          <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
            <section className="p-8 ">
              <h1 className="pb-3 font-semibold text-xl text-gray-900">Users List</h1>
              <DataTable columns={columns} data={dataTabeluser} pagination highlightOnHover customStyles={{
              headRow: {
                style: {
                  border: '1px solid #dee2e6', // Add a border to the header row
                },
              },
              headCells: {
                style: {
                  borderRight: '1px solid #dee2e6', // Add a right border to header cells
                  justifyContent: 'center',

                },
              },

              rows: {
                style: {
                  border: '1px solid #dee2e6', // Add a border to all rows
                },
              },
              cells: {
                style: {
                  borderRight: '1px solid #dee2e6', // Add a right border to cells
                  textAlign: 'center', // Center the content of cells
                  justifyContent: 'center',

                },
              },
              pagination: {
                style: {
                  border: '1px solid #dee2e6', // Add a border to the pagination
                },
              },
            }} />
            </section>
          </div>
        </LayoutAdmin>
      );
      
    }


  
};

export default UsersAll;
