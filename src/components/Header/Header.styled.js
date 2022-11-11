import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 90vw;
    height: 15vh;
    align-items: center;  
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
    
   a {
    font-size: 25px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
    }
    
    .button-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
      
        
        
    }
.pesquisa-btn{
    width: 170px;
    height: 5vh;
    background-color: red;
    
    
}
    button {
        background-color: gray;
        border: none;
        width: 50px;
        height: 50px;
        margin: 0 4px;
        border-radius: 50%;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(0.95);
        }
    }

    .cart-btn {
        position: relative;
        border-radius: 50%;
        
    }
    .cart-btn img{
        width: 100%;
        height: 50px;
        background-color: white;
        
    }

    .cart-badge {
        position: absolute;
        top: 10%;
        right: 10%;
        border-radius: 50%;
        background-color: white;
        height: 18px;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`