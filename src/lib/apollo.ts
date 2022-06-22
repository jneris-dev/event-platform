import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pme5l1223c01ywe5tj7ulr/master',
    cache: new InMemoryCache()
})