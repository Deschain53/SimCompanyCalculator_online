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

      const styleDropDowButtons = makeStyles((theme) => ({
        button: {
          display: 'block',
          marginTop: theme.spacing(2),
          backgroundColor: '#18191f',
          color: theme.palette.common.white
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
          backgroundColor: '#18191f',
          color: theme.palette.common.white
        },
        inputLabel: {
          color: theme.palette.common.white
        },
        inputBase: {
          color: theme.palette.common.white
        }
        
      }));

    return {
        StyledTableCell,
        StyledTableRow,
        styleDropDowButtons
    } 
}