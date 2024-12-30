import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "./card.css";
import { toast } from "react-toastify"; // Make sure this is imported
import "react-toastify/dist/ReactToastify.css";
function Card({ course, likedcourse, setlikecourse }) {
  function handler() {
    if (likedcourse.includes(course.id)) {
      setlikecourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning(course.title);
    } else {
      if (likedcourse.length === 0) {
        setlikecourse([course.id]);
      } else {
        setlikecourse((prev) => [...prev, course.id]);
      }

      toast.success(course.title);
    }
  }
  return (
    <div>
      <div className="main">
        <div>
          <img src={course.image.url} />
        </div>
        <div className="heart">
          <button onClick={handler}>
            {likedcourse.includes(course.id) ? (
              <FcLike fontSize="1.4rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.4rem" />
            )}
          </button>
        </div>
        <div>
          <p className="title">{course.title}</p>
          <p className="des">{course.description.length>100?(course.description.substr(0,100))+"...":(course.description)}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
