"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface CustomModalProps {
  children: React.ReactNode;
  closeModal: (e: string) => void;
}

function CustomModal({ children, closeModal }: CustomModalProps) {
  const handleClose = () => closeModal("empty");

  return (
    <div>
      <Modal
        keepMounted
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-demo"
        aria-describedby="keep-description"
      >
        <Box
          className="rounded-lg"
          sx={style}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
