import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTokenRefresh from '../../controllers/useToken';
import HomeAdmin from './components/Home';
import LayoutAdmin from './components/LayoutAdmin';

const Dashboard = () => { 
    const navigate = useNavigate()
    const {data, refreshToken} = useTokenRefresh()

    useEffect(() => {
        refreshToken()
    }, [])


    if (data.role !== 'admin') {
        return navigate('/')
    }

    return (
    <LayoutAdmin>
        <HomeAdmin />
    </LayoutAdmin>
    );
  };
  
  export default Dashboard;
  