import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the extend-expect module
import fs from 'fs';

import ImageUpload from './page';
 
// import imgFile from '../../../public/artistProfile.png';

describe('ImageUpload', () => {
   //use imgFile to create a file object
   const testImage = new File(['../../../public/artistProfile.png'], 'artistProfile.png', {
    type: 'image/png',
    });
    const handleUploadMock = jest.fn();

  beforeEach(() => {
    render(<ImageUpload handleUpload={handleUploadMock} />);
  });

  it('displays a file input', () => {
    // const fileInput = screen.getByTestId('imageInput');
    // expect(fileInput).toHaveAttribute('type', 'file');
  });

  it('uploads a selected image', () => {
   
    //const fileInput = screen.getByTestId('imageInput');
   // fireEvent.change(fileInput, { target: { files: [testImage] } });
  });

  it('unhides the upload button when autoUpload is false', () => {
    // TODO: Write the test case for enabling the upload button when autoUpload is false
  });

  it('hides the upload button when autoUpload is false', () => {
    // TODO: Write the test case for disabling the upload button when autoUpload is true
  });
  it('disables the upload button when no image is selected', () => {
    // TODO: Write the test case for disabling the upload button
  });

  it('displays an error message on upload failure', () => {
    // TODO: Write the test case for displaying an error message on upload failure
  });

  it('displays a success message on upload success', () => {
    // TODO: Write the test case for displaying a success message on upload success
  });

  // Add more test cases as needed
});
