/* eslint-disable react/no-unescaped-entities */
import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import {baseStyle, focusedStyle, acceptStyle, rejectStyle} from './style.ts'

export default function Dropzone(props) {
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
      } = useDropzone({accept: {'image/*': []},onDrop: acceptedFiles => {
        props.handleUpload(acceptedFiles);
      }
      });
    
      const style = useMemo(() => ({
        ...baseStyle
      }), []);

      return (
        <div className="container">
          <div {...getRootProps({style})}>
            <input {...getInputProps()}  data-testid="imageInput" />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
      );
}