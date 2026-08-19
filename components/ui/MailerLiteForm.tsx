"use client";

import { useEffect } from "react";
import Script from "next/script";

const formHtml = `
<style type="text/css">@import url("https://assets.mlcdn.com/fonts.css?version=1774528");</style>
<style type="text/css">
/* LOADER */
.ml-form-embedSubmitLoad {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.g-recaptcha {
transform: scale(1);
-webkit-transform: scale(1);
transform-origin: 0 0;
-webkit-transform-origin: 0 0;
height: ;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

.ml-form-embedSubmitLoad:after {
  content: " ";
  display: block;
  width: 11px;
  height: 11px;
  margin: 1px;
  border-radius: 50%;
  border: 4px solid #fff;
border-color: #ffffff #ffffff #ffffff transparent;
animation: ml-form-embedSubmitLoad 1.2s linear infinite;
}
@keyframes ml-form-embedSubmitLoad {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  #mlb2-27843431.ml-form-embedContainer {
    box-sizing: border-box;
    display: table;
    margin: 0 auto;
    position: static;
    width: 100% !important;
  }
  #mlb2-27843431.ml-form-embedContainer h4,
  #mlb2-27843431.ml-form-embedContainer p,
  #mlb2-27843431.ml-form-embedContainer span,
  #mlb2-27843431.ml-form-embedContainer button {
    text-transform: none !important;
    letter-spacing: normal !important;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper {
    background-color: transparent;
    border-width: 0px;
    border-color: transparent;
    border-radius: 4px;
    border-style: solid;
    box-sizing: border-box;
    display: inline-block !important;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper.embedDefault { width: 100%; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 100%; width: 100%; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-align-left { text-align: left; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-align-center { text-align: center; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-align-default { display: table-cell !important; vertical-align: middle !important; text-align: center !important; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-align-right { text-align: right; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: auto;
    margin: 0 auto !important;
    max-width: 100%;
    width: undefinedpx;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
    padding: 0px;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal {
    padding-bottom: 0;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
    text-align: left;
    margin: 0 0 20px 0;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
    color: #000000;
    font-family: inherit;
    font-size: 30px;
    font-weight: 400;
    margin: 0 0 10px 0;
    text-align: left;
    word-break: break-word;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
    color: #000000;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0 0 10px 0;
    text-align: left;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol {
    color: #000000;
    font-family: inherit;
    font-size: 14px;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a {
    color: #000000;
    text-decoration: underline;
  }

  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {
    text-align: left!important;
  }

  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {
    margin-bottom: 5px;
    color: #333333;
    font-size: 14px;
    font-family: inherit;
    font-weight: bold; font-style: normal; text-decoration: none;;
    display: inline-block;
    line-height: 20px;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child {
    margin: 0;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
    margin: 0;
    width: 100%;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
    margin: 0 0 20px 0;
    width: 100%;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
    float: left;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
    margin: 0 0 10px 0;
    width: 100%;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
    margin: 0;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
    background-color: #ffffff !important;
    color: #333333 !important;
    border-color: #cccccc;
    border-radius: 4px !important;
    border-style: solid !important;
    border-width: 1px !important;
    font-family: inherit;
    font-size: 14px !important;
    height: auto;
    line-height: 21px !important;
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    padding: 10px 10px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    max-width: 100% !important;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder { color: #333333; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder { color: #333333; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder { color: #333333; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder { color: #333333; }

  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea, #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea {
    background-color: #ffffff !important;
    color: #333333 !important;
    border-color: #cccccc;
    border-radius: 4px !important;
    border-style: solid !important;
    border-width: 1px !important;
    font-family: inherit;
    font-size: 14px !important;
    height: auto;
    line-height: 21px !important;
    margin-bottom: 0;
    margin-top: 0;
    padding: 10px 10px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    max-width: 100% !important;
  }
  
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label {
    font-weight: normal;
    margin: 0;
    padding: 0;
    position: relative;
    display: block;
    min-height: 24px;
    padding-left: 24px;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a {
    color: #000000;
    text-decoration: underline;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p {
    color: #000000 !important;
    font-family: inherit !important;
    font-size: 12px !important;
    font-weight: normal !important;
    line-height: 18px !important;
    padding: 0 !important;
    margin: 0 5px 0 0 !important;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
    margin: 0 0 20px 0;
    float: left;
    width: 100%;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
    background-color: #7c3aed !important;
    border: none !important;
    border-radius: 9999px !important;
    box-shadow: none !important;
    color: #ffffff !important;
    cursor: pointer;
    font-family: inherit !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    line-height: 24px !important;
    height: auto;
    padding: 12px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    transition: all 0.3s ease;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
    display: none;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
    background-color: #6d28d9 !important;
    transform: translateY(-2px);
  }
  .ml-error input, .ml-error textarea, .ml-error select {
    border-color: red!important;
  }

  .ml-error .label-description,
  .ml-error .label-description p,
  .ml-error .label-description p a,
  .ml-error label:first-child {
    color: #ff0000 !important;
  }

  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter {
    color: #ff0000 !important;
  }
</style>
<style type="text/css">
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions { text-align: left; float: left; width: 100%; }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent {
    margin: 0 0 15px 0;
    text-align: left;
  }
  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {
    color: #000000;
    font-family: inherit;
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 10px 0;
  }

  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p {
    color: #64748b;
    font-family: inherit;
    font-size: 12px;
    line-height: 22px;
    margin: 0 0 10px 0;
  }

  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p a {
    color: #64748b;
  }

  #mlb2-27843431.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a {
    color: #000000;
    text-decoration: underline;
  }
</style>

<div id="mlb2-27843431" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-27843431">
  <div class="ml-form-align-center ">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/973308/forms/158663745647674840/subscribe" data-code="" method="post" target="_blank">
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow ">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Twój najlepszy email" autocomplete="email">
              </div>
            </div>
            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-name">
                <input aria-label="name" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="Twoje imię" autocomplete="given-name">
              </div>
            </div>
          </div>
          
          <div class="ml-form-embedPermissions" style="">
            <div class="ml-form-embedPermissionsContent default privacy-policy">
              <p>Zapisując sie uważasz, że akceptujesz <span><a href="https://ohiszpanski.pl/polityka-prywatnosci/" target="_blank">Politykę Prywatności</a>.</span></p>
            </div>
          </div>
          
          <div class="ml-form-recaptcha ml-validate-required" style="float: left;">
            <style type="text/css">
              .ml-form-recaptcha { margin-bottom: 20px; }
              .ml-form-recaptcha.ml-error iframe { border: solid 1px #ff0000; }
              @media screen and (max-width: 480px) {
                .ml-form-recaptcha { width: 220px!important }
                .g-recaptcha { transform: scale(0.78); -webkit-transform: scale(0.78); transform-origin: 0 0; -webkit-transform-origin: 0 0; }
              }
            </style>
            <div class="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
          </div>
          
          <input type="hidden" name="ml-submit" value="1">

          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary bg-primary hover:bg-primary-hover text-white">Chcę dostać bezpłatny link!</button>
            <button disabled="disabled" style="display: none;" type="button" class="loading">
              <div class="ml-form-embedSubmitLoad"></div>
              <span class="sr-only">Wysyłam...</span>
            </button>
          </div>
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>

      <div class="ml-form-successBody row-success" style="display: none">
        <div class="ml-form-successContent p-6 text-center bg-green-50 border border-green-200 rounded-2xl">
          <h4 class="text-2xl font-bold text-green-700 mb-2">Dziękuję!</h4>
          <p class="text-green-600">Teraz sprawdź swoją skrzynkę mailową. Link do diagnostyki już tam leci (sprawdź też SPAM/Oferty).</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default function MailerLiteForm() {
  useEffect(() => {
    // Window globals for MailerLite
    (window as any).ml_webform_success_27843431 = function () {
      const $ = (window as any).ml_jQuery || (window as any).jQuery;
      if ($) {
        $('.ml-subscribe-form-27843431 .row-success').show();
        $('.ml-subscribe-form-27843431 .row-form').hide();
      } else {
        // Fallback w/o jQuery just in case
        document.querySelector('.ml-subscribe-form-27843431 .row-success')?.setAttribute('style', 'display: block');
        document.querySelector('.ml-subscribe-form-27843431 .row-form')?.setAttribute('style', 'display: none');
      }

      // Trigger Meta Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
    };

    // Tracking fetch
    fetch("https://assets.mailerlite.com/jsonp/973308/forms/158663745647674840/takel").catch(() => {});
  }, []);

  return (
    <div className="w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
      {/* Dynamic Background element for polish */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="mb-6 text-center">
        <h3 className="font-heading font-bold text-2xl text-purple-700 mb-2">
          Podaj imię i maila a na Twoją skrzynkę poleci <span className="text-primary block mt-1">LINK DO QUIZZU</span>
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
          Po wypełnieniu zobaczysz swój wynik + pełną mapę nauki hiszpańskiego. Zobaczysz dokładnie gdzie utknąłeś i co dalej. 
          <span className="block mt-2 font-medium text-slate-800">Plus: co tydzień dostaniesz darmowe tipy!</span>
        </p>
      </div>

      <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />
      <Script src="https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b" strategy="lazyOnload" />
      
      <div dangerouslySetInnerHTML={{ __html: formHtml }} />
    </div>
  );
}
