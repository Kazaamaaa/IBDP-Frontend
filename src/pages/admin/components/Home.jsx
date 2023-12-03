import { ArtikelAllData } from "../../../controllers/ArtikelData";
import { GoldarAllData } from "../../../controllers/GolonganDarahData";
import { PendonorAllData } from "../../../controllers/PendonorData";
import { StoriesAllData } from "../../../controllers/StoriesData";

const HomeAdmin = () => {
  const { countTotalData } = PendonorAllData()
  const { ArtikelData } = ArtikelAllData()
  const { StoriesData } = StoriesAllData()
  const { GoldarData } = GoldarAllData()

  const totalDataPendonor = countTotalData();
  const totalDatastories = StoriesData();
  const totalDatagoldar = GoldarData();
  const totalDataartikel = ArtikelData();

    return(
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div className="bg-red-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-300 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-red-300 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">{totalDataPendonor}</p>
              <p>Jumlah Pendonor</p>
            </div>
          </div>
          <div className="bg-red-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-300 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg  width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9995 19.3701C10.2095 19.3701 8.41945 18.6901 7.04945 17.3201C4.31945 14.5901 4.31945 10.1501 7.04945 7.42006C9.77945 4.69006 14.2195 4.69006 16.9495 7.42006C19.6795 10.1501 19.6795 14.5901 16.9495 17.3201C15.5795 18.6901 13.7895 19.3701 11.9995 19.3701ZM11.9995 6.87007C10.5895 6.87007 9.17945 7.41006 8.10945 8.48006C5.96945 10.6301 5.96945 14.1101 8.10945 16.2601C10.2595 18.4101 13.7495 18.4001 15.8895 16.2601C18.0295 14.1101 18.0295 10.6301 15.8895 8.48006C14.8195 7.41006 13.4095 6.87007 11.9995 6.87007Z" fill="#000000"/><path d="M8.24906 22.3899C8.15906 22.3899 8.05906 22.3699 7.96906 22.3399C5.71906 21.4399 3.89905 19.8499 2.67905 17.7499C1.49905 15.6999 1.02905 13.3799 1.33905 11.0199C1.38905 10.6099 1.76905 10.3199 2.17905 10.3699C2.58905 10.4199 2.87904 10.7999 2.82904 11.2099C2.56904 13.2299 2.96907 15.2299 3.97907 16.9899C5.01907 18.7899 6.58905 20.1599 8.51905 20.9299C8.89905 21.0899 9.08906 21.5198 8.93906 21.9098C8.82906 22.2098 8.53906 22.3899 8.24906 22.3899Z" fill="#000000"/><path d="M5.84961 5.22986C5.62961 5.22986 5.40961 5.12988 5.25961 4.93988C4.99961 4.60988 5.05962 4.13989 5.38962 3.88989C7.29962 2.39989 9.57961 1.60986 11.9996 1.60986C14.3596 1.60986 16.6096 2.36988 18.4996 3.80988C18.8296 4.05988 18.8896 4.52986 18.6396 4.85986C18.3896 5.18986 17.9196 5.24988 17.5896 4.99988C15.9696 3.75988 14.0396 3.10986 11.9996 3.10986C9.91961 3.10986 7.9496 3.78989 6.3096 5.06989C6.1696 5.17989 6.00961 5.22986 5.84961 5.22986Z" fill="#000000"/><path d="M15.7507 22.3901C15.4507 22.3901 15.1707 22.2101 15.0507 21.9201C14.9007 21.5401 15.0807 21.1001 15.4707 20.9401C17.4007 20.1601 18.9707 18.8001 20.0107 17.0001C21.0307 15.2401 21.4307 13.2401 21.1607 11.2201C21.1107 10.8101 21.4007 10.4301 21.8107 10.3801C22.2107 10.3301 22.6007 10.6201 22.6507 11.0301C22.9507 13.3801 22.4907 15.7101 21.3107 17.7601C20.1007 19.8601 18.2707 21.4401 16.0207 22.3501C15.9407 22.3701 15.8507 22.3901 15.7507 22.3901Z" fill="#000000"/></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">{totalDatastories}</p>
              <p>Jumlah Cerita</p>
            </div>
          </div>
          <div className="bg-red-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-300 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg fill="#000000" width={30} height={30} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-22.016h-4v-1.984h-4v-2.016h-24v26.016zM4 26.016v-22.016h16v24h-13.984q-0.832 0-1.44-0.576t-0.576-1.408zM6.016 26.016h5.984v-2.016h-5.984v2.016zM6.016 22.016h8v-2.016h-8v2.016zM6.016 18.016h5.984v-2.016h-5.984v2.016zM6.016 14.016h12v-8h-12v8zM14.016 18.016h4v-2.016h-4v2.016zM16 22.016h2.016v-2.016h-2.016v2.016zM24 25.024v-21.024h2.016v21.024q0 0.384 0.288 0.704t0.704 0.288 0.704-0.288 0.288-0.704v-19.008h2.016v19.008q0 1.248-0.896 2.112t-2.112 0.864-2.144-0.864-0.864-2.112z"></path>
                </svg>            
            </div>
            <div className="text-right">
              <p className="text-2xl">{totalDataartikel}</p>
              <p>Jumlah Artikel</p>
            </div>
          </div>
          <div className="bg-red-400 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-red-300 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg width={30} height={30} fill="#000000" viewBox="0 0 24 24" id="blood-drop" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line">
                <path id="secondary" d="M12,16c0-2.15.87-3,2.6-5.7C13.6,8.64,12.07,6.63,10,3c-4,7-6,8-6,12a6,6,0,0,0,10,4.45A4,4,0,0,1,12,16Z" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2'}}></path>
                <path id="primary" d="M14,19.45A6,6,0,0,1,4,15c0-4,2-5,6-12,2.08,3.63,3.61,5.65,4.61,7.3" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2'}}></path>
                <path id="primary-2" data-name="primary" d="M16,8c-2.67,4.67-4,5.33-4,8a4,4,0,0,0,8,0C20,13.33,18.67,12.67,16,8Z" style={{fill: 'none', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2'}}></path></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">{totalDatagoldar}</p>
              <p>Stok Darah</p>
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default HomeAdmin