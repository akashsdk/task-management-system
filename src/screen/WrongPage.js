import React from 'react';
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";

export default function WrongPage() {
  return (
    <div>
        <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">
        <Link to="/"> Go Back</Link>
    </Button>}
  />
    </div>
  )
}
