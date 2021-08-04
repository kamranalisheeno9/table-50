import React, { useState } from 'react'
import './table.css'
import { Table, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableComponent = () => {

    // Data

    const columnHeader = {
        id: "ID",
        productName: "Product Name",
        document: "Document",
        tcode: "T Code",
        boxName: "Box Name",
        boxNumber: "Box Number",
    }

    const tableData = [
        {
            id: 1,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 2,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 3,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 4,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 5,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 6,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 7,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 8,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 9,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 10,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 11,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 12,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 13,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 14,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 15,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 16,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 17,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 18,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 19,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 20,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 21,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 22,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 23,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 24,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 25,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 26,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 27,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 28,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 29,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 30,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 31,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 32,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 33,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 34,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 35,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 36,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 37,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 38,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 39,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 40,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 41,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 42,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 43,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 44,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 45,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 46,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 47,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 48,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 49,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },
        {
            id: 50,
            productName: "Product Name Here",
            document: "Document Here",
            tcode: "Tcode Here",
            boxName: "Box Name Here",
            boxNumber: 12323,
        },

    ]
    const [Data, setData] = useState([...tableData])
    const [showModel, setShowModel] = useState(false)
    const [Key, setKey] = useState("")
    const [IdMofied, setIdModified] = useState("")
    const [ProductMofied, setProductModified] = useState("")
    const [DocumentMofied, setDocumentModified] = useState("")
    const [TcodeModified, setTcodeModified] = useState("")
    const [BoxNameMofied, setBoxNameModified] = useState("")
    const [BoxNumberMofied, setBoxNumberModified] = useState("")

    const modifiedData = {
        id: IdMofied,
        productName: ProductMofied,
        document: DocumentMofied,
        tcode: TcodeModified,
        boxName: BoxNameMofied,
        boxNumber: BoxNumberMofied,

    }
    // Function


    const Edit = (index) => {
        setShowModel(true)
        setKey(index)
        setIdModified(Data[index].id)
        setProductModified(Data[index].productName)
        setDocumentModified(Data[index].document)
        setTcodeModified(Data[index].tcode)
        setBoxNameModified(Data[index].boxName)
        setBoxNumberModified(Data[index].boxNumber)
        console.log(Key)
    }
    const Delete = (ID) => {
        console.log(Data)
        setData(Data.filter(Data => Data.id !== ID))
        console.log(ID)

    }

    const Close = () => {
        setShowModel(false)
    }

    const Update = (key) => {
        setShowModel(false)
        console.log([...Data.splice(key, 1, modifiedData)])
    }

    return (
        <div className="tableBody">
            {showModel ? null :

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>{columnHeader.id}</th>
                            <th>{columnHeader.productName}</th>
                            <th>{columnHeader.document}</th>
                            <th>{columnHeader.tcode}</th>
                            <th>{columnHeader.boxName}</th>
                            <th>{columnHeader.boxNumber}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((v, i) => {
                            return (

                                <tr key={i}>
                                    <td>{v.id}</td>
                                    <td>{v.productName}</td>
                                    <td>{v.document}</td>
                                    <td>{v.tcode}</td>
                                    <td>{v.boxName}</td>
                                    <td>{v.boxNumber}</td>
                                    <td className="buttons">

                                        <Button variant="primary" className="editbtn" onClick={() => Edit(i)}> Edit </Button>
                                        <span> </span>
                                        <Button variant="danger" className="deletebtn" onClick={() => Delete(v.id)} > Delete </Button>
                                    </td>

                                </tr>
                            )
                        })}


                    </tbody>


                </Table>
            }
            {/* Model */}

            {showModel ?

                <Modal.Dialog className="ModelDialog">
                    <Modal.Header>
                        <Modal.Title className="modelTitle">Edit Row</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="ModelBody">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className="ModifiedInputs" type="text" onChange={(e) => setIdModified(e.target.value)} value={IdMofied}  />
                            <Form.Control className="ModifiedInputs" type="text" onChange={(e) => setProductModified(e.target.value)} value={ProductMofied}  />
                            <Form.Control className="ModifiedInputs" type="text" onChange={(e) => setDocumentModified(e.target.value)} value={DocumentMofied}  />
                            <Form.Control className="ModifiedInputs" type="text" onChange={(e) => setTcodeModified(e.target.value)} value={TcodeModified}  />
                            <Form.Control className="ModifiedInputs" type="text" onChange={(e) => setBoxNameModified(e.target.value)} value={BoxNameMofied}  />
                            <Form.Control className="ModifiedInputs" type="text" onChange={(e) => setBoxNumberModified(e.target.value)} value={BoxNumberMofied}  />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => Close()}>Close</Button>
                        <Button variant="primary" onClick={() => Update(Key)} >Modify</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                :
                null
            }
        </div>
    );
}

export default TableComponent;
