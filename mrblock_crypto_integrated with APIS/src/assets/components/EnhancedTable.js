import React, { useState, useEffect } from "react";
import MaterialDatatable from "material-datatable";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default ({input}) => {
const data = input
const columns = [
  {
    name: '#', 
    field: 'rank',
  },
  
  {   
      name: 'Symbol', 
      field: 'symbol',
      options: {
        headerNoWrap: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div> 
              <img src={value.icon} style={{height:'25px',width:'25px'}}/>
              &nbsp; {value.symbol} </div>
          ); 
        }
    },
  },
  {
      name: 'Name', 
      field: 'name'
  },
  {
      name: 'Market Cap (USD)', 
      field: 'marketCap',
  },
  {
      name: 'Price (USD)', 
      field: 'price'
  },
  {
      name: 'Volume 24h (USD)', 
      field: 'volume24h'
  },
  {
    name: 'Circulating Supply', 
    field: 'circulatingSupply'
  },
  {
    name: 'Change 24H', 
    field: 'percentChange24h',
    options: {
      headerNoWrap: true,
      customBodyRender: (value, tableMeta, updateValue) => {
          if(parseFloat(value.percentChange24h+'') > 0) {
            return (
            <div style={{color:'#88D81A'}}> {value.percentChange24h} </div>
            );
          }else{
            return (
              <div style={{color:'red'}}> {value.percentChange24h} </div>
            ); 

          }
      }
  },
  },
];



const options = {
  selectableRows: false,
  rowsPerPage: 100,
  rowStyle:{
    fontSize:24
  },
  responsive:'scroll'
};


const themeX = createMuiTheme({
  
  palette: {
    type: "dark",
    grey: {
      800: "#000000", // overrides failed
      900: "#121212" // overrides success
    },
    background: {
      paper: "#000000"
    }
  },
  overrides:{
    MaterialDatatableHeaderCell:{
      fontWeight:'bold'
    }
  }
});

  return (
    <div style={{width:'100%',height:'450px',overflow:'auto'}}>
    <MuiThemeProvider theme={themeX}>
        <MaterialDatatable  data={data} columns={columns} options={options} />
    </MuiThemeProvider>
    </div>
  );
};
