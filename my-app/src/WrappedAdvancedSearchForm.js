import {Form, Input, Col, Row, Button, notification} from 'antd';
import {useState} from "react";
import axios from "axios"
import {SmileOutlined} from '@ant-design/icons';

const WrappedAdvancedSearchForm = () => {
    const [formValueA, setFormValueA] = useState({});
    const [formValueB, setFormValueB] = useState({});
    const [formValueC, setFormValueC] = useState({});
    const [form] = Form.useForm();

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
              className="ant-advanced-search-form">
            <Row gutter={24}>
                <Col span={8} key={1}>
                    <Form.Item label={`Digit A`}>
                        <Input placeholder="placeholder" onChange={(event) => {
                            setFormValueA({
                                nameOfDigit: "A",
                                digit: event.target.value
                            });
                        }}/>
                    </Form.Item>
                </Col>
                <Col span={8} key={2}>
                    <Form.Item label={`Digit B`}>
                        <Input placeholder="placeholder" onChange={(event) => {
                            setFormValueB({
                                nameOfDigit: "B",
                                digit: event.target.value
                            });
                        }}/>
                    </Form.Item>
                </Col>
                <Col span={8} key={3}>
                    <Form.Item label={`Digit C`}>
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
                        onClick={() => form.resetFields()}>
                        Clear
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default WrappedAdvancedSearchForm;