'use client';
import { useState } from "react";
import { Button } from "@repo/ui/button";
import { DesignInput, Label } from "@repo/ui/input";

interface SignInProps {
  onSignIn: (data: any) => void;
}

export const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const [type, setType] = useState<"signin" | "login">("signin");
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onSignIn(formData);
  };

  const switchType = (newType: "signin" | "login") => {
    setType(newType);
    setFormError(null); // Clear errors when switching forms
    setFormData({
      username: "",
      phone: "",
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-5/6 h-5/6 p-12 relative bg-[url('/images/dargonimage.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-2 border-r border-gray-400">
        <div className="text-white w-5/6 flex flex-col justify-center items-center">
          <div className="font-semibold">{type === "signin" ? "Sign In" : "Login"}</div>
          <div className="font-semibold">
            {type === "signin" ? (
              <>
                If you already have an account?{" "}
                <span
                  className="text-gray-300 cursor-pointer pl-2 underline"
                  onClick={() => switchType("login")}
                >
                  Log In
                </span>
              </>
            ) : (
              <>
                Need to create an account?{" "}
                <span
                  className="text-gray-300 cursor-pointer pl-2 underline"
                  onClick={() => switchType("signin")}
                >
                  Sign In
                </span>
              </>
            )}
          </div>
        </div>
        <div className="text-white w-5/6 border-gray-400 border rounded-xl p-6 flex flex-col gap-5">
          {type === "signin" && (
            <>
              <div>
                <Label label="Username" name="username" htmlFor="UserName" className="text-white" />
                <DesignInput
                  type="text"
                  name="username"
                  id="UserName"
                  placeholder="Harry Potter"
                  className="text-white w-full"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label label="Phone" name="phone" htmlFor="Phone" className="text-white" />
                <DesignInput
                  type="text"
                  name="phone"
                  placeholder="1234567891"
                  id="Phone"
                  className="text-white w-full"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label label="Email" name="email" htmlFor="Email" className="text-white" />
                <DesignInput
                  type="email"
                  name="email"
                  id="Email"
                  className="text-white w-full"
                  placeholder="harrypotter@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label label="Password" name="password" htmlFor="Password" className="text-white" />
                <DesignInput
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="1Aasfd@d"
                  className="text-white w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          {type === "login" && (
            <>
              <div>
                <Label label="Email" name="email" htmlFor="Email" className="text-white" />
                <DesignInput
                  type="email"
                  name="email"
                  id="Email"
                  className="text-white w-full"
                  placeholder="harrypotter@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label label="Password" name="password" htmlFor="Password" className="text-white" />
                <DesignInput
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="1Aasfd@d"
                  className="text-white w-full"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          {formError && <div className="text-red-500 text-sm mt-1">{formError}</div>}
          <div>
            <Button className="w-[150px]" title={type === "signin" ? "Sign In" : "Login"} />
          </div>
        </div>
      </div>
    </form>
  );
};
