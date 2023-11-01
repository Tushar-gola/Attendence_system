import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Breakpoint } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TransitionProps } from '@mui/material/transitions';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});
type ModalProps = {
  children?: string | React.ReactNode;
  buttonText?: string;
  heading?: string;
  handleClose?: () => void;
  open?: boolean;
  handleOpen?: () => void;
  handleCloseScreen?: (() => void) | undefined;
  form?: string | undefined;
  maxWidth?: Breakpoint | false;
  vaild?: boolean;
};

export const Modal = ({ children, buttonText, heading, handleClose, open, handleOpen, handleCloseScreen, form, maxWidth, vaild }: ModalProps) => {
  return (
    <>
      <Button onClick={handleOpen} startIcon={<AddIcon />} variant="contained">
        {buttonText}
      </Button>
      <Dialog open={open ?? false} onClose={handleCloseScreen} TransitionComponent={Transition} fullWidth maxWidth={maxWidth} scroll="paper" aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle id="scroll-dialog-title">{heading}</DialogTitle>
        <DialogContent dividers={true}>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" form={form} variant="contained" disabled={vaild}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
// rgb(145, 85, 253)
// box-shadow: rgba(58, 53, 65, 0.42) 0px 4px 8px -4px;
// background-image: linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%);
// }
