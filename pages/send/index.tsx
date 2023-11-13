import React, { useRef } from "react";

type FormValues = {
  name: string;
  email: string;
};

const Index: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;

    const formData: FormValues = {
      name: name || "",
      email: email || "",
    };

    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" ref={emailRef} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Index;
