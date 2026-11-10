/* CS Live Chat: the Bitrix24 open line used on vodds.com (functions.php, ole777_chat_widget).
   Bitrix's own floating button is hidden; the chat is opened from the site's chat button
   through VoddsLiveChat.open(). The loader is fetched once the page has finished loading. */
(function () {
  var LOADER = 'https://hub.tri-7.com/upload/crm/site_button/loader_3_vasyc5.js';
  var TRIGGER = '.b24-widget-button-openline_livechat';
  var loaded = false;

  function load() {
    if (loaded) return;
    loaded = true;
    var style = document.createElement('style');
    style.textContent = '.b24-widget-button-wrapper{display:none!important}';
    document.head.appendChild(style);
    var script = document.createElement('script');
    script.async = true;
    script.src = LOADER + '?' + (Date.now() / 60000 | 0);
    document.head.appendChild(script);
  }

  function open() {
    load();
    var tries = 0;
    (function attempt() {
      // the widget's show handler calls BX.LiveChat, which arrives after the button markup
      var trigger = document.querySelector(TRIGGER);
      if (trigger && window.BX && window.BX.LiveChat) return trigger.click();
      if (++tries < 80) setTimeout(attempt, 250);
    })();
  }

  if (document.readyState === 'complete') load();
  else window.addEventListener('load', load);

  function isOpen() {
    return !!document.querySelector('.bx-livechat-wrapper.bx-livechat-show');
  }

  function close() {
    if (window.BX && window.BX.LiveChat) window.BX.LiveChat.closeLiveChat();
  }

  window.VoddsLiveChat = { open: open, close: close, isOpen: isOpen };
})();
