import React from "react";
import { Form, Input, Button } from "antd";

const MyForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const regex = /^[0-9]{10}$/;

  return (
    <div className="h-screen">
      <div className=" h-1/2 bg-emerald-500 text-center justify-center p-5 overflow-clip ">
        <p className="text-center justify-center  ">
          <h1 className=" text-6xl font-bold">About us</h1> <br />{" "}
          <p className=" text-xl max-md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            accusamus. Eaque laudantium ea expedita possimus doloribus illo
            distinctio temporibus quod deleniti, nostrum perferendis earum
            quidem. Iste sunt sit velit veniam?Lorem, ipsum dolor sit amet
            consectetur adipisicindolor, officia blanditiis est vero. Lorem
            ipsum dolor sit amet consectetur, adipisicilor sit amet, consectetur
            adipisicing elit. Ducimus, necessitatibus. Vitae et vero quibusdam
            eligendi placeat eum recusandae sit illo aliquid, quod incidunt!
            Dicta dignissimos quisquam perferendis laudantium architecto rem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            quibusdam amet voluptate aperiam consectetur optio obcaecati
            corporis fugit eligendi blanditiis reprehenderit tempore quas
            doloremque iusto delectus molestiae ex quae similique! Recusandae
            pariatur ut, dolorum architecto similique mollitia distinctio
            consequuntur facilis odit eaque?
          </p>
        </p>
      </div>
      <div className="h-1/2 flex items-center justify-center bg-black ">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="p-9 rounded shadow-lg bg-sky-950 w-full  items-center justify-center text-center  max-lg:w-full"
        >
          <h1 className="text-3xl font-semibold mb-6 text-white">Contact Us</h1>
          {/* <div className="flex">
            <div className="flex flex-1"></div>
            <div className="flex flex-1"></div>
            <div></div>
          </div> */}

          <Form.Item
            className="p-2 "
            name="Name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              placeholder="Your Name"
              className=" p-2 w-96 border rounded max-md:w-full"
            />
          </Form.Item>
          <Form.Item
            className="p-2 "
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input
              placeholder="Your Email"
              className=" p-2 w-96  border rounded max-md:w-full"
            />
          </Form.Item>
          <Form.Item
            className="p-2 "
            name="mobile"
            rules={[
              { required: true, message: "Please input your mobile number!" },
              { pattern: regex, message: "Please enter 10 Digit number" },
            ]}
          >
            <Input
              type="number"
              placeholder=" Mobile Number"
              className=" p-2 w-96 border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none max-md:w-full "
              //   oninput="this.value = Math.abs(this.value)"
              //   style={{}}
            />
          </Form.Item>
          <Form.Item
            className="p-2 "
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <Input.TextArea
              placeholder="Your Message"
              className=" p-2 w-96 border rounded max-md:w-full"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className=" bg-blue-500 hover:bg-blue-600 text-white rounded w-96 max-md:w-full"
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
