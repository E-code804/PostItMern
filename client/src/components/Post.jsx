import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import RemoveBtn from "./RemoveBtn";

const Post = ({ post }) => {
  const { _id, title, description, createdAt } = post;

  return (
    <div className="w-full my-[20px] mx-auto bg-white rounded p-[20px] shadow-md">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-primary">{title}</h1>

        <div className="flex">
          <Link to={`/editPost/${_id}`}>
            <HiPencilAlt size={24} />
          </Link>
          <RemoveBtn id={_id} />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <span className="text-lg mb-1">{description}</span>
        <span className="text-lg">
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
          })}
        </span>
      </div>
    </div>
  );
};

export default Post;
