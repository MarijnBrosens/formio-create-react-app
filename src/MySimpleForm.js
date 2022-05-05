import React, { useState } from "react";
import { Form } from "@formio/react";
import formData from "./formData";

export default function CustomForm() {
  const [isReady, setIsReady] = useState(false);

  const onSubmitClicked = (submission) => {
    console.log("data from form", submission.data);
  };

  const onFormReady = () => setIsReady(true);

  return (
    <>
      {isReady ? "Form ready" : "Loading..."}
      <Form
        form={formData}
        onSubmit={onSubmitClicked}
        formReady={onFormReady}
      />
    </>
  );
}
