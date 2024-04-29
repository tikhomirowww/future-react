import { FC, useState } from "react";
import Input from "../../ui/input/Input";

const Register: FC = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  console.log(Object.keys(user));

  return (
    <form>
      <h1>Register form</h1>
      {Object.keys(user).map((item, index) => (
        <div key={index}>
          <Input label={item} placeholder={item} name={item} />
        </div>
      ))}
    </form>
  );
};

export default Register;
