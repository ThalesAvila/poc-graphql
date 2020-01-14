# poc-graphql

Exemplo de query live:

```
curl https://lsqgfkvs2i.execute-api.us-east-1.amazonaws.com/dev/ -d '{
    order(id: "778899") {
        customerName
        deliveryAddress
        quantity
        product {
            name
            price
        }
    }
}'
```
