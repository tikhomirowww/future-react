import { ChangeEvent, FC, FormEvent, useState } from "react";
import Input from "../../ui/input/Input";
import { CardData, UserType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import moment from "moment";
import { addPost } from "../../store/actions/posts.actions";

const AddPost: FC = () => {
  const [post, setPost] = useState<CardData>({
    description: "",
    image: "",
    tag: "",
    title: "",
  });

  const { currentUser } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let key in post) {
      if (!post[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }
    console.log({
      ...post,
      time: moment(moment().format("YYYY-MM-DD")).format("LL"),
    });

    let newPost = {
      ...post,
      time: moment(moment().format("YYYY-MM-DD")).format("LL"),
    };

    dispatch(
      addPost({
        post: newPost,
        userId: currentUser?.id!,
      })
    );

    setPost({
      description: "",
      image: "",
      tag: "",
      title: "",
    });
    navigate("/profile");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  }

  //   console.log(moment(moment().format("YYYY-MM-DD")).format("LL"));

  return (
    <form onSubmit={handleSubmit}>
      <h1>New post</h1>
      {Object.keys(post).map((item, index) => (
        <div key={index}>
          <Input
            onChange={handleChange}
            value={post[item]!.toString()}
            label={item}
            placeholder={item}
            name={item}
          />
        </div>
      ))}
      <Button>Create post</Button>
    </form>
  );
};

export default AddPost;
