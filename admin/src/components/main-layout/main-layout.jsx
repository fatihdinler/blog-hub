import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { HiOutlineDesktopComputer, HiOutlineShoppingCart, HiUser } from 'react-icons/hi'
import { TbBrand4Chan } from 'react-icons/tb'
import { AiOutlineBgColors } from 'react-icons/ai'
import { HiClipboardList } from 'react-icons/hi'
import { LiaBlogSolid } from 'react-icons/lia'
import { MdProductionQuantityLimits, MdOutlineCategory } from 'react-icons/md'
import { ImBlog } from 'react-icons/im'
import { SiRoamresearch } from 'react-icons/si'
import { Layout, Menu, Button, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const { Header, Sider, Content } = Layout

const MainLayout = () => {
  const navigate = useNavigate()
  
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>DS</span>
            <span className='lg-logo'>DigiShop</span>
          </h2>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            if (key === 'signout') {

            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <HiOutlineDesktopComputer className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <HiUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <HiOutlineShoppingCart className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <MdProductionQuantityLimits className='fs-4' />,
                  label: 'Add Product'
                },
                {
                  key: 'product-list',
                  icon: <MdProductionQuantityLimits className='fs-4' />,
                  label: 'Product List'
                },
                {
                  key: 'brand',
                  icon: <TbBrand4Chan className='fs-4' />,
                  label: 'Brand'
                },
                {
                  key: 'brand-list',
                  icon: <TbBrand4Chan className='fs-4' />,
                  label: 'Brand List'
                },
                {
                  key: 'category',
                  icon: <MdOutlineCategory className='fs-4' />,
                  label: 'Category'
                },
                {
                  key: 'category-list',
                  icon: <MdOutlineCategory className='fs-4' />,
                  label: 'Category List'
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color'
                },
                {
                  key: 'color-list',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color List'
                },
              ]
            },
            {
              key: 'orders',
              icon: <HiClipboardList className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <LiaBlogSolid className='fs-4' />,
              label: 'Blog',
              children: [
                {
                  key: 'blog',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <LiaBlogSolid className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <LiaBlogSolid className='fs-4' />,
                  label: 'Blog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <SiRoamresearch className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className='d-flex justify-content-between'>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              alignSelf: 'center'
            }}
          />
          <div className='d-flex gap-3 align-items-center'>
            <div></div>
            <div className='d-flex gap-3 align-items-center mx-4'>
              <div>
                <img
                  width={32}
                  height={32}
                  className='person-logo mb-0' 
                  src='https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D'
                  alt=''
                />
              </div>
              <div>
                <h5 className='mb-0'>Fatih Dinler.</h5>
                <p className='mb-0'>fatihdinler458@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default MainLayout