'use client';
import React, {useState} from 'react';
import { Navbar, Modal, Link, Image, Text, Radio } from '@nextui-org/react';
import Calendar from '../calendar/page';
import CalendarModal from '../modals/calendar/page';

export default function Nav() {
  
  const [showCalModal, setShowCalModal] = useState(false);

  const closeHandler = () => {
    setShowCalModal(false);
  };
  return (

 <>
    <Navbar isBordered  variant='floating' >
        <Navbar.Brand>
            {/* <Image
                src="/artistProfile.png"
                alt="NextUI"
                width="112px"
                height="28px"
                className='logo'
            >
            </Image> */}
            <Text b color="inherit" hideIn="xs" className='logo-text'>
            David G Hartman
          </Text>
        </Navbar.Brand>
      <Navbar.Content hideIn={'xs'}>
       
        <Navbar.Link href="#" onClick={() => {setShowCalModal(true)}}>Book Me</Navbar.Link>
        <Navbar.Link href="#">Face Painting</Navbar.Link>
        <Navbar.Link href="#">Bug Shows</Navbar.Link>
        <Navbar.Link href="#">Guitar Lessons</Navbar.Link>
        <Navbar.Link href="#">Art Projects</Navbar.Link>
        <Navbar.Link href="#">Music Performance</Navbar.Link>
      </Navbar.Content>
      {/* <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}
    </Navbar>
    <Modal
        closeButton
        aria-labelledby="modal-title"
        open={showCalModal}
        onClose={closeHandler}
      >
        <Modal.Body>
          <CalendarModal open={showCalModal} onClose={closeHandler}  />
        </Modal.Body>
        </Modal>
</>
  );
}
