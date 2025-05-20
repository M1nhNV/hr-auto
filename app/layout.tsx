'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, {useState} from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {Layout, Breadcrumb, Menu} from "antd";
import { BarChartOutlined, ProjectOutlined, SettingOutlined} from "@ant-design/icons";
const { Header, Content } = Layout;
import type { MenuProps } from 'antd';
import {redirect} from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Results',
    key: 'result',
    icon: <ProjectOutlined />,
  },
  {
    label: 'Report',
    key: 'report',
    icon: <BarChartOutlined />,
  },
  {
    label: 'Mission',
    key: 'missions',
    icon: <SettingOutlined />
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [current, setCurrent] = useState('results');
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    if (e.key === 'result') {
      return redirect('/');
    }

    redirect(e.key);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AntdRegistry>
          <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
              <div className="demo-logo" />
              <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Header>
            <Layout>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb
                  items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
                  style={{ margin: '16px 0' }}
                />
                <Content
                  style={{
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  { children }
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
