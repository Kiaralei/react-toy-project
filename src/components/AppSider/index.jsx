import React,{useState} from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const AppSider = () => {
  const [state,setState] = useState('1');
  function handleClick(e) {
    console.log('click ', e);
    setState(e.current);
  };

  function notinMain (){
    console.log("NOPPpppe");
  }
  function trythis() {
    console.log('click ');
  };
  function inMain(){
    console.log('inMain ');
  }

  return (
    <Menu onClick={handleClick}
        style={{ width: 240 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={state}
        mode="inline"
      >
      <SubMenu key="sub1" title={<span><span>导航一</span></span>}>
        <MenuItemGroup title="分组1">
          <Menu.Item key="1">选项1</Menu.Item>
          <Menu.Item key="2">选项2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="分组2">
          <Menu.Item key="3">选项3</Menu.Item>
          <Menu.Item key="4">选项4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <SubMenu key="sub2" title={<span><span>导航二</span></span>}>
        <Menu.Item key="5">选项5</Menu.Item>
        <Menu.Item key="6">选项6</Menu.Item>
        <SubMenu key="sub3" title="三级导航">
          <Menu.Item key="7">选项7</Menu.Item>
          <Menu.Item key="8">选项8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" title={<span><span>导航三</span></span>}>
        <Menu.Item key="9">选项9</Menu.Item>
        <Menu.Item key="10">选项10</Menu.Item>
        <Menu.Item key="11">选项11</Menu.Item>
        <Menu.Item key="12">选项12</Menu.Item>
      </SubMenu>
    </Menu>
  )
}