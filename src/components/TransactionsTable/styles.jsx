import styled from "styled-components";

export const Container = styled.div`
    margin-top:4rem;

    table{
        width: 100%;
        /* da um espaçamento sem deixar que a cor de fundo fique igual o padding */
        border-spacing:  0 0.5rem;

        th{
            color: var(--text-title);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        td{
            border:0;
            padding: 1rem 2rem;
            background: var(--shape);
            font-weight: 400;
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.withdraw{
            color: var(--red);

        }
            &.deposit{
                color: var(--green);
            }
        }

        
    }
`;