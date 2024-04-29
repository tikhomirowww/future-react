import { ChangeEvent, FC, FormEvent, useState } from "react";
import Input from "../../ui/input/Input";
import { UserType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { registerUser } from "../../store/actions/users.actions";
import { useNavigate } from "react-router-dom";

const Register: FC = () => {
  const [user, setUser] = useState<UserType>({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    for (let key in user) {
      if (!user[key]) {
        alert("Some inputs are empty!");
        return;
      }
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
            value={user[item]}
            label={item}
            placeholder={item}
            name={item}
          />
        </div>
      ))}
      <button>Sign up</button>
    </form>
  );
};

export default Register;
