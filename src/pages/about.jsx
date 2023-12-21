import Layout from "../components/Layouts/Layout";
import teamData from "./TeamData";
import AboutCard from "../components/Elements/Card/AboutCard";
import km from "../assets/img/kmk.svg";
import infinite from "../assets/img/infinite.svg";

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title }) => (
  <div className="text-center">
    <p className="font-bold text-2xl mb-4">{title}</p>
  </div>
);

const AboutUs = () => {
  return (
    <Layout>
      <div className="container mx-auto px-72 mt-8">
        <SectionTitle title="Tentang Kami" />
        <div>
          <p className="text-justify">
            Integrated Blood Donation Platform (IBDP) adalah sebuah wadah inovatif yang didedikasikan untuk mempermudah masyarakat dalam berkontribusi pada kegiatan donor darah. Kami menyediakan platform yang komprehensif untuk membantu
            Anda mengetahui jadwal, lokasi, dan syarat-syarat donor darah dengan mudah, sembari memberikan pengalaman berharga melalui beragam konten edukasi. IBDP percaya bahwa setiap tetes darah memiliki kekuatan untuk menyelamatkan
            hidup. Serta bertujuan menciptakan pengalaman donor darah yang positif dan berdaya guna. Dengan akses mudah ke informasi, formulir donor yang praktis, dan konten edukatif yang bermakna, kami berharap dapat membangun kesadaran
            masyarakat tentang urgensi dan dampak positif dari donor darah. Bergabunglah dengan kami di IBDP dan jadilah bagian dari gerakan yang memberikan kehidupan melalui cinta dan kepedulian.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-72 mt-8">
        <SectionTitle title="Tentang Pengembang" />
        <div className="flex flex-wrap gap-10">
          {teamData.map((member) => (
            <AboutCard key={member.id} image={member.image} name={member.name} position={member.position} facebookLink={member.facebookLink} instagramLink={member.instagramLink} whatsappLink={member.whatsappLink} />
          ))}
        </div>
      </div>

      <div className="max-w-screen-md mx-auto px-8 mt-8 text-center">
        <SectionTitle title="Mitra Kerja" />
        <div className="flex justify-center items-center">
          <img src={km} alt="" className="pt-5" />
          <img src={infinite} alt="" className="pt-5 h-40 w-40" />
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
