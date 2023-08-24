import { CacheProvider } from "@emotion/react";
import MuiAlert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import { Provider } from "react-redux";
import { Fonts } from "../src/components/themes/fonts";
import createEmotionCache from "../src/lib/createEmotionCache";
import { wrapper } from "../src/redux/store";
import "../styles/globals.css";
import theme from "../styles/muiTheme";
import { PersistGate } from "redux-persist/integration/react";
import MetaData from "../src/utils/meta";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const clientSideEmotionCache = createEmotionCache();
export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page) => page);
  const [networkOffline, setNetworkOffline] = useState(false);
  const [networkOnline, setNetworkOnline] = useState(false);

  const handleOnlineClose = () => setNetworkOnline(false);
  useEffect(() => {
    window.addEventListener("offline", function (e) {
      setNetworkOnline(false);
      setNetworkOffline(true);
    });

    window.addEventListener("online", function (e) {
      setNetworkOffline(false);
      setNetworkOnline(true);
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <link rel="icon" href="/favicon.ico" />
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <PersistGate
              persistor={store.__persistor}
              loading={<div>Loading...</div>}
            >
              {getLayout(<Component {...props} />)}
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </CacheProvider>

      <Snackbar
        open={networkOffline}
        autoHideDuration={6000}
        sx={{ width: { sm: "80%", md: "20%" } }}
      >
        <Alert
          severity="warning"
          sx={{
            width: "100%",
            font: `normal normal 500 18px/25px ${Fonts.primary}`,
            py: 2,
          }}
        >
          No internet connection
        </Alert>
      </Snackbar>
      <Snackbar
        open={networkOnline}
        autoHideDuration={6000}
        onClose={handleOnlineClose}
        sx={{ width: { sm: "80%", md: "20%" } }}
      >
        <Alert
          onClose={handleOnlineClose}
          severity="success"
          sx={{
            width: "100%",
            font: `normal normal 500 18px/25px ${Fonts.primary}`,
            py: 2,
          }}
        >
          Back Online
        </Alert>
      </Snackbar>
    </>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
