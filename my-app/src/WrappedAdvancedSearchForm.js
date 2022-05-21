import React, {useEffect, useState} from 'react';
import {Form, Row, Col, Input, Button, notification} from 'antd';
import axios from "axios"
import {SmileOutlined} from '@ant-design/icons';

const WrappedAdvancedSearchForm = () => {
    const [formValueA, setFormValueA] = useState({});
    const [formValueB, setFormValueB] = useState({});
    const [formValueC, setFormValueC] = useState({});
    const [form] = Form.useForm();

    useEffect(() => {
        form.validateFields();
    }, [formValueA, formValueB, formValueC]);

    const saveDigits = () => {
        const request = []
        request.push(formValueA)
        request.push(formValueB)
        request.push(formValueC)
        axios.post("http://localhost:8080/digit/new", request).then(() => {
            notification.open({
                message: 'Success',
                icon: <SmileOutlined style={{color: '#108ee9'}}/>,
                duration: 1
            })
        })
    }

    return (
        <Form form={form}
              name="advanced_search"
              className="ant-advanced-search-form">
            <Row gutter={24}>
                <Col span={8} key={1}>
                    <Form.Item
                        label={`Digit A`}
                        name={'Digit A'}
                        rules={[
                            {
                                required: true,
                                message: 'Input digits!',
                            },
                        ]}>
                        <Input placeholder="placeholder" onChange={(event) => {
                            setFormValueA({
                                nameOfDigit: "A",
                                digit: event.target.value
                            });
                        }}/>
                    </Form.Item>
                </Col>
                <Col span={8} key={2}>
                    <Form.Item
                        label={`Digit B`}
                        name={`Digit B`}
                        rules={[
                            {
                                required: true,
                                message: 'Input digits!',
                            },
                        ]}>
                        < Input placeholder="placeholder" onChange={(event) => {
                            setFormValueB({
                                nameOfDigit: "B",
                                digit: event.target.value
                            });
                        }}/>
                    </Form.Item>
                </Col>
                <Col span={8} key={3}>
                    <Form.Item
                        label={`Digit C`}
                        name={`Digit C`}
                        rules={[
                            {
                                required: true,
                                message: 'Input digits!',
                            },
                        ]}>
                        <Input placeholder="placeholder" onChange={(event) => {
                            setFormValueC({
                                nameOfDigit: "C",
                                digit: event.target.value
                            });
                        }}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{textAlign: 'right'}}>
                    <Button type="primary" htmlType="submit" onClick={saveDigits}>
                        Calculate
                    </Button>
                    <Button
                        style={{marginLeft: 8}}
                        onClick={() => {
                            form.resetFields();
                        }}>
                        Clear
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default WrappedAdvancedSearchForm;