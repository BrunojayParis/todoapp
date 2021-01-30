import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import "./Form.css"
import { MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl:{
    margin: theme.spacing(1),
    minWidth: 120,     
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Form = ({setStatus, setImputText, todos, setTodos, imputText}) =>{
    const classes = useStyles();
    
    const getImput = (e)=>{
        setImputText(e.target.value);
    };
    const submitImput =(e)=>{
        e.preventDefault();
        setTodos([
            ...todos, {text: imputText, completed:false, id: Math.random()*1000}
        ]);
        setImputText("");
    };
    const getSelect = (e) =>{
        setStatus(e.target.value)
    };
   
    return(
        <div className="form_conteiner">
        <form className= {classes.root} >
            <TextField label= "Write your tasks here" id="standard-basic" value={imputText} onChange={getImput} type="text" className="todo_input"/>
            <Button variant="contained" onClick={submitImput}  type= "submit" className= "todo_button">ADD</Button>
            <div className="select">
                <FormControl className={classes.formControl}>   
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select onChange={getSelect} name="todos" className= "filter_todos" labelId="demo-simple-select-label" id="demo-simple-select">
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                    <MenuItem value="Not Done">Not Done</MenuItem>
                </Select>
                </FormControl>
            </div>
        </form>   
        </div>
    )
}

export default Form;
