'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {Layout, Breadcrumb, Menu, Space} from "antd";
import Link from "next/link";
const { Header, Content } = Layout;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AntdRegistry>
          <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
              <div className="demo-logo" />
              <Space>
                <Link href="/">Results</Link>
                <Link href="/missions">Mission</Link>
              </Space>
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
