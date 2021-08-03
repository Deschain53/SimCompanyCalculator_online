import { withStyles,makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const Estilos = () => {
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: '#18191f',
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
          color: theme.palette.common.white,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#18191f',//theme.palette.action.hover,
          },
        },
      }))(TableRow);

    return {
        StyledTableCell,
        StyledTableRow
    } 
}