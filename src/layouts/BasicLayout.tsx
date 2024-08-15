import React from 'react';

import CustomTitleBar from '../components/custom-title-bar'

import { Outlet } from 'react-router-dom';



const App: React.FC = () => {
  const handlePageChange = (activeKey: string) => {
    console.log(activeKey);
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <div data-tauri-drag-regio={true} style={{paddingTop: '10px'}} >
        <CustomTitleBar onChange={handlePageChange} />
      </div>
      <div style={{
        background: '#f1f1f1',
        flex: 1
      }}>
        <Outlet />
      </div>
    </div>
    
  );
};

export default App;