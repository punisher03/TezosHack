import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>

        <Card.Header>Tomatoes</Card.Header>
        <Card.Meta>Mahesh's market</Card.Meta>
        <Card.Description>
          Fresh tomatoes ready to be sold.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>

          <Button href="/transaction" basic color='green'>
            Buy
          </Button>

          <Button basic color='red'>
            Contact
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>

        <Card.Header>Brinjal</Card.Header>
        <Card.Meta>Ramesh's Market</Card.Meta>
        <Card.Description>
          Freshly grown brinjals ready to be sold.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button href="/transaction" basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Contact
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>

      <Card.Header>Lemons</Card.Header>
      <Card.Meta>Suresh's market</Card.Meta>
      <Card.Description>
        Freshly grown lemons, ready to be sold.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button href="/transaction" basic color='green'>
          Buy
        </Button>
        <Button basic color='red'>
          Contact
        </Button>
      </div>
    </Card.Content>
  </Card>
  <Card>
    <Card.Content>
    <Card.Header>Corriander</Card.Header>
    <Card.Meta>Rahul's Market</Card.Meta>
    <Card.Description>
      Freshly grown leaves, ready for sale.
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <div className='ui two buttons'>
      <Button href="/transaction" basic color='green'>
        Buy
      </Button>
      <Button basic color='red'>
        Contact
      </Button>
    </div>
  </Card.Content>
</Card>
<Card>
  <Card.Content>

  <Card.Header>Potato</Card.Header>
  <Card.Meta>Shiela's market</Card.Meta>
  <Card.Description>
    Large quantity of fresh potatoes, ready to be sold.
  </Card.Description>
</Card.Content>
<Card.Content extra>
  <div className='ui two buttons'>
    <Button href="/transaction" basic color='green'>
      Buy
    </Button>
    <Button basic color='red'>
      Contact
    </Button>
  </div>
</Card.Content>
</Card>
<Card>
<Card.Content>

        <Card.Header>Mangoes</Card.Header>
        <Card.Meta>Arjun's Market</Card.Meta>
        <Card.Description>
          Seasonal stock of limited mangoes, ready to be sold
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button href="/transaction" basic color='green'>
            Buy
          </Button>
          <Button basic color='red'>
            Contact
          </Button>
        </div>
      </Card.Content>


    </Card>
  </Card.Group>

)

export default CardExampleGroups
