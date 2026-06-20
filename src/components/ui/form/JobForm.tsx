import { Button, Form, Input, InputNumber, Select } from "antd";

type TProp = {
  form: any;
  loading: boolean;
  onFinish: any;
  record?: any;
};

const JobForm = ({ form, loading, onFinish, record }: TProp) => {
  return (
    <Form
      onFinish={onFinish}
      form={form}
      layout="vertical"
      initialValues={{
        ...record,
      }}
      className="space-y-5"
    >
      {/* ================= BASIC INFO ================= */}
      <div className="grid grid-cols-2 gap-5">
        <Form.Item
          name="title"
          label="Job Title"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Input size="large" placeholder="Enter job title" />
        </Form.Item>

        <Form.Item
          name="contact"
          label="Contact"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Input size="large" placeholder="Enter lead contact" />
        </Form.Item>
      </div>

      {/* ================= STUDENT INFO ================= */}
      <div className="grid grid-cols-2 gap-5">
        <Form.Item
          name="student_gender"
          label="Student Gender"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            size="large"
            placeholder="Select student gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="tutoring_type"
          label="Tutoring Type"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            size="large"
            placeholder="Select tutoring type"
            options={[
              { value: "home", label: "Home" },
              { value: "online", label: "Online" },
              { value: "batch", label: "Batch" },
            ]}
          />
        </Form.Item>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <Form.Item
          name="category"
          label="Category"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            size="large"
            placeholder="Select student gender"
            options={[{ value: "bangla", label: "Bangla" }]}
          />
        </Form.Item>

        <Form.Item
          name="course"
          label="Course"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            size="large"
            placeholder="Select Course"
            options={[
              { value: "home", label: "Home" },
              { value: "online", label: "Online" },
              { value: "batch", label: "Batch" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="number_of_students"
          label="Number of Students"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <InputNumber
            min={1}
            placeholder="Enter number of students"
            className="w-full!"
            size="large"
          />
        </Form.Item>
      </div>

      <Form.Item name="subjects" label="Subjects" rules={[{ required: true }]}>
        <Select
          size="large"
          mode="multiple"
          placeholder="Select subjects"
          options={[
            { value: "home", label: "Home" },
            { value: "online", label: "Online" },
            { value: "batch", label: "Batch" },
          ]}
        />
      </Form.Item>

      {/* ================= LOCATION ================= */}
      <div className="grid grid-cols-2 gap-5">
        <Form.Item
          name={["location", "country"]}
          label="Country"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select Country"
            size="large"
            options={[{ value: "bangladesh", label: "Bangladesh" }]}
          />
        </Form.Item>

        <Form.Item
          name={["location", "city"]}
          label="City"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select city"
            size="large"
            options={[
              { value: "dhaka", label: "Dhaka" },
              { value: "chittagong", label: "Chittagong" },
              { value: "khulna", label: "Khulna" },
            ]}
          />
        </Form.Item>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Form.Item
          name={["location", "area"]}
          label="Area"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select area"
            size="large"
            options={[
              { value: "khilgaon", label: "Khilgaon" },
              { value: "uttara", label: "Uttara" },
              { value: "mirpur", label: "Mirpur" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name={["location", "address"]}
          label="Address"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Input size="large" placeholder="Enter address" />
        </Form.Item>
      </div>

      {/* ================= SCHEDULE ================= */}
      <div className="grid grid-cols-3 gap-5">
        <Form.Item
          name="days_per_week"
          label="Days per Week"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <InputNumber min={1} max={7} className="w-full!" size="large" />
        </Form.Item>

        <Form.Item
          name="preferred_days"
          label="Preferred Days"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            mode="multiple"
            size="large"
            placeholder="Select preferred days"
            options={[
              { value: "sunday", label: "Sunday" },
              { value: "monday", label: "Monday" },
              { value: "tuesday", label: "Tuesday" },
              { value: "wednesday", label: "Wednesday" },
              { value: "thursday", label: "Thursday" },
              { value: "friday", label: "Friday" },
              { value: "saturday", label: "Saturday" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="preferred_time"
          label="Preferred Time"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            size="large"
            placeholder="Select preferred time"
            options={[
              { value: "morning", label: "Morning" },
              { value: "afternoon", label: "Afternoon" },
              { value: "evening", label: "Evening" },
            ]}
          />
        </Form.Item>
      </div>

      {/* ================= SALARY ================= */}
      <div className="grid grid-cols-3 gap-5">
        <Form.Item
          name={["salary", "min"]}
          label="Min Salary"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} className="w-full!" size="large" />
        </Form.Item>

        <Form.Item
          name={["salary", "max"]}
          label="Max Salary"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} className="w-full!" size="large" />
        </Form.Item>

        <Form.Item
          name={["salary", "expected"]}
          label="Expected Salary"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} className="w-full!" size="large" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Form.Item
          name={["salary", "type"]}
          label="Salary Type"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <Select
            size="large"
            placeholder="Select salary type"
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "per_class", label: "Per Class" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="tutor_experience_years"
          label="Experience (Years)"
          className="m-0!"
          rules={[{ required: true }]}
        >
          <InputNumber
            min={0}
            placeholder="Enter experience"
            className="w-full!"
            size="large"
          />
        </Form.Item>
      </div>

      {/* ================= TUTOR INFO ================= */}
      <div className="grid grid-cols-2 gap-5">
        <Form.Item
          name="tutor_gender"
          label="Tutor Gender"
          rules={[{ required: true }]}
          className="m-0!"
        >
          <Select
            size="large"
            placeholder="Select tutor gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="tutor_qualification"
          label="Tutor Qualification"
          className="m-0!"
        >
          <Input size="large" placeholder="University / College type" />
        </Form.Item>
      </div>

      {/* ================= SPECIAL REQUIREMENTS ================= */}
      <Form.Item name="special_requirements" label="Special Requirements">
        <Input.TextArea rows={3} placeholder="Any special requirements..." />
      </Form.Item>

      {/* ================= SUBMIT ================= */}
      <div className="flex justify-end">
        <Form.Item className="m-0!">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={loading}
          >
            {record && Object.keys(record).length > 0
              ? "Update Academy"
              : "Create Academy"}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default JobForm;
