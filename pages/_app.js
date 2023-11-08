import Layout from "@/app/layout";
import "@/styles/globals.css";
import '@mantine/notifications/styles.css';
import 'react-notifications/lib/notifications.css';
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <MantineProvider >
      <Notifications />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </MantineProvider>
  </Provider>
  );
}
