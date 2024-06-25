import Image from "next/image";

import { getEnvirontmentName } from "@/utils/Helpers";

// antd components example
import { Button } from "antd";
import { Card } from "antd";
import { Space } from "antd";

const environtmentName = getEnvirontmentName();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is GrowsIT NextJS Boilerplate</h1>
      <h2>Hello aws</h2>
      <Card
        title="Ant Design is Already installed"
        bordered={true}
        style={{ width: "auto" }}
      >
        <Space size="middle">
          <Button type="primary">Antd Button Primary</Button>
          <Button type="default">Antd Button Default</Button>
          <Button type="dashed">Antd Button Dashed</Button>
          <Button type="text">Antd Button Link</Button>
        </Space>
      </Card>

      <p>Your environment is {environtmentName}</p>
    </main>
  );
}
