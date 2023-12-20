export const styles = {
  paddingStyle: (theme: any) => {
    return {
      '& .Mui-selected': {
        backgroundColor: 'custom.dark',
        margin: '0',
      },
      '& .MuiPaginationItem-root': {
        height: '40px',
        width: '40px',
        border: `1px solid ${theme?.palette?.custom?.dark}`,
        borderRadius: '1px',
        color: 'custom.main',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    };
  },
  iconStyle: (theme: any) => {
    return {
      padding: '8px',
      borderRadius: '0 8px 8px 0',
      height: '40px',
      width: '40px',
      border: `1px solid ${theme?.palette?.custom?.dark}`,
      margin: '0',
    };
  },
  iconStyleTwo: (theme: any) => {
    return {
      padding: '8px',
      borderRadius: '8px 0 0 8px',
      height: '40px',
      width: '40px',
      border: `1px solid ${theme?.palette?.custom?.dark}`,
      margin: '0',
    };
  },
  tablePaginationStyle: (theme: any) => {
    return {
      border: 'none',
      '& .MuiTablePagination-select': {
        border: `1px solid ${theme?.palette?.custom?.dark}`,
        borderRadius: '4px',
        backgroundColor: 'transparent',
        color: 'custom.main',
        height: '20px',
        width: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        position: 'relative',
      },
      '.MuiTablePagination-select:focus': {
        border: `1px solid ${theme?.palette?.custom?.dark}`,
        borderRadius: '4px',
      },
      '.MuiTablePagination-selectLabel': {
        fontWeight: '500',
        color: 'custom.main',
      },
      '.MuiTablePagination-displayedRows': {
        fontWeight: '500',
        marginLeft: '-25px',
        color: 'custom.main',
      },
      '& .MuiTablePagination-actions': {
        display: 'none',
      },
      '& .MuiTablePagination-selectIcon': {
        position: 'absolute',
        top: '30%',
        transform: 'transitionY(-20%)',
        right: '5px',
      },
      '.MuiToolbar-root': {
        padding: 0,
      },
    };
  },
};
