import { useEffect } from "react";
import DashboardLayout from "../../layouts/Dashboard/Admin/Layout";
import { useAdminStore } from "../../context/adminStore";
import { useNavigate } from "react-router-dom";
import NewsCard from "../../componenets/LandingPage/NewsCard";
import { AiOutlineDelete } from "react-icons/ai";
import Axios from "../../middlewares/Axios";
import { Bounce, toast } from "react-toastify";
const News = () => {
  const news = useAdminStore((store) => store.News);
  const getNews = useAdminStore((store) => store.getNews);
  const navigate = useNavigate();

  useEffect(() => {
    getNews();
  }, []);

  const handleDelete = async (id) => {
    await Axios.delete("news/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("admin-token")}`,
      },
    })
      .then((res) => {
        toast.success("News deleted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        getNews();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">News</h1>
          <button
            className="py-2 px-4 bg-primary text-white rounded-md transition ease-in-out duration-300 hover:bg-white hover:text-primary hover:border hover:border-primary focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => {
              navigate("/admin/upload-news");
            }}
          >
            Add New
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {news?.map((news) => (
            <div key={news.id} className="grid gap-3">
              <NewsCard
                date={news.date.slice(0, 10)}
                description={news.description}
                img={news.thumbnail_name}
              />
              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(news.id)}
                  className="py-2 px-6 flex bg-red-500 items-center text-white rounded-md transition ease-in-out duration-300 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <AiOutlineDelete size={20} className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default News;
