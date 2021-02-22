import React from 'react';
import { useDropzone } from "react-dropzone";
import { Alert, UncontrolledAlert, Col, Row } from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';

export default function UploadArticle() {
    const [currentFiles, setCurrentFiles] = React.useState([])
    const { fileRejections, getRootProps, getInputProps } = useDropzone({
        accept: 'application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        multiple: true,
        onDrop: file => {
            file.map((el: any, index: any) => {
                setCurrentFiles(currentFiles.concat(el))
            })
        },
    })
    console.log(currentFiles);
    const handleDelete = (event: React.MouseEvent<unknown>) => {
        const element = event.currentTarget as HTMLInputElement
        const value: number = parseInt(element.className)
        setCurrentFiles(currentFiles.filter(e => currentFiles.indexOf(e) != value))
        console.log(currentFiles);
    }
    const fileRejectionItems = fileRejections.map(({ file, errors }, index) => (
        <UncontrolledAlert key={index} color="danger">
            Cannot upload file {file.name}. Only accept .pdf and .doc
        </UncontrolledAlert >
    ));
    return (
        <section >
            <div 
                {...getRootProps({ className: 'dropzone d-flex justify-content-center' })} 
                style={{ 
                    borderWidth: '2px', 
                    borderColor: '#767676', 
                    borderStyle: 'dashed',
                    borderRadius: '5px' 
                }}
            >
                <input {...getInputProps()} />
                <p style={{ margin: '8px 0' }}>Drop files here or Browse</p>
            </div>
            <div>
                {currentFiles.map((file: any, index: any) => {
                    return (
                        <Alert style={{color:'141414', border:'none', backgroundColor:'white', marginTop: '1rem'}} key={index} >
                            <Row>
                                <Col lg='5' sm='5' xs='5' style={{color:'#00CA39', fontWeight:'bold'}}>
                                    {(file.name.length > 20) ? file.name.slice(0, 16) + '...' : file.name}
                                </Col>
                                <Col lg='4' sm='4' className='d-none d-sm-block'>{(file.size / 1048576).toFixed(3)} MB</Col>
                                <Col lg='3' sm='3' xs='7'>
                                    <a className={index} onClick={handleDelete} style={{ float: 'right' }}>
                                        <DeleteIcon />
                                    </a>
                                </Col>
                            </Row>
                        </Alert>
                    )
                })}
                {fileRejectionItems}
            </div>
        </section>
    );
}