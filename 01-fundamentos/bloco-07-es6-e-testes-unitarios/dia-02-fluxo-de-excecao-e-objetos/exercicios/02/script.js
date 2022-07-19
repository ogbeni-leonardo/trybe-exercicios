const order = {
  name: 'Luiz Gustavo',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 20,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 5,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 50,
  },
};

const customerInfo = (order) => {
  const address = Object.values(order.address);
  const message = `Olá Ana Silveira, entrega para: 

${order.name}
Telefone: ${order.phoneNumber}
${address[0]}
N°: ${address[1]}
AP: ${address[2]}`

  return message;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  const message = `
Olá ${order.name}, 

O total do seu pedido de ${Object.keys(order.order.pizza).join(', ')} e ${order.order.drinks.coke.type} é de R$${order.payment.total}`

  return message;
}

console.log(orderModifier(order));
