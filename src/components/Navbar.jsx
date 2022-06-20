import React from 'react';
import { Menu, Avatar, Typography } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const history = useHistory();

  const arr = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined />,
      path: '/',
    },
    {
      label: 'Cryptocurrencies',
      key: 'cryptocurrencies',
      icon: <FundOutlined />,
      path: '/cryptocurrencies',
    },
    {
      label: 'Exchanges',
      key: 'exchanges',
      icon: <MoneyCollectOutlined />,
      path: '/exchanges',
    },
    {
      label: 'News',
      key: 'news',
      icon: <BulbOutlined />,
      path: '/news',
    },
  ];

  const items = arr.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: item.label,
  }));

  const handleRouteChange = (e) => {
    const [path] = arr.filter((item) => item.key === e.key);
    history.push(path.path);
  };

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu
        theme='dark'
        items={items}
        onClick={(e) => handleRouteChange(e)}
      ></Menu>
    </div>
  );
};

export default Navbar;
