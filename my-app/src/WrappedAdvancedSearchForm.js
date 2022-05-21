import {Form, Input, Col, Row, Button} from 'antd';

const WrappedAdvancedSearchForm = () => {

    const getFields = () => {
        const children = [];
        children.push(
            <Col span={8} key={1}>
                <Form.Item label={`Digit A`}>
                    <Input placeholder="placeholder"/>
                </Form.Item>
            </Col>,
            <Col span={8} key={2}>
                <Form.Item label={`Digit B`}>
                    <Input placeholder="placeholder"/>
                </Form.Item>
            </Col>,
            <Col span={8} key={3}>
                <Form.Item label={`Digit C`}>
                    <Input placeholder="placeholder"/>
                </Form.Item>
            </Col>,
        );

        return children;
    }

    return (
        <Form  className="ant-advanced-search-form">
            <Row gutter={24}>{getFields()}</Row>
            <Row>
                <Col span={24} style={{textAlign: 'right'}}>


                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                    <Button style={{marginLeft: 8}}>
                        Clear
                    </Button>

                </Col>
            </Row>
        </Form>
    );
}

export default WrappedAdvancedSearchForm;