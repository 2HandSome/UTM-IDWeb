import {Form, Input, Col, Row, Button} from 'antd';
import {useState} from "react";

const WrappedAdvancedSearchForm = () => {
    const [formValueA, setFormValueA] = useState({});
    const [formValueB, setFormValueB] = useState({});
    const [formValueC, setFormValueC] = useState({});
    const [form] = Form.useForm();

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
                    <Button type="primary" htmlType="submit">
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