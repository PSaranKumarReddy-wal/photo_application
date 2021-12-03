import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Nav,
  NavItem,
  UncontrolledCollapse,
} from "reactstrap";

const About = () => (
  <div className="about">
    <div className="listItems">
      <div className="data">
        <h4>AboutPage</h4>
        <p>
          This is is Photo Application .In this Application We will Show list of
          Photos from API.
        </p>
      </div>
      <h5>We Added the these 4 parts in this photo-Application</h5>
      <div className="hello">
        <Button
          color="primary"
          id="toggler"
          style={{
            marginBottom: "1rem",
          }}
        >
          Part-1
        </Button>

        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              <ul>
                <li>Build a react app to display photos from the api</li>
                <li>
                  display each photo as card with thumbnail image and title
                </li>
                <li>
                  display pagination which shows the album ids and on changing
                  the page number fetch the data for that album.
                </li>
                <li>
                  React Components to be build - Photos - component which will
                  have pagination && make api calls to get photos and Photo-
                  component for each photo card
                </li>
                <li>
                  Reactstrap Components to use Layout, Card, Pagination, Spinner
                  <br />
                  <b>Follow document Link;-</b>
                  https://reactstrap.github.io/?path=/docs/home-installation--page
                  documentation for reactstrap
                </li>
              </ul>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        <Button
          color="primary"
          id="togglerp"
          style={{
            marginBottom: "1rem",
          }}
        >
          Part-2
        </Button>
        <UncontrolledCollapse toggler="#togglerp">
          <Card>
            <CardBody>
              <ul>
                <li>Add on click event for the images</li>
                <li>
                  https://reactstrap.github.io/?path=/docs/components-modal--modal
                </li>
                <li>
                  On clicking the image open the modal which shows the full
                  photo
                </li>
              </ul>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        <Button
          color="primary"
          id="toggler3"
          style={{
            marginBottom: "1rem",
          }}
        >
          Part-3
        </Button>
        <UncontrolledCollapse toggler="#toggler3">
          <Card>
            <CardBody>
              <ul>
                <li>Add a button New Photo on top of the page</li>
                <li>
                  On click of the New Photo button it should open a modal popup
                  which displays a form with inputs title , url , thumbnailUrl
                </li>
                <li>
                  Modal popup must have a save button which should be enabled
                  only when all three input fields are filled
                </li>
                <li>
                  On clicking save call the post api with the filled data and
                  albumId as 1
                </li>
                <li>Once the save is successful close the modal</li>
              </ul>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
        <Button
          color="primary"
          id="toggler4"
          style={{
            marginBottom: "1rem",
          }}
        >
          Part-4
        </Button>
        <UncontrolledCollapse toggler="#toggler4">
          <Card>
            <CardBody>
              <ul>
                <li>Add Home and About links to the top of the page</li>
                <li>
                  Add about page to the app which should be at url
                  localhost:3000/about and clicking About should navigate to
                  this page
                </li>
                <li>
                  On click of any album on home page it should navigate to the
                  photos for that album. It must have url param which will hold
                  the album number like localhost:3000/album/1 for first album.
                  Use the currently build photos page for this
                </li>
                <li>
                  Home page will be new page which will display list of albums.
                  Use
                  https://reactstrap.github.io/?path=/docs/components-listgroup--list-group#stories
                </li>
                <li>
                  React Router Document
                  https://v5.reactrouter.com/web/guides/quick-start
                </li>
              </ul>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  </div>
);
export default About;
