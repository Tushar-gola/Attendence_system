import { Row } from '@/components';
import { Box } from '@mui/material';

interface FormProps {
  onSubmit?: () => void;
  children: string | React.ReactNode;
  id?: string;
  rowSpacing?: number;
  columnSpacing?: number;
  about?: string;
}
const sty = {
  marginBottom: '1.5rem',
  fontSize: '1.2rem',
  fontWeight: 500,
};
export const Form = ({ children, onSubmit, id, about, ...props }: FormProps) => {
  return (
    <>
      <form onSubmit={onSubmit} id={id} style={{ marginBottom: '3rem' }}>
        {about && <Box sx={sty}>{about}</Box>}
        <Row {...props}>{children}</Row>
      </form>
    </>
  );
};
