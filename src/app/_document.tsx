import Document, { Html, Head, Main, NextScript } from 'next/document';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" /> 
                    <link rel="stylesheet" href="../styles/globals.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}