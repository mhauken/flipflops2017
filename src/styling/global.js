import { injectGlobal } from 'styled-components'

injectGlobal`

  @font-face {
    font-family: 'Arvo';
    src: url('../fonts/Arvo-Regular.ttf');
  }

  @font-face {
    font-family: 'Arvo';
    src: url('../fonts/Arvo-Bold.ttf');
    font-weight: bold;
  }

  body,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend, li {
    margin:  0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
  }

  * {

    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }

  }

  html {
    font-family: 'Arvo', sans-serif;
    line-height: 1.15; /* 2 */
    -ms-text-size-adjust: 100%; /* 3 */
    -webkit-text-size-adjust: 100%; /* 3 */
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

`;

export default injectGlobal;
