import React,{useState} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductInf from './Inf/ProductInf'
import FacialInf from './Inf/FacialInf'
import CorporalInf from './Inf/CorporalInf'
import Search from './assets/Search'



export default function UpTabs() {
    const [key, setKey] = useState('productos');

    return (
      <>
      <div style={{display:"flex",flexDirection:"column", alignItems:"center", marginTop:"1%"}} >
        <Tabs
        variant="pills"
        id="productos-y-servicios"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="productos" title="Productos">
          <ProductInf />
        </Tab>
        <Tab eventKey="faciales" title="Faciales">
          <FacialInf />
        </Tab>
        <Tab eventKey="corporales" title="Corporales" >
          <CorporalInf />
        </Tab>
      </Tabs>
      </div>
      
      </>
    )
    
}
