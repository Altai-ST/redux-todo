import { Button } from "@material-ui/core"

const Link = ({ active, children, onClick }) => {
  return(
    <Button onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
    variant="contained" 
    color='primary'
  >{children}</Button>
  )}

export default Link