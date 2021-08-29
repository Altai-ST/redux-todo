import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import {addTodo} from '../../redux/actions/index'
import './AddTodo.css'

let AddTodo = ({dispatch})=>{
    let input;
    return(
        <div>
            <form
                onSubmit={e=>{
                    e.preventDefault();
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input ref={node => (input = node)}/>
                <Button type='submit' variant="contained" color='primary' >Add Todo</Button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)