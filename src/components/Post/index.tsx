type PostProps = {
    nome: string
    email: string
    idade: number
  }
  
  export function Post(props: PostProps) {
    return (
      <>
        <p>Nome: {props.nome}</p> <br />
        <p>Email: {props.email}</p> <br />
        <p>Idade: {props.idade}</p> <br />
      </>
    );
  }
  
  