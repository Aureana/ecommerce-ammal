import styled from "styled-components"

export const FooterContainer = styled.footer`
display: grid;
    width: 100%;
    color: white;
    border: 1px solid blueviolet;
    height: 10vh;
    background-color: black;
    justify-content: center;
    margin-top: 50px;
}

footer a{
  text-align: center;
  color: #dc143c;
  background-color: black;
}
footer p{
  margin-bottom: 8px;
}
.footerIcones{
  text-align: center;
}
.icone{
  width: 18px;
  height: 18px;  
}
.icone-git{
  width: 20px;
  height: 20px;
}

`