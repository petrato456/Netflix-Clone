import styled from 'styled-components'

export const Header = styled.header`
display: flex;
align-items: center;
padding: 20px;
width: 100%;
height: 65px;
background-color: rgb(20, 20, 20);
box-sizing: border-box;

img{
    width: 90px;
    margin-right: 20px;
    margin-left: 40px;
    
}

span{
    
    font-size: 15px;
    margin: 10px;
    color: #fff;
}
`
export const Div = styled.div`
display: flex;
align-items: center;
margin-left: 40%;


span{
    margin: 30px;
    font-size: 15px;
}
`

export const Drop = styled.div`
color:red;
cursor: pointer;

 


span{
    color: red;
    cursor: pointer;
}

&:hover{
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    flex-direction: column;
    margin-top: 70px;
    background-color: black;
    border-radius: 10px;
    
}
`