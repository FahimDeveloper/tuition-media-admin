import { Button, Form, Input } from "antd";

type TProp = {
  form: any;
  loading: boolean;
  onFinish: any;
  record?: any;
};
const LeadForm = ({ form, loading, onFinish, record }: TProp) => {
  return (
    <Form
      onFinish={onFinish}
      form={form}
      layout="vertical"
      initialValues={{}}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-5"></div>
      <Form.Item
        className="m-0"
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={4} placeholder="Enter a small description" />
      </Form.Item>
      <div className="flex justify-end">
        <Form.Item>
          <Button className="primary-btn" htmlType="submit" loading={loading}>
            {record && Object.keys(record).length > 0
              ? "Update Academy"
              : "Create Academy"}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default LeadForm;
