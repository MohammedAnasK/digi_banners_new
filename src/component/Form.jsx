import React from 'react';
import { Form, Input, Button } from 'antd';

const MyForm = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };

    const regex = /^[0-9]{10}$/;

    return (

        <div className="flex items-center justify-center">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="p-9 rounded shadow-lg bg-gray-50"
            >
                <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

                <Form.Item
                    className='p-2'
                    name="Name"
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input placeholder="Your Name" className="w-96 p-2 border rounded" />
                </Form.Item>

                <Form.Item
                    className='p-2'
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email address!' },
                    ]}
                >
                    <Input placeholder="Your Email" className="w-96 p-2 border rounded" />
                </Form.Item>

                <Form.Item
                    className='p-2'
                    name="mobile"
                    rules={[
                        { required: true, message: 'Please input your mobile number!'} ,
                    { pattern:regex, message: 'Please enter 10 Digit number' },
                ]}
                >
                    <Input type='number' placeholder=" Mobile Number" className="w-96 p-2 border rounded
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                </Form.Item>

                <Form.Item
                    className='p-2'
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                >
                    <Input.TextArea placeholder="Your Message" className="w-full p-2 border rounded" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-96 bg-blue-500 hover:bg-blue-600 text-white rounded">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default MyForm;
