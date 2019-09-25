<!doctype html>

<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Enterprise Hackatoons</title>
  <!-- Place favicon.ico in the `app/` directory -->

  <!-- Chrome for Android theme color -->
  <meta name="theme-color" content="#303F9F">

  <!-- Web Application Manifest -->
  <link rel="manifest" href="manifest.json">

  <!-- Tile color for Win8 -->
  <meta name="msapplication-TileColor" content="#3372DF">

  <!-- Add to homescreen for Chrome on Android -->
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="application-name" content="futurabankclientfront">
  <link rel="icon" sizes="192x192" href="resources/images/touch/chrome-touch-icon-192x192.png">

  <!-- Add to homescreen for Safari on iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="futurabankclientfront">
  <link rel="apple-touch-icon" href="resources/images/touch/apple-touch-icon.png">

  <!-- Tile icon for Win8 (144x144) -->
  <meta name="msapplication-TileImage" content="resources/images/touch/ms-touch-icon-144x144-precomposed.png">
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,900" rel="stylesheet">
  <!-- build:css styles/main.css -->
  <link rel="stylesheet" href="styles/main.css">
  <!-- endbuild-->
</head>

<body class="fullbleed layout vertical loading">
  <div id="splash">
      <figure>
      <!-- htmllint attr-name-style="false" -->
      <svg text-rendering="geometricPrecision" shape-rendering="geometricPrecision" width="112px" viewBox="0 0 56 48" style="white-space: pre;">
        <title>Loading ...</title>
        <style>
          svg{
            height:100%; width:100%; display:block;
          }
          @keyframes a0_t { 0% { transform: translate(0px,18px); } 100% { transform: translate(0px,18px); } }
          @keyframes a2_t { 0% { transform: translate(28px,45.717963px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 25% { transform: translate(28px,9.507194px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 50% { transform: translate(28px,45.602968px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 75% { transform: translate(28px,24px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(28px,45.718px); } }
          @keyframes a1_t { 0% { transform: scale(1,0.399505) translate(-28px,-24px); } 25% { transform: scale(1,0.399505) translate(-28px,-24px); } 50% { transform: scale(1,0.399505) translate(-28px,-24px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 75% { transform: scale(1,1) translate(-28px,-24px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: scale(1,0.399505) translate(-28px,-24px); } }
          @keyframes a4_t { 0% { transform: translate(28px,6.016862px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 25% { transform: translate(28px,33.073853px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 50% { transform: translate(28px,6px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 75% { transform: translate(28px,42.01551px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(28px,5.97963px); } }
          @keyframes a3_t { 0% { transform: scale(1,0.997415) translate(-28px,-6px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 25% { transform: scale(1,2.512309) translate(-28px,-6px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 50% { transform: scale(1,0.997415) translate(-28px,-6px); } 75% { transform: scale(1,0.997415) translate(-28px,-6px); } 100% { transform: scale(1,0.997415) translate(-28px,-6px); } }
        </style>
        <rect width="56" height="12" fill="#2a86ca" stroke="none" transform__="translate(28,24) translate(-28,-6)" style="animation: a0_t 1s linear both;" />
        <g style="animation: a2_t 4s linear infinite both;">
          <rect width="56" height="30" fill="#004481" stroke="none" transform__="translate(28,45.718) scale(1,0.399505) translate(-28,-24)" style="animation: a1_t 4s linear infinite both;" />
        </g>
        <g style="animation: a4_t 4s linear infinite both;">
          <rect width="56" height="12" fill="#2dcccd" stroke="none" transform__="translate(28,6.01686) scale(1,0.997415) translate(-28,-6)" style="animation: a3_t 4s linear infinite both;" />
        </g>
      </svg>
      <!-- htmllint attr-name-style="$previous" -->
    </figure>
  </div>
  <div id="app__content"></div>

  <!-- for a11y purposes -->
  <div id="announcer" aria-live="polite"></div>

  <!-- build:js scripts/app-dist.js async -->
  <script src="vendor/bowser.min.js"></script>
  <script src="scripts/app-bootstrap.js"></script>
  <script src="scripts/app.js" async></script>
  <!-- endbuild-->
</body>


</html>
