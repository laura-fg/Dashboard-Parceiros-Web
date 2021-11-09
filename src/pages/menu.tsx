
import ReactDOM from 'react-dom';

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const SidebarLeft = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
  

    
    return (
        <div>
            <div className="card">
        
                <Sidebar style={{background:"#80CBC4"}} visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
               <div>
                <h3 style={{ padding: "15px",  color:"#607D8B", textAlign:"center"}}> <i className="pi pi-th-large" style={{'fontSize': '1.5em', 'padding': "10px"}}></i> CONSULTE PARCEIROS</h3>
                <h3 style={{ padding: "15px",  color:"#607D8B", textAlign:"center"}}> <i className="pi pi-chart-bar" style={{'fontSize': '1.5em', 'padding': "10px"}}></i> ESTATÍSTICAS</h3>
           </div>
             <div> 
                 <button className="btn-login"> <i className="pi pi-sign-in" style={{'fontSize': '1em', 'padding': "10px"}}></i> LOGIN</button> </div>
                </Sidebar>

    

                <Button icon="pi pi-bars" style={{background:"#607D8B", border:"1px solid #607D8B"}} onClick={() => setVisibleLeft(true)} className="p-mr-2" />
                
            </div>
        </div>
    )
}
                
export default SidebarLeft;