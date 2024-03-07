import React from "react";
import { Form, Input, Button } from "antd";
import About from "./About";

const MyForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const regex = /^[0-9]{10}$/;

  return (
    <div className="h-screen flex flex-col">
      <div className="h-1/2 bg-emerald-600 text-center justify-center p-5 overflow-clip">
        <About />
      </div>
      <div className="h-1/2 flex items-center justify-center bg-black">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="p-7 rounded shadow-lg bg-sky-950 w-full max-lg:w-full"
        >
          <h1 className="text-4xl  font-bold mb-6 text-white">Contact Us</h1>

          <Form.Item
            className="mb-4"
            name="Name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Your Name"
              className="p-2 w-96 max-md:w-full"
            />
          </Form.Item>
          <Form.Item
            className="mb-4"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input
              placeholder="Your Email"
              className="p-2 w-96 max-md:w-full"
            />
          </Form.Item>
          <Form.Item
            className="mb-4"
            name="mobile"
            rules={[
              { required: true, message: "Please input your mobile number!" },
              { pattern: regex, message: "Please enter 10 Digit number" },
            ]}
          >
            <Input
              type="number"
              placeholder="Mobile Number"
              className="p-2 w-96 max-md:w-full remove-arrow"
            />
          </Form.Item>
          <Form.Item
            className="mb-4"
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <Input.TextArea
              placeholder="Your Message"
              className="p-4 w-96 max-md:w-full"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded w-96 max-md:w-full"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MyForm;
