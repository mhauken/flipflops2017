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

  .leaflet-container {
    height: 300px;
    width: 100%;
    margin: 0 auto;
  }
  .leaflet-control-zoom,
  .leaflet-control-attribution {
    display: none;
  }

  .example-enter {
      transform: translateX(-100vw);
    }

    .example-enter.example-enter-active {
      transform: translateX(0);
      transition: transform .5s cubic-bezier(.4,.6,.42,1.35);
      &:nth-child(2) {
        transition-delay: .05s;
      }
      &:nth-child(3) {
        transition-delay: .1s;
      }
      &:nth-child(4) {
        transition-delay: .15s;
      }
    }

    .example-leave {
      transform: translateX(0);
    }

    .example-leave.example-leave-active {
      transform: translateX(100vw);
      transition: transform .5s cubic-bezier(.4,.6,.42,1.35);
      &:nth-child(2) {
        transition-delay: .05s;
      }
      &:nth-child(3) {
        transition-delay: .1s;
      }
      &:nth-child(4) {
        transition-delay: .15s;
      }
    }

`;

export default injectGlobal;
