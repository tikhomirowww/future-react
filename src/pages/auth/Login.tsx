import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Input from "../../ui/input/Input";
import { LoginType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { getCurrentUser, getUsers } from "../../store/actions/users.actions";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";

const Login: FC = () => {
  const [user, setUser] = useState<LoginType>({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }

    const foundUser = users.find((item) => item.email === user.email);

    console.log(foundUser);
    if (!foundUser) {
      alert("No user!");
      return;
    }

    if (foundUser.password !== user.password) {
      alert("Wrong password!");
      return;
    }

    localStorage.setItem("currentUser", foundUser.id!.toString());
    dispatch(getCurrentUser(foundUser.id!.toString()));
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit} className="forma">
      <h1>Login form</h1>
      {Object.keys(user).map((item, index) => (
        <div key={index}>
          <Input
            onChange={handleChange}
            value={user[item]}
            label={item}
            placeholder={item}
            name={item}
          />
        </div>
      ))}
      <Button>Sign in</Button>
    </form>
  );
};

export default Login;
