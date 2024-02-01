import { GrPrevious, GrNext } from "react-icons/gr";

function Pagination({ pages, setCurrentPage, currentPage, totalPages }) {
  return (
    <div>
      <div className="flex gap-2 float-right mb-9">
        <button
          className="bg-[#D9D9D9] rounded-md px-2"
          onClick={() => {
            const newval = currentPage - 1;
            if (newval > 0) {
              setCurrentPage(newval);
            } else {
              setCurrentPage(currentPage);
            }
          }}
          disabled={currentPage === 1}
        >
          <GrPrevious />
        </button>
        <div className="flex gap-3">
          {pages.map((page, index) => (
            <button
              key={index}
              className={`px-3 phone:px-2  rounded-[3px] font-Bold ${
                currentPage == page ? "bg-primary text-white" : "bg-[#D9D9D9]"
              } `}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className="bg-[#D9D9D9] p-2 rounded-md"
          onClick={() => {
            const newval = currentPage + 1;
            if (newval <= totalPages) {
              setCurrentPage(newval);
            } else {
              setCurrentPage(currentPage);
            }
          }}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
