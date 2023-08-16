import { HiOutlineTrash } from "react-icons/hi";
import { url } from "../backendURL";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePostContext } from "../hooks/usePostContext";

const RemoveBtn = ({ id }) => {
  const { dispatch } = usePostContext();
  const { user } = useAuthContext();
  const removePost = async () => {
    if (!user) {
      window.alert("You must be logged in to remove a post");
      return;
    }
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirm) {
      const response = await fetch(`${url}/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        dispatch({ type: "REMOVE_POST", payload: id });
      }
    }
  };
  return (
    <div className="text-red-500 ml-1 cursor-pointer" onClick={removePost}>
      <HiOutlineTrash size={24} />
    </div>
  );
};

export default RemoveBtn;
