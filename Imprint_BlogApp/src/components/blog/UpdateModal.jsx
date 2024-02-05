
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BlogForm from './BlogForm';
import useBlogCalls from '../../hooks/useBlogCalls';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  bgcolor: 'background.paper',
  borderRadius:"1rem",
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal({open,handleClose,blogDetails}) {
  const {putBlog} = useBlogCalls()
  const handleSubmit = (blogData) => {
    putBlog(blogData)
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <BlogForm blogDetails={blogDetails} handleSubmit={handleSubmit}  />
        </Box>
      </Modal>
    </div>
  );
}

