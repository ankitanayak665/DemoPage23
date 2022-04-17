import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import '../App.css';


class Notice extends Component {
    render() {
        return (
            <div style={{ width: "700px", height: "47vh", marginLeft: "80px", border: '2px solid #E5ECF1', backgroundColor: "white" }}>
    <h3 style={{marginBottom:"0px"}}>Notices</h3>
    <Table stackable style={{ border: "none", boxShadow: "none", top:"0px",marginTop:"0"}}>
      <Table.Body style={{marginTop:"0"}}>
        <Table.Row style={{marginTop:"0"}}>
        <Table.Cell style={{marginTop:"0"}}>
            <span STYLE="font-weight:bold">John bola kese ho lela</span><br/>
            <span style={{color:"#FF69B4",fontweight:"bold"}}>13 February 2022 </span><span style={{color:"white",fontweight:"bold",backgroundColor:"#09B1CB ",borderRadius:"10px"}}>&nbsp;&nbsp;Principal Office&nbsp;&nbsp;</span><p>Vivekananda was born Narendranath Datta
            (shortened to Narendra or Naren)[18] in a Bengali family.</p>
          </Table.Cell>
          <Table.Cell style={{marginTop:"0"}}>
            <span STYLE="font-weight:bold">John bola kese ho lela</span><br/>
            <span style={{color:"#FF69B4",fontweight:"bold"}}>13 February 2022 </span><span style={{color:"white",fontweight:"bold",backgroundColor:"#13F07E ",borderRadius:"10px"}}>&nbsp;&nbsp;Exam Depts.&nbsp;&nbsp;</span><p>Vivekananda was born Narendranath Datta
            (shortened to Narendra or Naren)[18] in a Bengali family.</p>
          </Table.Cell>
  
        </Table.Row >
        <Table.Row style={{marginTop:"0"}}>
        <Table.Cell style={{marginTop:"0"}}>
            <span STYLE="font-weight:bold">John bola kese ho lela</span><br/>
            <span style={{color:"#FF69B4",fontweight:"bold"}}>13 February 2022 </span><span style={{color:"white",fontweight:"bold",backgroundColor:"#13F07E ",borderRadius:"10px"}}>&nbsp;&nbsp;Exam Depts.&nbsp;&nbsp;</span><p>Vivekananda was born Narendranath Datta
            (shortened to Narendra or Naren)[18] in a Bengali family.</p>
          </Table.Cell>
          <Table.Cell style={{marginTop:"0"}}>
            <span STYLE="font-weight:bold">John bola kese ho lela</span><br/>
            <span style={{color:"#FF69B4",fontweight:"bold"}}>13 February 2022 </span><span style={{color:"white",fontweight:"bold",backgroundColor:"#F10FB4 ",borderRadius:"10px"}}>&nbsp;&nbsp;Student activity&nbsp;&nbsp;</span><p>Vivekananda was born Narendranath Datta
            (shortened to Narendra or Naren)[18] in a Bengali family.</p>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
   
  </div>


        )
    }
}




export default Notice