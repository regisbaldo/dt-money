import styled from "styled-components";
export const Container = styled.form`

h2{
    color:  var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input{
    width:100% ;
    border:  1px solid #d7d7d7;
    background: #e9e9ee ;
    height: 4rem;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 0.25rem;
    padding: 0 1.5rem;

    &::placeholder{
        color:  var(--text-body);
    }

    & + input{
        margin-top: 1rem;
    }

}
button[type="submit"]{
    width: 100%;
    background:  var(--green);
    border :0;
    border-radius: 0.25rem;
    height: 4rem;
    padding: 0 1.5rem;
    color: #fff;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.25s;

    &:hover{
        filter:  brightness(0.8);
    }

}

`;