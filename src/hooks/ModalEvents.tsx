import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export const ModalEvents = () => {
  const [open, setOpen] = React.useState(false);
  const params = useParams();
  const naviagte = useNavigate();

  const handleClose = (modalVal: string) => {
    naviagte(`/${modalVal}`);
  };
  const handleCloseScreen = (modalVal: string) => {
    naviagte(`/${modalVal}`);
  };
  const handleOpen = (modalVal: string) => {
    if (params.toggle) {
      return;
    } else {
      naviagte(`add_${modalVal}=True`);
    }
  };
  React.useEffect(() => {
    setOpen(params.toggle != undefined);
  }, [params]);

  return { open, handleClose, handleOpen, handleCloseScreen };
};
