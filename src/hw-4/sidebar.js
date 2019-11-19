import React from 'react';

import SidebarItem from './sidebar-item';
import Button from './button';
import Input from './input';

const Sidebar = () => {
  return (
      <nav className="nav flex-column d-inline-flex">
        <SidebarItem>Important</SidebarItem>
        <SidebarItem>Done</SidebarItem>
        <SidebarItem>Active</SidebarItem>
        <h5></h5>
        <SidebarItem>Movies</SidebarItem>
        <SidebarItem>Buy</SidebarItem>
        {
          false ? <Input /> : <Button>New group</Button>
        }
      </nav>
  );
};

export default Sidebar;