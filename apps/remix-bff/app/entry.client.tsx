import { ApolloProvider } from '@apollo/client';
import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { initApolloClient } from './context/apollo';

function Client() {
  const client = initApolloClient(false);

  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  );
}

hydrate(<Client />, document);
