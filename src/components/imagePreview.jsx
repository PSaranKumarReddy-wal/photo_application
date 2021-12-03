import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ImagePreview = ({ imageData, imageClickClose }) => {
  return (
    <>
      <Modal size="lg" isOpen>
        <ModalHeader toggle={imageClickClose}>{imageData.title}</ModalHeader>
        <ModalBody>
          <img src={imageData.url} alt="images" width="600" />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ImagePreview;
