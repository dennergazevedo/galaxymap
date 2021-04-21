import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    cursor: pointer;
    border: 1px solid #FFF2;
    border-top: 5px solid #FFF2;
    border-bottom: 5px solid #FFF2;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    background-color: #FFF1;
    height: 500px;

    :hover{
        background-color: #FFF2;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    .name{
        :hover{
            ::before{
                content: 'nome';
                opacity: 1;
                transition: 0.5s all;
            }
        }
    }
    .mass{
        :hover{
            ::before{
                content: 'massa';
                opacity: 1;
                transition: 0.5s all;
            }
        }
    }
    .size{
        :hover{
            ::before{
                content: 'tamanho';
                opacity: 1;
                transition: 0.5s all;
            }
        }
    }
    .distance{
        :hover{
            ::before{
                content: 'distância';
                opacity: 1;
                transition: 0.5s all;
            }
        }
    }
    .sollar_system{
        :hover{
            ::before{
                content: 'sistema solar';
                opacity: 1;
                transition: 0.5s all;
            }
        }
    }
`;

export const Image = styled.img`
    width: 250px;
    height: auto;
    max-height: 250px;
    margin-bottom: 10px;
    object-fit: contain;
    margin-top: 10px;
`;

export const Attribute = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 12px;
    text-transform: lowercase;
    font-variant: small-caps;
    color: #FFF;
    width: 90%;
    margin-bottom: 5px;
    background-color: #FFF2;
    height: 30px;

    .icon{
        font-size: 14px;
        color: #FFF5
    }

    :hover{
        position: relative;
        transition: 0.5s all;
        height: 50px;
        ::before{
            font-size: 10px;
            color: #FFF;
            position: absolute;
            top: 5px;
            right: 10px;
            font-variant: small-caps;
            opacity: 0;
            transition: 0.5s all;
        }
    }
`;