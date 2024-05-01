import { ChangeEvent, FC, FormEvent, useState } from "react";
import Input from "../../ui/input/Input";
import { UserType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { getUsers, registerUser } from "../../store/actions/users.actions";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import { Sign } from "crypto";

const Register: FC = () => {
  const [user, setUser] = useState<UserType>({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }

    if (user.password.length <= 6) {
      alert("Min length of password is 6 symbols");
      return;
    }

    if (user.password !== user.password_confirm) {
      alert("Passowrds do not match!");
      return;
    }

    dispatch(getUsers());
    const inDb = users.some((item) => item.email === user.email);
    if (inDb) {
      alert("This email is already exists");
      return;
    }

    dispatch(registerUser(user));
    setUser({
      name: "",
      phone: "",
      email: "",
      password: "",
      password_confirm: "",
    });
    navigate("/");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register form</h1>
      {Object.keys(user).map((item, index) => (
        <div key={index}>
          <Input
            onChange={handleChange}
            value={user[item]!.toString()}
            label={item}
            placeholder={item}
            name={item}
          />
        </div>
      ))}
      <Button label="Sign in" />
    </form>
  );
};

export default Register;
