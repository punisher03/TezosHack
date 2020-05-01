# Problem

There are approximately 450–500 million smallholder farmers, or those who work small plots of land for subsistence and to harvest a couple of cash crops. These farmers make up roughly 90% of the world’s farms, and they are the primary example of why better payment systems are needed for small-time farmers in hyper-rural areas making little to no profit from their farms. Small-time farmers’ financial hardships and rural life are exacerbated by yield uncertainty due to unpredictable changes in weather and pest infestations, and studies have shown that these conditions put unsustainable levels of stress on the rural farming population. Depending on the study, farmers may be twice as likely to commit suicide as non-farmers, with an approximate rate of 30 suicides per 100,000 compared with 10 per 100000 for the rest of the population. These figures cannot be separated from economic insecurity, and are a compelling reason why establishing more consistent, faster payment for smallholder farmers across the globe is critical. With blockchain, the agricultural finance process becomes more transparent and fair, yet enables shared fair control accessibility.

# Solution

We made this possible by deploying our contract, and making use of the powerful Tezos chain and made use of an escrow contract to act as p2p between buyers and farmers and thus eliminating middlemen, in a way in which this app could be trusted by buyers. We also made use of the cryptocurrency Tez(XTZ) as our main payment method (We assume that all the Tez accounts are activated and revealed in the first place) instead of the traditional NetBanking method to save the farmers from the unavoidable exorbitant cuts which are often more than they can afford. Tezos Blockchain ensures transparency and justice for the farmers. We made use of the Cryptonomic Stack for our benefit by using conseilJS to communicate with the tezos blockchain for transferring Tez and checking out the status of the Transactions using the Arronax explorer.

# Frontend:
Conseiljs to connect between frontend and dapp
##  Farmer:
Farmers should login if they haven’t(Id would be their blockchain address from metamask or similar to this)
They should also give their personal details like address ph no.
They should fill out the details of the product that they are gonna sell on this dapp That includes the name, description,quantity available,and the price
## Buyer:
Buyers should also login with blockchain address
They should give their address,Ph no.
Buyers can explore the dapp and select the product they wish to buy and can transfer the money in tezos

# Backend:
Have two tables for buyers and sellers with respective attributes.
# Dapp:
Created a function to transfer money from buyer to seller and incase an request to cancel, refund function should be invoked
