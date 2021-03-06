import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 1900.00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "19/04/2021",
    },
    {
      id: '2',
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "10/04/2020",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/cybercris.png" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Cristiano</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$200,00"
          lastTransaction="Ultima entrada dia 14 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$5000,00"
          lastTransaction="Ultima entrada dia 11 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$222.000,00"
          lastTransaction="01 a 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
