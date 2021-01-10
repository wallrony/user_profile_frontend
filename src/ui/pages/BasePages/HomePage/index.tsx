import React from 'react';
import BasePage from '../../../components/BasePage';

const HomePage: React.FC = () => {
  return (
    <BasePage>
      <h2>Bem-vindo ao "Perfil do Usuário"!</h2>
      <p>
        Esse é um projeto beeeem simples que tem como objetivo testar novas
        funcionalidades e formas de desenvolver uma aplicação Frontend. Nesse
        projeto estou <b>utilizando a Context API do React + seus Hooks</b>, o que
        implica em uma incrível flexibilidade na utilização e alteração de
        informações que estão presentes em diversos componentes da aplicação.
      </p>
      <p>
        Essa aplicação tem como funcionalidades um pequeno CRUD para o usuário,
        onde é possível cadastrar uma nova conta, atualizar as informações do
        usuário e fazer login com persistência no StorageController, utilizando
        autenticação com token JWT.
      </p>
      <p>
        Este projeto está alocado no repositório:&nbsp;
        <a target="_blank" href="https://www.github.com/wallrony/user_profile_frontend">
          wallrony/user_profile_frontend
        </a>.
        Já o backend, está nesse repositório aqui:&nbsp;
        <a target="_blank" href="https://www.github.com/wallrony/auth-nest-backend">
          wallrony/auth-nest-backend
        </a>.
      </p>
      <h3>Bons testes ^-^!</h3>
    </BasePage>
  );
}

export default HomePage;
