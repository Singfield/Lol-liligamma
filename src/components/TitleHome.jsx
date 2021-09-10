import styled  from "styled-components"

const Title = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
text-align: center;
    h1 {
        color : var(--color-secondary);
        font-size: 3rem;
    }
    h2 {
        color: var(--color-primary);
    }
    
`
const TitleHome =()=>{
    return(
        <Title>
            <h1>Bonjour Moi c'est Liligamma</h1>
            <h2>Bienvenue sur mon blog </h2>
        </Title>
    )
    
}

export default TitleHome