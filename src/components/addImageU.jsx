import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useState } from "react";

const ImageAdd = ({ checkingNew, page }) => {
  const [input, setInput] = useState({});
  const [closeModel, setCloseModel] = useState(true);
  const postFetch = async (result) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    };
    try {
      const fetching = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${page}/photos`,
        options
      );
      const data = await fetching.json();
      console.log(data);
      console.log("Successfull");
      setCloseModel(false);
      checkingNew();
    } catch (e) {
      console.log("Error");
    }
  };

  const checking =
    input["title"] && input["url"] && input["thumbnailUrl"] ? false : true;

  const formChecking = (e) => {
    e.preventDefault();
    const result = { ...input, albumId: page };
    console.log("inputvalues:::", result);
    postFetch(result);
  };

  const inputValue = (e) => {
    const name = e.target.name;
    let val = e.target.value;
    setInput((prev) => ({ ...prev, [name]: val }));
  };
  return (
    <>
      <Modal size="lg" isOpen={closeModel}>
        <ModalHeader
          toggle={() => {
            checkingNew();
          }}
        >
          Adding Image
        </ModalHeader>
        <ModalBody>
          <div>
            <Form
              onSubmit={(e) => {
                formChecking(e);
              }}
            >
              <FormGroup>
                <Label for="exampleTitile">Titile</Label>
                <Input
                  id="exampleTitile"
                  name="title"
                  placeholder="Enter Title"
                  type="text"
                  onChange={inputValue}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleURL">URL</Label>
                <Input
                  id="exampleURL"
                  name="url"
                  placeholder="Enter URL"
                  type="text"
                  onChange={inputValue}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">ThumbnailUrl</Label>
                <Input
                  id="exampleEmail"
                  name="thumbnailUrl"
                  placeholder="Enter ThumbnailUrl"
                  type="text"
                  onChange={inputValue}
                />
              </FormGroup>
              <Button
                className="btn btn-success"
                type="submit"
                disabled={checking}
              >
                Save
              </Button>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ImageAdd;
