/**
 * apply_hashes_module.js
 * Client-side safe module to read injected meta hashes and EmailJS service IDs.
 * Does NOT contain any secrets. It only reads meta tags injected into index.html.
 */

window.STLUDHIS = (function(){
  function meta(name){
    try{
      var el = document.querySelector('meta[name="'+name+'"]');
      return el ? el.getAttribute('content') : null;
    }catch(e){
      return null;
    }
  }

  return {
    getHashes: function(){
      return {
        user: meta('stl-pass-user'),
        dev: meta('stl-pass-dev'),
        backup: meta('stl-pass-backup')
      };
    },
    getEmailServices: function(){
      return {
        primary: meta('stl-email-primary'),
        developer: meta('stl-email-developer'),
        education: meta('stl-email-education')
      };
    },
    debug: function(){
      console.group('STLUDHIS meta debug');
      console.log('userHash', meta('stl-pass-user'));
      console.log('devHash', meta('stl-pass-dev'));
      console.log('backupHash', meta('stl-pass-backup'));
      console.log('emailPrimary', meta('stl-email-primary'));
      console.log('emailDeveloper', meta('stl-email-developer'));
      console.log('emailEducation', meta('stl-email-education'));
      console.groupEnd();
    }
  };
})();
