// Supabase connection for Alina's Handmade Boutique catalog.
// The URL is public project metadata. The Publishable/anon key is safe to include
// in a browser app when Row Level Security policies are configured correctly.
// NEVER put a service_role or secret key here.
window.SUPABASE_CONFIG = {
  url: 'https://zbfqhmiqjcvicqlidswo.supabase.co',
  anonKey: 'sb_publishable_d81c4EtU4mkkqgBnVQi9HQ_nf7M2zFb'
};

// Hide the internal Photo Manager link from the public/client catalog.
// The manager itself remains separate; this only removes the admin control
// from the catalog interface.
(function(){
  const style=document.createElement('style');
  style.textContent='a[href="photo-manager.html"]{display:none!important;}';
  document.head.appendChild(style);
})();
