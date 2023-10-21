import styled from "styled-components"

const ShowMessage = styled.div`
  margin: 10px;
  display: ${props => props.show? "block":"none"};
  background-color: black;
  color:white;
  width: 200px;
  padding:15px;
  border-radius:10px;
  position:relative;
  top:${props => props.place.top+"px"};
  left:${props => props.place.left+"%"};
`
export function Message({message,alignment}){
    return(<>
    <ShowMessage show={message} place={alignment}>
        <span className='message'>Thanks for Hovering! I'm a tooltip</span>
    </ShowMessage>
    </>)
}