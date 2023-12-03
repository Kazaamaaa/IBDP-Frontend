import darah from '../assets/img/darah.svg';
import jantung from '../assets/img/jantung.svg';
import bakteri from '../assets/img/bakteri.svg';
import donor from '../assets/img/donor.svg';
import CustomButton from '../components/Elements/Button/CostumButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../components/Elements/Card/NewsCard';
import Layout from '../components/Layouts/Layout';
import DonorCard from '../components/Elements/Card/DonorCard';
import { LandingPageData } from '../controllers/LandingPageData';
import { StoriesAllData } from '../controllers/StoriesData';
const LandingPage = () => {
  const navigate = useNavigate();
  const { landing} = LandingPageData()
  const {datatabel } = StoriesAllData()

  const latestStories = datatabel.slice(0,3);
  const handleToDetailStories = (id) => {
    navigate(`/forumberbagi/${id}`);
  };

  return (
    <Layout>
      <>
        <div className="mt-20 bg-red-200 my-10 mx-4 md:mx-10  rounded-2xl shadow-xl">
            <div className="container mx-auto grid grid-cols-12 w-full py-10 px-10 md:py-20">
                {landing.map((item, index) => (
                  <><div key={index} className="col-span-12 md:col-span-6 sm:col-span-12 flex flex-col justify-center items-center">
                    <video className="lg:w-full h-full md:w-3/4 sm:w-3/4  rounded-lg" controls>
                      <source src={item.video_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div><div className="col-span-12 md:col-span-6 sm:col-span-12 md:p-8 p-4 justify-center w-full h-full">
                      <p className="text-justify text-black text-lg md:text-lg sm:text-sm font-bold mt-5">
                        “{item.deskripsi}”
                      </p>
                      <div className="w-full md:w-72 mt-8">
                        <Link to={"/formdonor"}>
                          <CustomButton variant="filled" title="Ayo Donor" type="md" />
                        </Link>
                      </div>
                    </div></>
                  ))}
            </div>
        </div>
        <hr className="w-full hidden md:block" />

        <div className="mx-auto grid grid-cols-12 w-full py-20">
          <div className="col-span-12">
            <h1 className="text-center font-bold text-3xl">Apa saja manfaat Donor Darah?</h1>
          </div>

                <DonorCard
                    icon={darah}
                    description="Merangsang pertumbuhan sel darah baru"
                    />
                    <DonorCard
                    icon={jantung}
                    description="Menurunkan risiko serangan jantung (88%)"
                    />
                    <DonorCard
                    icon={bakteri}
                    description="Menurunkan risiko kanker (paru, liver, dll)"
                    />
                    <DonorCard
                    icon={donor}
                    description="Pemeriksaan kesehatan gratis"
                    />
        </div>

        <hr className="w-full hidden md:block" />

        <div className="mb-2">
            <div className="mx-auto grid grid-cols-12 w-full py-10 md:py-20">
                <div className="col-span-12">
                <p className='font-bold text-2xl mb-2 mt-4 text-center'>Cerita Baru</p>
                </div>
                <div className="col-span-12 flex flex-wrap justify-center">
                {latestStories.map((news) => (
                    <div key={news.id} className="w-full md:w-1/3  p-2">
                    <NewsCard
                        image={news.image}
                        date={news.createdAt}
                        description={news.content}
                        onClick={() => handleToDetailStories(news.item_id)}
                    />
                    </div>
                ))}
                </div>
                <div className="col-span-12 flex justify-center items-center">
                <div className='w-full max-w-sm mt-4 lg:mt-0'>
                    <Link to="/forumberbagi">
                    <CustomButton variant="filled" title="Baca Cerita Lainnya" type="lg" />
                    </Link>
                </div>
                </div>
            </div>
        </div>

      </>
    </Layout>
  );
};

export default LandingPage;
